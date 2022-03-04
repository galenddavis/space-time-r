import React from 'react'
import { TimerHub } from './components/timer/timer-hub'
import { VideoPlayer } from './components/videos/vid-player'
import "./styles/main.css"
import background from './images/background.png'

export const App = () => {
    return (
        <div 
            className='background'
            style={{
                backgroundImage: `url(${background})`
            }}
            >
            <TimerHub />
            <VideoPlayer />
        </div>
    )
}