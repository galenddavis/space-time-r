// import { useState, useEffect } from "react";
import VideoIndexItem from "./vid-index-item";
import { videoList } from "../utils/vid-utils";
import { useState } from "react";



const VideoIndex = () => {
    const [indexVisible, setIndexVisible] = useState<boolean>(false)

    const showIndex =() => {
        const vidIdx = document.getElementsByClassName('video-index-container')[0]
        if (indexVisible) {
            vidIdx.classList.add("hidden")
        } else if (!indexVisible) {
            vidIdx.classList.remove("hidden")
        }
        setIndexVisible(!indexVisible)
    }

    return (
        <div className="video-index-wrapper">
            <button className="index-toggle" onClick={() => showIndex()}>
                Show Tracks
            </button>
            <ul className="video-index-container hidden">
                {videoList.map(video => (
                    <li className="video-index-item" key={video.id}>
                        <VideoIndexItem
                            video={video}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default VideoIndex;