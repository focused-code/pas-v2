import { memo, useEffect, useState, useContext } from 'react';
import * as Survey from 'survey-react';
import { find } from 'lodash';
import { Loading } from '../../../components/spinner';
import { VideoAnalysisContext } from '../../../state';
import { QuizCenter, SelectedQuiz, QuizContainer } from './video-styles';
import './quiz.scss';

Survey.StylesManager.applyTheme('defaultV2');

const getScore = (resp) => {
    const total_answers = resp.getCorrectedAnswerCount();
    const total_questions = resp.getQuizQuestionCount();
    const result = (total_answers > 0) ? (total_answers / total_questions) * 100 : 0;
    return (result > 0) ? Number(result.toFixed(1)) : 0;
};

const getReason = (name, list) => {
    if (list) {
        const found = find(list, (each) => each.questions[0].name === name);
        if (found) {
            return found.questions[0].reason;
        }
    }

    return '';
};

const Quiz = (props) => {

    const [questions, setQuestions] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [responses, setResponses] = useState(null);
    const { update } = useContext(VideoAnalysisContext);

    const { video, user } = props;
    const { id, title } = video;
    const url = `${process.env.REACT_APP_CONTENT_URL}/training-videos/100k/quizzes/${id}.json`;

    const getData = () => {
        setLoading(true);
        setShowReview(false);
        fetch(url, {
            headers: {
                'Content-Type': 'application/json', Accept: 'application/json',
            },
        }).then((response) => response.json()).then((json) => {
            setQuestions(json);
            setLoading(false);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const renderQuiz = () => {
        if (loading) {
            return <Loading />;
        }

        const { type } = (questions) ? questions[0].questions[0] : '';

        // Disbale random order on the choices
        if (questions) {
            questions.forEach(e => e.questions[0].choicesOrder = 'none');
        }

        const configs = {
            title,
            showProgressBar: 'top',
            firstPageIsStarted: false,
            startSurveyText: 'Start Quiz',
            pages: questions,
            completedHtml: (type !== 'rating') ? '<h4>You have answered <b>{correctedAnswers}</b> questions correctly from <b>{questionCount}</b>.</h4>' : '<h4>Thank you!</h4>',
        };

        const quiz = new Survey.Model(configs);
        quiz.showTitle = false;

        // Save an initial data template
        // Without this, the quiz re-renders on complete
        if (quiz.state === 'empty') {
            const data = {
                id,
                type: props.type,
                video_id: id,
                video_name: title,
            };
            update(data);
        }

        quiz.onComplete.add((resp) => {
            const quiz_answers = JSON.stringify(resp.data, null, 3);
            const correct_answers = resp.getCorrectedAnswerCount();
            const total_questions = resp.getQuizQuestionCount();
            const quiz_score = getScore(resp);
            const user_id = user && user.id || 0;
            const data = {
                id,
                type: props.type,
                video_id: id,
                video_name: title,
                user_id,
                quiz_score,
                quiz_answers,
                quiz_correct_answers: correct_answers,
                quiz_total_questions: total_questions,
                quiz_url: url,
            };

            // save the results to DB
            update(data);
            // Dont show review on the rating question on the last quiz
            if (type !== 'rating') {
                setResponses(resp);
                setShowReview(true);
            }

        });
        return <Survey.Survey model={quiz} />;
    };

    const renderQuizReview = () => {
        if (loading) {
            return <Loading />;
        }

        // Disbale random order on the choices
        if (questions) {
            questions.forEach(e => e.questions[0].choicesOrder = 'none');
        }

        const configs = {
            title: 'Quiz Review',
            showProgressBar: 'top',
            firstPageIsStarted: false,
            startSurveyText: 'Start Quiz',
            pages: questions,
            completedHtml: '<h4>You have answered <b>{correctedAnswers}</b> questions correctly from <b>{questionCount}</b>.</h4>',
        };

        const quiz = new Survey.Model(configs);
        quiz.showTitle = true;
        quiz.mode = 'display';
        quiz.questionsOnPageMode = 'singlePage';
        quiz.showNavigationButtons = 'true';
        quiz.showTimerPanel = 'none';
        quiz.maxTimeToFinishPage = 0;
        quiz.choicesOrder = 'none';
        quiz.maxTimeToFinish = 0;
        quiz.data = responses ? responses.data : null;

        quiz.onAfterRenderQuestion.add((quiz, options) => {

            const span = document.createElement('span');
            const reasonSpan = document.createElement('span');
            const isCorrect = options
                .question
                .isAnswerCorrect();
            const { name } = options.question.propertyHash;
            const reason = getReason(name, questions);
            span.innerHTML = isCorrect
                ? 'Correct '
                : 'Incorrect ';
            reasonSpan.innerHTML = (reason.length > 0) ? `Reason: ${reason}` : '';
            reasonSpan.style.color = 'green';
            reasonSpan.style.fontStyle = 'italic';
            reasonSpan.style.fontSize = '12px';
            span.style.color = isCorrect
                ? 'green'
                : 'black';
            const header = options
                .htmlElement
                .querySelector('h5');
            const description = options
                .htmlElement
                .querySelector('.sv-question__description');
            if (!isCorrect) {
                header.style.backgroundColor = 'salmon';
                const radio = options
                    .htmlElement
                    .querySelector(`input[value="${options.question.correctAnswer}"]`);
                if (radio) {
                    radio.parentElement.style.color = 'green';
                }
                description.appendChild(reasonSpan);
            }
            header.appendChild(span);

        });
        return <Survey.Survey model={quiz} />;
    };

    return (
        <QuizCenter>
            <SelectedQuiz>
                <QuizContainer questions={questions}>
                    {(showReview) ? renderQuizReview() : renderQuiz()}
                </QuizContainer>
            </SelectedQuiz>
        </QuizCenter>
    );
};

export default memo(Quiz);
