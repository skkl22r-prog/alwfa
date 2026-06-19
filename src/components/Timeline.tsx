import Reveal from "./Reveal";

const events = [
  {
    title: "الاستقبال",
    time: "9:00 م",
  },
  {
    title: "الزفة",
    time: "11:00 م",
  },
  {
    title: "العشاء",
    time: "12:00 ص",
  },
];

const Timeline = () => {
  return (
    <div className="relative max-w-2xl mx-auto py-8">
      <div className="space-y-10">
        {events.map((e, i) => (
          <Reveal key={i} delay={i * 150}>
            <div className="flex items-center justify-center gap-8">
              <div className="font-display text-2xl text-primary" dir="ltr">
                {e.time}
              </div>
              <div
  className="w-4 h-4 rounded-full flex items-center justify-center"
  style={{
    background: "#ffffff",
    border: "2px solid #B36E71",
    boxShadow: "0 0 10px rgba(179,110,113,0.35)",
  }}
>
  <div
    className="w-2 h-2 rounded-full"
    style={{
      background: "#B36E71",
    }}
  />
</div>
              <div className="font-display text-2xl" style={{ color: "#ffffff" }}>
  {e.time}
</div>

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
