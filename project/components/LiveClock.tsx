'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function LiveClock() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-lg p-8 shadow-lg">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Clock className="h-8 w-8 text-primary animate-pulse" />
        <h3 className="text-2xl font-bold text-primary">Live Clock</h3>
      </div>
      <div className="text-center">
        <div className="text-5xl font-mono font-bold mb-2 text-foreground">
          {formatTime(currentTime)}
        </div>
        <div className="text-lg text-muted-foreground">
          {formatDate(currentTime)}
        </div>
      </div>
      <div className="mt-4 text-xs text-muted-foreground text-center">
        Client-Side Rendering (CSR) - Updates every second
      </div>
    </div>
  );
}
