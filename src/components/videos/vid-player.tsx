import { useState } from 'react';
import { Video } from "../utils/vid-utils";
import ReactPlayer from 'react-player/lazy';  


// Video Props structure sent from Vid Commander.tsx.
interface VideoProps {
    currVideo: Video, 
    nextTrack: () => void,
    prevTrack: () => void,
    pauseTrack: () => void,
    playing: boolean
}

const VideoPlayer = ({ currVideo, nextTrack, prevTrack, pauseTrack, playing }: VideoProps) => {
    
    const [volume, setVolume] = useState<number>(1)

 
    return (
        <div className='video-player-wrapper'>
            <h1 className="video-title">{currVideo.title}</h1>
            <div className="controls-container">
                <button className="prevBtn customBtn"onClick={() => prevTrack()}></button>
                <button className="playBtn customBtn" onClick={() => pauseTrack()}></button>
                <button className="nextBtn customBtn"onClick={() => nextTrack()}></button>
                <input 
                    onChange={event => setVolume(Number(event.target.value))} 
                    type="range" 
                    name="Volume" 
                    id="Volume" 
                    min='0' 
                    max="1" 
                    step="0.1"/>
            </div>
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

