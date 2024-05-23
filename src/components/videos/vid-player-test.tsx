import { useState, useEffect } from 'react';
import { Util } from "../utils/vid-utils"
import ReactPlayer from 'react-player/lazy'
// import "https://www.youtube.com/iframe_api"


// type vidPlayer = {
//     height: string,
//     width: string,
//     videoId: string,
//     playerVars: object,
//     events: object
// }

interface VidPlayerProps {
    videoId: string
}

const VideoPlayer = ({ videoId }: VidPlayerProps) => {

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://www.youtube.com/iframe_api"
    //     script.async = true;
    //     document.body.appendChild(script)
    // }, [])

    const [vidSrc, setVidSrc] = useState<string>(videoId || Util.videos[0].id) 
    // const [player, setPlayer] = useState<vidPlayer | null>(null)

    // const onYoutubeIframeAPIReady = () => {
    //     setPlayer(new YT.Player("player", {

    //     }))

    return (
        <div>
            <ReactPlayer url={vidSrc} />
        </div>
    )
}


export default VideoPlayer;

