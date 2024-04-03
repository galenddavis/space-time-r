import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(1500); // 25 minutes as seconds
  const [mode, setMode] = useState<'short' | 'medium' | 'long'>('long');

  
  useEffect(() => {
    const modeDurations: Record<'short' | 'medium' | 'long', number> = {
        short: 300,   // 5 minutes as seconds
        medium: 900,  // 15 minutes as seconds
        long: 1500,   // 25 minutes as seconds
      };

    setSeconds(modeDurations[mode]);
  }, [mode]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (seconds === 0) {
      // Timer expired
      console.log('Timer expired!');
    } else {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [seconds]);

  const handleModeChange = (newMode: 'short' | 'medium' | 'long') => {
    setMode(newMode);
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <div>
        <button onClick={() => handleModeChange('short')}>Short (5 min)</button>
        <button onClick={() => handleModeChange('medium')}>Medium (15 min)</button>
        <button onClick={() => handleModeChange('long')}>Long (25 min)</button>
      </div>
      <div>
        <p>Time Remaining: {formatTime(seconds)}</p>
      </div>
    </div>
  );
};

export default Timer;
