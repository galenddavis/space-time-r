import { useState, useEffect } from 'react';
import { Video, Util } from "../utils/vid-utils"
import ReactPlayer from 'react-player/lazy'


// interface Video {
//     title: string,
//     id: string
// }

interface VideoProps {
    video: Video
}

const VideoPlayer = ({ video }: VideoProps) => {
    const [playlistIdx, setPlaylistIdx] = useState<number>(0) 
    const [vidSrc, setVidSrc] = useState<string>(video.id || Util.videos[playlistIdx].id)
    const [playing, setPlaying] = useState<boolean>(true)
    const [muted, setMuted] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(1)

    // useEffect(() => {
    //   setVidSrc(videoId)
    // }, [videoId])
    
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
        setPlaying(!playing)
    }

    // const changeVol = (event) => {
    //     setVolume(event.target.value)
    // }

    const muteTrack = () => {
        setMuted(!muted)
    }
 
    return (
        <div>
                <div className="controls-container">
                    <button onClick={() => nextTrack()}>Next</button>
                    <button onClick={() => prevTrack()}>Previous</button>
                    <button onClick={() => muteTrack()}>Mute</button>
                    <button onClick={() => pauseVid()}>{playing ? "Pause" : "Play"}</button>
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
                width="100%"
                height="100%"
                playing={playing}
                muted={muted}
                volume={volume}
                />

        </div>
    )
}


export default VideoPlayer;

