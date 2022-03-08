import React, { useState } from 'react';
import { VideoIndexItem } from './vid-index-item';
import './vid-index.css';
import DialogueBox from '../../images/dialogue-box.png';
import DialogueBorder from '../../images/dialogue-border2.png';
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
        <div className="vid-index-container" style={{
            backgroundImage: `url(${DialogueBox})`,
            borderImage: `url(${DialogueBorder}) 25% / 30px 30px / 0 round`
        }}>
            <ul className={`video-index ${indexHidden}`}>{vidList}</ul>
            <button onClick={() => toggleIndex()}>Show Videos</button>
        </div>
    )
}