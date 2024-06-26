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
    // const [playing, setPlaying] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(1)

    // Controls playing a pausing of Video
    // const pauseVid = () => {
    //     const button = document.getElementsByClassName("playBtn")[0]
    //     if (!playing) {
    //         button.classList.add("paused")
    //     } else {
    //         button.classList.remove("paused")
    //     }
    //     setPlaying(!playing)
    // }
 
    return (
        <div>
            <h1 className="video-title">{currVideo.title}</h1>
            <div className="controls-container">
                <button className="prevBtn customBtn"onClick={() => prevTrack()}></button>
                <button className="playBtn customBtn" onClick={() => pauseTrack()}></button>
                <button className="nextBtn customBtn"onClick={() => nextTrack()}></button>
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

