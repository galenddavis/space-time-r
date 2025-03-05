import React, { SetStateAction, useState } from 'react';
import { Video } from "../utils/vid-utils";
import ReactPlayer from 'react-player/lazy';  


// Video Props structure sent from Vid Commander.tsx.
interface VideoProps {
    currVideo: Video, 
    nextTrack: () => void,
    prevTrack: () => void,
    pauseTrack: () => void,
    playing: boolean,
    indexShown: boolean,
    setIndexShown: React.Dispatch<SetStateAction<boolean>>
}

const VideoPlayer = ({ currVideo, nextTrack, prevTrack, pauseTrack, playing, indexShown, setIndexShown }: VideoProps) => {
    
    const [volume, setVolume] = useState<number>(1)

 
    return (
        <div className='video-player-wrapper'>
            <h1 className="video-title">{currVideo.title}</h1>
            <div className="controls-container">
                <button className="prevBtn customBtn"onClick={() => prevTrack()}></button>
                <button className="playBtn customBtn" onClick={() => pauseTrack()}></button>
                <button className="nextBtn customBtn"onClick={() => nextTrack()}></button>
                <button className="showIndex" onClick={() => setIndexShown(!indexShown)}>Show Index</button>
            </div>
                <input 
                    onChange={event => setVolume(Number(event.target.value))} 
                    type="range" 
                    name="Volume" 
                    id="Volume" 
                    min='0' 
                    max="1" 
                    step="0.1"/>
            <ReactPlayer
                className="video-player"
                url={`https://www.youtube.com/watch?v=${currVideo.id}`}
                width="200px"
                height="200px"
                playing={playing}
                volume={volume}
                />

        </div>
    )
}


export default VideoPlayer;


// Additional option grants
// Four year grant + futher opportunities likely
// Time to exercise
// Can exercise after a year if necessary. (90 day window after leaving)
// Gusto Benefits Providers 
// Benefits mostly paid premiums
// 5% match on 401k