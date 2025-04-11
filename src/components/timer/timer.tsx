import { useState, useEffect, SetStateAction } from 'react';
// import "./timer.css"


interface TimerProps {
  timerDuration: 'short' | 'medium' | 'long',
  setTimerDuration: React.Dispatch<SetStateAction<'short' | 'medium' | 'long'>>

}

const Timer = ({timerDuration, setTimerDuration}: TimerProps) => {
  const [seconds, setSeconds] = useState<number>(1500); // 25 minutes as seconds
  const [workCount, setWorkCount] = useState<number>(0);

  
  // Effect to set the timer duration based on the selected mode
  // This effect runs whenever the mode changes and sets the seconds accordingly
  useEffect(() => {
    const modeDurations: Record<'short' | 'medium' | 'long', number> = {
        short: 300,   // 5 minutes as seconds
        medium: 900,  // 15 minutes as seconds
        long: 1500,   // 25 minutes as seconds
      };

    setSeconds(modeDurations[timerDuration]);
  }, [timerDuration]);

  // Timer effect
  // This effect runs every second and decrements the timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else { //Timer Expires
        if (timerDuration === 'long' && workCount === 4) {
          setTimerDuration('medium');
          setWorkCount(workCount + 1);
        } else if (timerDuration === 'long' && workCount < 4) {
          setTimerDuration('short');
          setWorkCount(workCount + 1);
        } else if (timerDuration === 'medium') {
          setTimerDuration('long');
          setWorkCount(0)
        } else if (timerDuration === 'short') {
          setTimerDuration('long');
        }
      }
    }, 1000)
      return () => clearInterval(timer);
  }, [seconds, setTimerDuration, timerDuration, workCount]);

  const handleModeChange = (newMode: 'short' | 'medium' | 'long') => {
    setTimerDuration(newMode);
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className='timer-wrapper bordered'>
      <p className='timer-counter'>{formatTime(seconds)}</p>
      <div className='timer-button-wrapper'>
        <button className='shortBtn customBtn' onClick={() => handleModeChange('short')} aria-label="five minutes"></button>
        <button className='mediumBtn customBtn' onClick={() => handleModeChange('medium')} aria-label="five minutes"></button>
        <button className='longBtn customBtn' onClick={() => handleModeChange('long')} aria-label="five minutes"></button>
      </div>
    </div>
  );
};

export default Timer;
