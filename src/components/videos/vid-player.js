import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { VideoIndex } from './vid-index';
const Util = require('../../util/vid-utils');

export const VideoPlayer = () => {
    const [videoSrc, setVideoSrc] = useState(Util.videos[0].id)
    const [player, setPlayer] = useState(null)

    // Resets video player if videoId prop changes
    // useEffect(() => {
    //     setVideoSrc(videoId)
    // }, [videoId])

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
            <YouTube
                className='video'
                videoId={videoSrc}
                opts={Util.opts}
                onReady={onReady}
            />
            <section className='vid-buttons'>
                <VideoIndex changeVideo={changeVideo} />
            </section>
        </div>
    )
}