import React, { useState } from 'react';
import { VideoIndexItem } from './vid-index-item';
const Util = require('../../util/vid-utils');

export const VideoIndex = ({ changeVideo }) => {
    const [indexHidden, setIndexHidden] = useState("hidden")

    // toggle index visibility
    const toggleIndex = () => {
        let indexState = indexHidden === "hidden" ? "unhidden" : "hidden"
        setIndexHidden(indexState)
    }

    // Mapping over video list
    const vidList = Util.videos.map((video) => {
        return (
            <VideoIndexItem
                key={Util.videos.indexOf(video)}
                selectVid={() => changeVideo(video.id)}
                video={video}
            />
        )
    })

    return (
        <div>
            <ul className={`video-index ${indexHidden}`}>{vidList}</ul>
            <button onClick={() => toggleIndex()}>Show Videos</button>
        </div>
    )
}