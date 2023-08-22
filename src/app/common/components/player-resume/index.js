import { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/lazy';

const Player = ({ video, handleProgress, image, small, medium, handleDuration,seekTo }) => {
    const [playbackRate, setPlaybackRate] = useState(1.0);
    const [isReady, setIsReady] = useState(false);
    const style = (small) ? 'player-wrapper small' : ((medium) ? 'player-wrapper medium' : 'player-wrapper large');
    
    const handleSeek = useCallback((p) =>{

        if(!isReady && seekTo && !p.seeking){
            p.seekTo(seekTo)
            setIsReady(true)
        }  
    },[isReady])
    return (
        <div className={style}>
            <ReactPlayer
                controls
                className="react-player"
                playing
                onDuration={handleDuration}
                onProgress={handleProgress}
                onReady={handleSeek}
                pip
                playbackRate={playbackRate}
                width="100%"
                height="100%"
                light={image}
                url={video}
                config={{
                    file: {
                        attributes: {
                            controlsList: 'nodownload',
                        },
                    },
                }}
            />
            <div className="player-buttons">
                <button className={(playbackRate === 0.75) ? 'active' : ''} type="button" onClick={() => setPlaybackRate(0.75)}>0.75x</button>
                <button className={(playbackRate === 1) ? 'active' : ''} type="button" onClick={() => setPlaybackRate(1)}>1x</button>
                <button className={(playbackRate === 1.25) ? 'active' : ''} type="button" onClick={() => setPlaybackRate(1.25)}>1.25x</button>
                <button className={(playbackRate === 1.5) ? 'active' : ''} type="button" onClick={() => setPlaybackRate(1.5)}>1.5x</button>
                <button className={(playbackRate === 2) ? 'active' : ''} type="button" onClick={() => setPlaybackRate(2)}>2x</button>
            </div>
        </div>
    );
};

export default memo(Player);

Player.propTypes = {
    video: PropTypes.string.isRequired,
    image: PropTypes.string,
};
