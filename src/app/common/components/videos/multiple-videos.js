import { memo, useContext, useEffect, useState } from 'react';
import { Loading, SmallLoading } from './loader';
import SingleVideo from './single-video';
import Playlist from './playlist';
import QuizModal from './quiz-modal';
import { OnboardingContext } from '../../state';
import { TrainingGround, MainVideoSection, PlaylistSection } from './video-styles';
import './styles.scss';


const MultipleVideos = (props) => {

    const { user, type, videos, userAnalytics } = props;
    const [showquiz, setShowQuiz] = useState(false);

    const { selectedVideo, setSelectedVideo } = useContext(OnboardingContext);

    useEffect(() => {
        if (type === 'watch-multiple-video') {
            setSelectedVideo(videos[0]); // select the 1st video on the list
        } else {
            setSelectedVideo(videos[0].videos[0]); // select the 1st video on the list on the first accordion
        }
    }, []);

    const toggle = () => setShowQuiz(!showquiz);

    const showQuiz = (s) => {
        setSelectedVideo(s);
        setShowQuiz(true);
    };

    const pickVideo = (v) => {
        setSelectedVideo(v);
    };

    const renderVideos = () => {
        if (!selectedVideo || !user) {
            return <Loading />;
        }
        return videos && videos.length > 0 && (
            <>
                <MainVideoSection>{(!selectedVideo) ? <SmallLoading /> : <SingleVideo userAnalytics={userAnalytics} user={user} showQuiz={toggle} {...selectedVideo} />}</MainVideoSection>
                <PlaylistSection><Playlist type={type} userAnalytics={userAnalytics} showQuiz={showQuiz} selected={selectedVideo} select={pickVideo} videos={videos} /></PlaylistSection>
            </>
        );
    };

    return (
        <section className="content-section">
            <section className="left">
                <div className="card">

                    <div className="card-body">
                        <TrainingGround>
                            {renderVideos()}
                        </TrainingGround>
                    </div>
                </div>
            </section>
            <QuizModal selected={selectedVideo} status={showquiz} toggle={toggle} user={user} />
        </section>
    );
};

export default memo(MultipleVideos);
