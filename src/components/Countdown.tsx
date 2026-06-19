import { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2026-07-27T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-white text-center font-display">

      <div>
        <div className="text-2xl">{timeLeft.days}</div>
        <div className="text-sm opacity-80">Days</div>
      </div>

      <div>
        <div className="text-2xl">{timeLeft.hours}</div>
        <div className="text-sm opacity-80">Hours</div>
      </div>

      <div>
        <div className="text-2xl">{timeLeft.minutes}</div>
        <div className="text-sm opacity-80">Min</div>
      </div>

      <div>
        <div className="text-2xl">{timeLeft.seconds}</div>
        <div className="text-sm opacity-80">Sec</div>
      </div>

    </div>
  );
};

export default Countdown;