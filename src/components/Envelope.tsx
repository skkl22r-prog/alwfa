import { useState } from "react";
import invitationImg from "@/assets/invitation.png";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [opening, setOpening] = useState(false);

  const trigger = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 2100);
  };

  return (
    <div
      className="fixed inset-0 z-40 cursor-pointer overflow-hidden"
      style={{ background: "hsl(85 25% 18%)", perspective: "2000px" }}
      onClick={trigger}
    >
      {/* Revealed invitation underneath */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={invitationImg} alt="" className="max-h-[90vh] w-auto opacity-60" />
      </div>

      {/* Two envelope halves */}
      <div className="absolute inset-0 flex">
        {/* Right half (opens up & to the right) */}
        <div
          className="absolute top-0 right-0 h-full w-1/2"
          style={{
            transition: "transform 2s cubic-bezier(0.65, 0, 0.35, 1) 0.08s, box-shadow 2s ease-out 0.08s",
            transform: opening
              ? "translateX(110%)"
              : "translateX(0)",
            boxShadow: opening
              ? "-30px 0 60px hsla(0,0%,0%,0.55), inset 8px 0 14px hsla(0,0%,0%,0.35)"
              : "inset 6px 0 18px hsla(0,0%,0%,0.25)",
          }}
        >
          <div
            className="w-full h-full relative overflow-hidden"
            style={{
              backgroundImage: `url(${invitationImg})`,
              backgroundSize: "200% 100%",
              backgroundPosition: "right center",
              filter: "blur(18px) brightness(0.85)",
            }}
          >
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsla(80,30%,15%,0.55), hsla(80,30%,15%,0.35))" }} />
          </div>
        </div>

        {/* Left half */}
        <div
          className="absolute top-0 left-0 h-full w-1/2"
          style={{
            transition: "transform 2s cubic-bezier(0.65, 0, 0.35, 1), box-shadow 2s ease-out",
            transform: opening
              ? "translateX(-110%)"
              : "translateX(0)",
            boxShadow: opening
              ? "30px 0 60px hsla(0,0%,0%,0.55), inset -8px 0 14px hsla(0,0%,0%,0.35)"
              : "inset -6px 0 18px hsla(0,0%,0%,0.25)",
          }}
        >
          <div
            className="w-full h-full relative overflow-hidden"
            style={{
              backgroundImage: `url(${invitationImg})`,
              backgroundSize: "200% 100%",
              backgroundPosition: "left center",
              filter: "blur(18px) brightness(0.85)",
            }}
          >
            <div className="absolute inset-0" style={{ background: "linear-gradient(-90deg, hsla(80,30%,15%,0.55), hsla(80,30%,15%,0.35))" }} />
          </div>
        </div>

        {/* Center vertical line */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px pointer-events-none"
          style={{
            background: "hsla(60, 30%, 95%, 0.55)",
            opacity: opening ? 0 : 1,
            transition: "opacity 0.6s ease-out",
          }}
        />

        {/* Wax seal - dead center, fades on open */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            transform: "translate(-50%, -50%)",
            opacity: opening ? 0 : 1,
            transition: "opacity 0.5s ease-out",
          }}
        >
          <div
            className="w-36 h-36 rounded-full flex items-center justify-center relative animate-float-slow"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, hsl(60 30% 99%), hsl(55 25% 86%))",
              boxShadow:
                "0 14px 40px hsla(80, 40%, 10%, 0.55), inset 0 -4px 10px hsla(80, 30%, 70%, 0.4), inset 0 4px 10px hsla(0, 0%, 100%, 0.9)",
            }}
          >
            <div
              className="absolute inset-2 rounded-full border-2 border-dashed"
              style={{ borderColor: "hsl(80 25% 45% / 0.55)" }}
            />
            <div
              className="absolute inset-4 rounded-full border"
              style={{ borderColor: "hsl(80 25% 45% / 0.4)" }}
            />
            <div className="text-center font-arabic leading-tight px-2" style={{ color: "hsl(80 25% 28%)" }}>
              <div className="text-lg font-bold">دعوة</div>
              <div className="text-lg font-bold">زواج</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm font-arabic animate-pulse z-10"
        style={{ color: "hsla(60, 30%, 95%, 0.85)" }}
      >
        اضغط لفتح الدعوة
      </div>
    </div>
  );
};

export default Envelope;