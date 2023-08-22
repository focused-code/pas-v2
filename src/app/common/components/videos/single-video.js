import { memo, useContext, useState, useEffect } from 'react';
import Player from '../../../components/player';
import { VideoAnalysisContext } from '../../../state';
import { takenQuiz } from './helpers';
import { VideoItem, VideoDetails, VideoTitle, VideoMeta, SmallButton } from './video-styles';

const processVideoProgress = (progress, duration) => {
    if ((duration > 0) && (progress > 0)) {
        const result = (progress / duration) * 100;
        return result.toFixed(1);
    }
    return 0;
};

const SingleVideo = props => {
    const { quiz, image, type, video, title, length, id, user, userAnalytics, update, videoProgress,setVideoProgress } = props;
    const [duration, setDuration] = useState(0);
    const [watched, setWatched] = useState(false);

    useEffect(() => {

        renderAnalyticsBtn();
      
    }, [userAnalytics]);

    const handleDuration = (d) => {
        setDuration(d);
    };

    const handleProgress = (p) => {
        if (!p.seeking) {
            const data = {
                id,
                type,
                video_id: id,
                video_name: title,
                user_id: user && user.id || 0,
                video_length: duration,
                video_time_watched: p.playedSeconds,
                video_progress: processVideoProgress(p.playedSeconds, duration),
            };
            update(data);
        }
    };

    const renderAnalyticsBtn = () => {
        userAnalytics.forEach(element => {
            if(element.video_progress === 'None'){
                return;
            }

            if (element.id === id) {
                setWatched(true);
                setVideoProgress(element.video_progress);
            }

        });

    }

    // Check if the user has taken quiz or not and render button
    const renderQuizButton = () => {
        const status = takenQuiz(userAnalytics, id);
        return (status) ? null : <VideoMeta><SmallButton onClick={props.showQuiz}>Take Quiz</SmallButton></VideoMeta>;
    };

    return (
        <VideoItem>
            <Player
                handleProgress={handleProgress}
                handleDuration={handleDuration}
                medium
                image={image}
                video={video}
            />
            <VideoDetails>
                <VideoTitle>{title} - ({length})</VideoTitle>
                {(quiz) ? renderQuizButton() : null}
                {/* {(watched) ? <SmallButton border>Watched {videoProgress}%</SmallButton>  : ''} */}
            </VideoDetails>
        </VideoItem>
    );
};

export default memo(SingleVideo);