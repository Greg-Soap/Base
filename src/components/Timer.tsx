'use client';
import React, { useEffect, useState } from 'react';

interface TimerProps {
  duration: number; // Duration in seconds (e.g., 3600 for one hour)
}

const Timer: React.FC<TimerProps> = ({ duration }) => {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateProgress = () => {
    const progress = ((duration - secondsLeft) / duration) * 100;
    return progress > 100 ? 100 : progress;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Timer Text */}
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-xl font-bold text-muted">
            {formatTime(secondsLeft)}
          </span>
        </div>
      </div>
    </div>
  );
};

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(
    remainingSeconds,
  ).padStart(2, '0')}`;
};

export default Timer;
