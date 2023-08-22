import { memo } from 'react';
import { ListGroup } from 'reactstrap';
import { takenQuiz } from './helpers';
import { NewSticker } from './new-sticker';
import { Accordion } from './accordion';
import { SmallButton, ListItem, Span } from './video-styles';

const Playlist = props => {
    const { videos, selected, userAnalytics, type } = props;

    const checkActive = (id) => {
        if (selected) {
            return (selected.id === id);
        }
        return false;
    };

    // Check if the user has taken quiz or not and render button
    const renderQuizButton = (v) => {
        const status = takenQuiz(userAnalytics, v.id);
        return (status) ? null : <SmallButton selected={checkActive(v.id)} onClick={() => props.showQuiz(v)}>Quiz</SmallButton>;
    };

    const hasQuiz = (v) => {
        const { quiz, id } = v;
        if (quiz) {
            return !takenQuiz(userAnalytics, id);
        }
        return quiz;
    };

    const renderAnalytics = (v) => {
        let video_progress = 0;

        const temp = userAnalytics.filter(c => (c.id === v.id.replace(/\s/g, '')) && (c.type_id === v.type));

        if (temp.length) {
            video_progress = (temp[0].video_progress !== 'None') ? temp[0].video_progress : 0;
        } else if (temp.length > 1) {
            const max = Math.max(...temp.map(o => (o.video_progress !== 'None') ? Number(o.video_progress) : 0));
            video_progress = max;
        }

        return (video_progress > 0) ? <SmallButton border>Watched {video_progress}%</SmallButton> : null;

    }

    return (
        <>
            {(type === 'watch-multiple-video-accordion') ? (
                <Accordion open={-1}>
                    {videos.map((day) => (
                        <Accordion.Item key={day.id}>
                            <Accordion.Header>
                                {day.title}
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    {day.videos.map((video) => <ListItem selected={checkActive(video.id)} key={video.id}><Span hasQuiz={hasQuiz(video)} onClick={() => props.select(video)}>{video.title} - ({video.length}) {(video.isnew) ? <NewSticker /> : null}</Span> {(video.quiz) ? renderQuizButton(video) : null} <Span style={{ marginTop: '4px' }} outline color="success">{renderAnalytics(video)}</Span></ListItem>)}
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            ) : (
                <ListGroup>
                    {videos.map((video) =>
                        <ListItem selected={checkActive(video.id)} key={video.id}>
                            <Span hasQuiz={hasQuiz(video)} onClick={() => props.select(video)}>{video.title} - ({video.length}) {(video.isnew) ? <NewSticker selected={checkActive(video.id)} /> : null}</Span> {(video.quiz) ? renderQuizButton(video) : null}
                            <Span style={{ marginTop: '4px' }} outline color="success">{renderAnalytics(video)}</Span>
                        </ListItem>)}
                </ListGroup>
            )}

        </>
    );
};

export default memo(Playlist);
