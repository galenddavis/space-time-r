// import { useState, useEffect } from "react";
import VideoIndexItem from "./vid-index-item";
import { Video, videoList } from "../utils/vid-utils";
import { useEffect } from "react";

interface IndexProps {
    selectTrack: (video: Video) => void,
    indexShown: boolean
}

const VideoIndex = ({ selectTrack, indexShown }: IndexProps) => {
    // const [indexVisible, setIndexVisible] = useState<boolean>(false)

    useEffect(() => {
        // setIndexVisible(indexShown)

        const vidIdx = document.getElementsByClassName('video-index-container')[0]
        if (indexShown) {
            vidIdx.classList.remove("hidden")
        } else if (!indexShown) {
            vidIdx.classList.add("hidden")
        }
        console.log("indexShown", indexShown)
        // setIndexVisible(!indexVisible)
    }, [indexShown]);


    // const showIndex =() => {
    //     const vidIdx = document.getElementsByClassName('video-index-container')[0]
    //     if (indexVisible) {
    //         vidIdx.classList.add("hidden")
    //     } else if (!indexVisible) {
    //         vidIdx.classList.remove("hidden")
    //     }
    //     setIndexVisible(!indexVisible)
    // }

    return (
        <div className="video-index-wrapper">
            {/* <button className="index-toggle" onClick={() => showIndex()}>
                Show Tracks
            </button> */}
            <ul className="video-index-container hidden">
                {videoList.map(video => (
                    <li className="video-index-item" 
                        key={video.id}
                        onClick={() => selectTrack(video)}    
                    >
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