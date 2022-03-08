import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import "./vid-player.css"
import { VideoIndex } from './vid-index';
import DialogueBox from '../../images/dialogue-box.png';
import DialogueBorder from '../../images/dialogue-border2.png';
const Util = require('../../util/vid-utils');

export const VideoPlayer = () => {
    const [videoSrc, setVideoSrc] = useState(Util.videos[0].id)
    const [player, setPlayer] = useState(null)

    // Selects a new random video from the list
    const shuffleVideo = (numVids) => {
        let randomNum = Math.floor(Math.random() * (numVids - 1) + 1)
        setVideoSrc(Util.videos[randomNum].id)
    }

    // Select and change video
    const changeVideo = (videoId) => {
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

    const onReady = (event) => {
        setPlayer(event.target)
    }

    return (
        <div className='video-container'>
            <VideoIndex changeVideo={changeVideo} />
            <section className='vid-buttons' style={{
                backgroundImage: `url(${DialogueBox})`,
                borderImage: `url(${DialogueBorder}) 25% / 30px 30px / 0 round`
            }}>
                <YouTube
                    className='video-player'
                    videoId={videoSrc}
                    opts={Util.opts}
                    onReady={onReady}
                />
                <button onClick={() => playVid()}>Play</button>
                <button onClick={() => pauseVid()}>Pause</button>
                <button onClick={() => shuffleVideo(Util.videos.length)}>Shuffle</button>
            </section>
        </div>
    )
}

