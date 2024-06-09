// import { useState, useEffect } from "react";
import VideoIndexItem from "./vid-index-item";
import { videoList } from "../utils/vid-utils";



const VideoIndex = () => {


    return (
        <ul className="video-index-container">
            {videoList.map(video => (
                <li className="video-index-item" key={video.id}>
                    <VideoIndexItem
                        video={video}
                    />
                </li>
            ))}
        </ul>
    )
}

export default VideoIndex;