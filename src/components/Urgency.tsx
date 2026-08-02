import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function Urgency() {
  // Set end time to 4 hours from now to always show an active countdown
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 45,
    seconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Reset if it hits 0 for demo purposes
              hours = 3;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-brand-secondary text-white py-4 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm sm:text-base font-medium">
        <div className="flex items-center gap-2">
           <Clock className="w-5 h-5 animate-pulse" />
           <span>Stock Limité - L'Offre d'Aujourd'hui se Termine Bientôt !</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white/20 px-2 py-1 rounded min-w-[2.5rem] text-center">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <span>:</span>
          <div className="bg-white/20 px-2 py-1 rounded min-w-[2.5rem] text-center">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <span>:</span>
          <div className="bg-white/20 px-2 py-1 rounded min-w-[2.5rem] text-center">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
}
