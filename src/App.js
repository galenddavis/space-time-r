import React from 'react'
import { TimerHub } from './components/timer/timer-hub'
import { VideoPlayer } from './components/videos/vid-player'

export const App = () => {
    return (
        <div>
            <TimerHub />
            <VideoPlayer />
        </div>
    )
}