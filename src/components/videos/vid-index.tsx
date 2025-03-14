// import { useState, useEffect } from "react";
import VideoIndexItem from "./vid-index-item";
import { videoList } from "../utils/vid-utils";
import { SetStateAction, useEffect, useState } from "react";

interface IndexProps {
    setCurrentIdx: React.Dispatch<SetStateAction<number>>

}

// const VideoIndex = ({ selectTrack, indexShown }: IndexProps) => {
const VideoIndex = ({ setCurrentIdx }: IndexProps) => {
    const [indexVisible, setIndexVisible] = useState<boolean>(false)

    useEffect(() => {
        // setIndexVisible(indexShown)

        const vidIdx = document.getElementsByClassName('video-index-container')[0]
        if (indexVisible) {
            vidIdx.classList.remove("hidden")
        } else if (!indexVisible) {
            vidIdx.classList.add("hidden")
        }
        // console.log("indexVisible", indexVisible)
        // setIndexVisible(!indexVisible)
    }, [indexVisible]);


    // const showIndex =() => {
    //     const vidIdx = document.getElementsByClassName('video-index-container')[0]
    //     if (indexVisible) {
    //         vidIdx.classList.remove("active")
    //     } else if (!indexVisible) {
    //         vidIdx.classList.add("active")
    //     }
    //     setIndexVisible(!indexVisible)
    // }

    return (
        <div className="video-index-wrapper">
            <button className="index-toggle" onClick={() => setIndexVisible(!indexVisible)}>
                {/* Show Tracks */}
            </button>
            <div className="video-index-wrapper-inner">
                <ul className="video-index-container">
                    {videoList.map((video, idx) => (
                        <li className="video-index-item" 
                            key={video.id}
                            onClick={() => setCurrentIdx(idx)}    
                        >
                            <VideoIndexItem
                                video={video}
                            />
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default VideoIndex;