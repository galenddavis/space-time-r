import React, { useState } from 'react';
import { Timer } from './timer';

export const TimerHub = () => {
    const defaultDuration = 25;
    const shortBreak = 5;
    const longBreak = 15;

    const [shortBreakCount, setShortBreakCount] = useState(0);
    const [currentClock, setCurrentClock] = useState(defaultDuration)

    // Logic for switching clocks when timer runs out
    const switchClocks = () => {
        if (currentClock === defaultDuration) {
            setCurrentClock(shortBreak)
        }
        if (currentClock === shortBreak) {
            setCurrentClock(defaultDuration)
            setShortBreakCount(shortBreakCount + 1)
        }
        if (currentClock === defaultDuration && shortBreakCount === 4) {
            setShortBreakCount(0)
            setCurrentClock(longBreak)
        }
        if (currentClock === 15) {
            setCurrentClock(defaultDuration)
        }
    }

    return (
        <div className='timer-hub'>
            <section className='timer-tabs'>
                <span onClick={() => setCurrentClock(defaultDuration) }>Space Time</span>
                <span onClick={() => setCurrentClock(shortBreak) }>Short Break</span>
                <span onClick={() => setCurrentClock(longBreak) }>Long Break</span>
            </section>
            <Timer duration={currentClock} switchClocks={switchClocks} />
        </div>
    )
}