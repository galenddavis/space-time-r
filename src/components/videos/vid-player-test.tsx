import { useState, useEffect } from 'react';
import { Video, Util } from "../utils/vid-utils"
import ReactPlayer from 'react-player/lazy'


// Video Props structure sent from App.tsx with default video. Potentially don't need
interface VideoProps {
    video: Video
}

const VideoPlayer = ({ video }: VideoProps) => {
    const [playlistIdx, setPlaylistIdx] = useState<number>(0) 
    const [vidSrc, setVidSrc] = useState<string>(video.id || Util.videos[playlistIdx].id)
    const [playing, setPlaying] = useState<boolean>(true)
    const [volume, setVolume] = useState<number>(1)

    
    useEffect(() => {
      setVidSrc(Util.videos[playlistIdx].id)
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
        if (prevIdx <= 0) {
            prevIdx = Util.videos.length - 1
        }
        setPlaylistIdx(prevIdx)
    }

    const pauseVid = () => {
        const button = document.getElementsByClassName("testBtn")[0]
        if (!playing) {
            button.classList.add("paused")
        } else {
            button.classList.remove("paused")
        }
        setPlaying(!playing)
    }
 
    return (
        <div>
                <div className="controls-container">
                    <button onClick={() => nextTrack()}>Next</button>
                    <button onClick={() => prevTrack()}>Previous</button>
                    <button onClick={() => pauseVid()}>{playing ? "Pause" : "Play"}</button>
                    <button className="testBtn" onClick={() => pauseVid()}></button>
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

