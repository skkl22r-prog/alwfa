import Reveal from "./Reveal";

const events = [
  {
    title: "9:00 م",
    time: " الاستقبال",
  },
  {
    title: "11:00م",
    time: "الزفة",
  },
  {
    title: "12:00ص",
    time: "العشاء",
  },
];

const Timeline = () => {
  return (
  <div className="relative max-w-2xl mx-auto py-8">

    {/* الخط الأبيض في المنتصف */}
    <div
      className="absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-px"
      style={{
        background: "#ffffff",
        opacity: 0.5,
      }}
    />

    {/* الدائرة المتحركة (شكل بسيط يرجع الحياة للتصميم) */}
    <div
      className="absolute top-0 bottom-0 right-1/2 translate-x-1/2 flex items-start justify-center"
    >
      <div
        className="w-3 h-3 rounded-full animate-pulse"
        style={{
          background: "#B36E71",
          boxShadow: "0 0 12px rgba(179,110,113,0.6)",
        }}
      />
    </div>

    {/* المحتوى */}
    <div className="space-y-10">
      {events.map((e, i) => (
        <Reveal key={i} delay={i * 150}>
          <div className="flex items-center justify-center gap-8">

            {/* الوقت */}
            <div className="font-display text-2xl" style={{ color: "#ffffff" }}>
              {e.time}
            </div>

            {/* الدائرة داخل العناصر */}
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center"
              style={{
                background: "#ffffff",
                border: "2px solid #B36E71",
              }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "#B36E71" }} />
            </div>

            {/* النص */}
            <div className="font-arabic text-2xl" style={{ color: "#ffffff" }}>
              {e.label}
            </div>

          </div>
        </Reveal>
      ))}
    </div>
  </div>
);
};

export default Timeline;
