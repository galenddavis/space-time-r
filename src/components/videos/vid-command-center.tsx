import { useState } from "react"
import { Video, videoList } from "../utils/vid-utils"
import VideoPlayer from "./vid-player"



const VideoCommander = () => {


    const defaultVideo: Video = {
        title: videoList[0].title,
        id: videoList[0].id
    }

    const [currentVid, setCurrentVid] = useState<Video>(defaultVideo) 
    const [currentIdx, setCurrentIdx] = useState<number>(0)

    return (
        <div className="vid-command-wrapper">
            <VideoPlayer
                currVideo={currentVid}
                playIndex={currentIdx}
            />
        </div>
    )

}

export default VideoCommander;