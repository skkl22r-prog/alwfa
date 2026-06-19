import { useEffect, useRef, useState } from "react";

const Timeline = ({ events }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // حساب نسبة التمرير داخل التايملاين
      const total = rect.height;
      const scrolled = Math.min(
        Math.max(windowHeight - rect.top, 0),
        total
      );

      setProgress(scrolled / total);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-2xl mx-auto py-8">

      {/* الخط */}
      <div
        className="absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-px"
        style={{
          background: "#ffffff",
          opacity: 0.4,
        }}
      />

      {/* الدائرة المتحركة */}
      <div
        className="absolute right-1/2 translate-x-1/2 w-3 h-3 rounded-full"
        style={{
          background: "#B36E71",
          boxShadow: "0 0 12px rgba(179,110,113,0.7)",
          top: `${progress * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* العناصر */}
      <div className="space-y-10">
        {events.map((e, i) => (
          <div key={i} className="flex items-center justify-between px-6 py-6">

            <div className="w-1/3 text-left text-white font-display">
              {e.time}
            </div>

            <div className="w-1/3" />

            <div className="w-1/3 text-right text-white font-arabic">
              {e.label}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;