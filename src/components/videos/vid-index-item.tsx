import { Video } from "../utils/vid-utils"

interface VideoProps {
    video: Video
}

const VideoIndexItem = ({ video }: VideoProps) => {

    

    return (
        <div>
            <p className="video-idx-title">
                <span>{video.title}</span>
            </p>
        </div>
    )
}

export default VideoIndexItem;