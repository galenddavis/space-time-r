import {useEffect, useState} from 'react';
// import Youtube from 'react-youtube';
// import { VideoIndex } from './vid-index';
import { Util } from "../utils/vid-utils"

interface VidPlayerProps {
    videoId: string
}

const VidPlayer = ({ videoId }: VidPlayerProps) => {
    const [videoSrc, setVideoSrc] = useState<string>(videoId || Util.videos[0].id)
    const [player, setPlayer] = useState<any>(null)

    // Resets video player if videoId prop changes
    useEffect(() => {
        setVideoSrc(videoId)
        console.log(videoSrc)
    }, [videoId])

    // Selects new random video from the list
    const shuffleVideo = (numVids: number) => {
        const randomNum = Math.floor(Math.random() * (numVids - 1) + 1)
        setVideoSrc(Util.videos[randomNum].id)
    }

    // Select and Change Video
    const changeVideo = ({ videoId }: {videoId: string}): void => {
        setVideoSrc(videoId)
    }

    // Pause Video
    const pauseVid = () => {
        player.pauseVideo()
    }

    // Play Video
    const playVid = () => {
        player.playVideo()
    }
    
    const onReady = (event: any) => {
        setPlayer(event.target)
    }

    return (
        <div className='video-player-container'>
            <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${videoSrc}`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen="false"></iframe>
            {/* <Youtube
                className='video-player'
                videoId={videoSrc}
                opts={Util.opts}
                onReady={onReady}
            />
            <section className='video-buttons'>
                <VideoIndex changeVideo={() => changeVideo} />
                <img src={shuffleBtn} alt="play" onClick={() => shuffleVideo(Util.videos.length)} />
                <img src={playBtn} alt="play" onClick={() => playVid()} />
                <img src={pauseBtn} alt="pause" onClick={() => pauseVid()} />
            </section> */}
        </div>
    )

}

export default VidPlayer;