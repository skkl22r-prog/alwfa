import { useEffect, useState } from "react";

const Countdown = () => {
  const target = new Date("2026-07-27T00:00:00").getTime();

  const [t, setT] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  });

  useEffect(() => {
    const i = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) return;

      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(i);
  }, []);

  const Box = ({ value, label }) => (
    <div className="text-center text-white">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );

  return (
    <div className="flex justify-center gap-6">
      <Box value={t.d} label="Days" />
      <Box value={t.h} label="Hours" />
      <Box value={t.m} label="Min" />
      <Box value={t.s} label="Sec" />
    </div>
  );
};

export default Countdown;