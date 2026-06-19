import Reveal from "@/components/Reveal";
import { Baby, Camera } from "lucide-react";

const events = [
  { time: "6:00 PM", label: "الاستقبال" },
  { time: "7:00 PM", label: "الزفة" },
  { time: "8:00 PM", label: "العشاء" },
];

const Timeline = () => {
  return (
    <div className="relative max-w-2xl mx-auto py-8">

      {/* الخط */}
      <div
        className="absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-px"
        style={{ background: "#ffffff", opacity: 0.4 }}
      />

      <div className="space-y-10">
        {events.map((e, i) => (
          <Reveal key={i} delay={i * 120}>
            <div className="flex items-center justify-between px-6">

              <div className="w-1/3 text-left text-white">
                {e.time}
              </div>

              {/* الدائرة */}
              <div className="w-1/3 flex justify-center">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "#B36E71",
                    boxShadow: "0 0 10px rgba(179,110,113,0.6)",
                  }}
                />
              </div>

              <div className="w-1/3 text-right text-white">
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