import { useState, useEffect } from 'react';
import { Video, Util } from "../utils/vid-utils";
import ReactPlayer from 'react-player/lazy';  
import "./vid-player.css";


// Video Props structure sent from App.tsx with default video. Potentially don't need
interface VideoProps {
    video: Video
}

const VideoPlayer = ({ video }: VideoProps) => {
    const [vidTitle, setVidTitle] = useState<string>(video.title)
    const [playlistIdx, setPlaylistIdx] = useState<number>(0) 
    const [vidSrc, setVidSrc] = useState<string>(video.id || Util.videos[playlistIdx].id)
    const [playing, setPlaying] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(1)

    // Updates the vidSrc when the playlistIdx changes via nextTrack or prevTrack functions
    useEffect(() => {
      setVidSrc(Util.videos[playlistIdx].id)
      setVidTitle(Util.videos[playlistIdx].title)
    }, [playlistIdx])
    

    const nextTrack = () => {
        let nextIdx = playlistIdx + 1
        if (nextIdx === Util.videos.length) {
            nextIdx = 0
        }
        setPlaylistIdx(nextIdx)
    }
    
    const prevTrack = () => {
        let prevIdx = playlistIdx - 1
        if (prevIdx < 0) {
            prevIdx = Util.videos.length - 1
        }
        setPlaylistIdx(prevIdx)
    }

    const pauseVid = () => {
        const button = document.getElementsByClassName("customBtn")[1]
        if (!playing) {
            button.classList.add("paused")
        } else {
            button.classList.remove("paused")
        }
        setPlaying(!playing)
    }
 
    return (
        <div>
            <h1 className="video-title">{vidTitle}</h1>
            <div className="controls-container">
                <button className="prevBtn customBtn"onClick={() => prevTrack()}></button>
                <button className="playBtn customBtn" onClick={() => pauseVid()}></button>
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
                url={`https://www.youtube.com/watch?v=${vidSrc}`}
                width="200px"
                height="200px"
                playing={playing}
                volume={volume}
                />

        </div>
    )
}


export default VideoPlayer;

