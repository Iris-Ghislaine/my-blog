'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function LiveClock() {
  const [time, setTime] = useState<string>();
  const [date, setDate] = useState<string>();

  // useEffect(() => {
  //   const timer = setInterval(() => setTime(new Date()), 1000);
  //   return () => clearInterval(timer);
  // }, []);

  useEffect(()=> {
  setInterval(() =>{
    setTime(new Date().toLocaleTimeString()
  )
  },1000)
  },[]
    
  )
useEffect(()=>{
  setInterval(() =>{
    setDate(new Date().toLocaleDateString())
  },1000)
},[])
  return (
    <div className="bg-gradient-to-br from-gray-500/10 to-gray-500/5 border-2 border-gray-500/20 rounded-lg p-8 shadow-lg">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Clock className="h-8 w-8 text-gray-500 animate-pulse" />
        <h3 className="text-2xl font-bold text-gray-500">Live Clock</h3>
      </div>

      <div className="text-center">
        <div className="text-5xl font-mono font-bold mb-2 text-foreground">
          {time}
        </div>
        <div className="text-lg text-muted-foreground">
         {date}
        </div>
      </div>

      <div className="mt-4 text-xs text-muted-foreground text-center">
        Client-Side Rendering (CSR) - Updates every second
      </div>
    </div>
  );
}
