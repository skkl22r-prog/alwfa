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
                className="w-3 h-3 rounded-full"
                style={{
                  background: "hsl(42 75% 50%)",
                  boxShadow: "0 0 0 6px hsl(42 75% 50% / 0.2)",
                }}
              />
              <div className="font-arabic text-2xl text-primary">
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
