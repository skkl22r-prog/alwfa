import { useState, useEffect } from "react";
import { MapPin, Heart, QrCode, Baby, Camera } from "lucide-react";
import invitationImg from "@/assets/invitation.png";
import Envelope from "@/components/Envelope";
import SprayParticles from "@/components/SprayParticles";
import Reveal from "@/components/Reveal";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
const Index = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!opened) return;
    const startScroll = () => {
      const target = window.innerHeight * 0.9;
      const duration = 2200;
      const start = performance.now();
      const startY = window.scrollY;
      const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        window.scrollTo(0, startY + (target - startY) * ease(p));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const t = setTimeout(startScroll, 800);
    return () => clearTimeout(t);
  }, [opened]);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{
      background: "linear-gradient(180deg, hsl(60 22% 88%) 0%, hsl(70 20% 82%) 50%, hsl(80 22% 75%) 100%)",
    }}>
      {/* Ornamental damask pattern background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.22]"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23556B3D' stroke-width='0.7' opacity='0.9'><g transform='translate(30 30)'><circle cx='0' cy='0' r='2.2' fill='%23556B3D'/><path d='M0 0 C -5 -3 -8 -8 -5 -12 C -1 -14 3 -11 4 -7'/><path d='M0 0 C 5 -3 8 -8 5 -12 C 1 -14 -3 -11 -4 -7'/><path d='M0 0 C -7 0 -11 5 -9 10 C -5 12 -1 9 0 5'/><path d='M0 0 C 7 0 11 5 9 10 C 5 12 1 9 0 5'/><path d='M0 5 C -2 9 0 13 3 12'/></g><g transform='translate(90 80)'><circle cx='0' cy='0' r='1.8' fill='%23556B3D'/><path d='M0 0 C -4 -2 -6 -6 -4 -9 C -1 -11 2 -8 3 -5'/><path d='M0 0 C 4 -2 6 -6 4 -9 C 1 -11 -2 -8 -3 -5'/><path d='M0 0 C -5 0 -8 4 -7 8 C -4 9 -1 7 0 4'/><path d='M0 0 C 5 0 8 4 7 8 C 4 9 1 7 0 4'/></g><g transform='translate(75 25)'><circle cx='0' cy='0' r='1.5' fill='%23556B3D'/><path d='M0 -4 C -3 -4 -4 -1 -2 1'/><path d='M0 -4 C 3 -4 4 -1 2 1'/><path d='M-3 2 C -5 4 -3 7 0 6'/><path d='M3 2 C 5 4 3 7 0 6'/></g><g transform='translate(20 95)'><circle cx='0' cy='0' r='1.5' fill='%23556B3D'/><path d='M0 -4 C -3 -4 -4 -1 -2 1'/><path d='M0 -4 C 3 -4 4 -1 2 1'/><path d='M-3 2 C -5 4 -3 7 0 6'/><path d='M3 2 C 5 4 3 7 0 6'/></g><path d='M55 55 q 4 -2 8 0' /><path d='M58 56 q 0 3 -2 5'/></g></svg>")`,
          backgroundSize: "150px 150px",
        }}
      />
      <SprayParticles />
      {!opened && <Envelope onOpen={() => setOpened(true)} />}

      {opened && (
        <main className="relative z-10">
          {/* Invitation image */}
          <section className="min-h-screen flex items-center justify-center px-4 py-10">
            <Reveal>
              <img
                src={invitationImg}
                alt="دعوة زفاف"
                className="max-h-[90vh] w-auto rounded-lg"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              />
            </Reveal>
          </section>

          {/* Calendar block */}
          <section className="px-4 py-16">
            <Reveal>
              <div
                className="mx-auto max-w-sm rounded-2xl p-8 text-center backdrop-blur-md"
                style={{
                  background: "hsla(60, 25%, 95%, 0.5)",
                  border: "1px solid hsl(80 25% 45% / 0.3)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <div className="flex justify-between items-center font-display text-sm text-primary mb-4" dir="ltr">
                  <span>Friday</span>
                  <span>July</span>
                  <span>2026</span>
                </div>
                <div className="font-display text-8xl font-light text-primary leading-none">17</div>
                <div className="font-arabic text-base mt-3 text-muted-foreground">يوم الجمعة</div>
              </div>
            </Reveal>
          </section>

          {/* Countdown */}
          <section className="px-4 py-16">
            <Reveal>
              <h2 className="text-center font-arabic text-3xl text-primary mb-10">العدّ التنازلي</h2>
            </Reveal>
            <Reveal delay={150}>
              <Countdown />
            </Reveal>
          </section>

          {/* Venue */}
          <section className="px-4 py-16">
            <Reveal>
              <h2 className="text-center font-arabic text-3xl text-primary mb-8">موقع حفلنا</h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="text-center mb-6">
                <MapPin className="mx-auto w-10 h-10 text-accent mb-3" />
                <div className="font-arabic text-2xl text-primary">قاعة فرح</div>
                <div className="font-arabic text-lg text-muted-foreground mt-1">جدة</div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-soft)", border: "1px solid hsl(80 25% 45% / 0.3)" }}>
                <iframe
                  title="موقع الحفل"
                  src="https://www.google.com/maps?q=Jeddah&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>
            </Reveal>
          </section>

          {/* Program timeline */}
          <section className="px-4 py-16">
            <Reveal>
              <h2 className="text-center font-arabic text-3xl text-primary mb-6">برنامج الحفل</h2>
            </Reveal>
            <Timeline />
          </section>

          {/* Details */}
          <section className="px-4 py-16">
            <Reveal>
              <h2 className="text-center font-arabic text-3xl text-primary mb-10">تفاصيل الحفل</h2>
            </Reveal>
            <div className="relative max-w-xl mx-auto">
              <div
                className="absolute top-6 bottom-6 left-6 w-px"
                style={{ background: "hsl(80 25% 45% / 0.4)" }}
              />
              <div className="space-y-6">
                {[
                  { icon: QrCode, text: "يرجى إبراز الباركود عند الدخول" },
                  { icon: Baby, text: "يمنع اصطحاب الأطفال" },
                  { icon: Camera, text: "يمنع دخول جوالات الكاميرا" },
                ].map((d, i) => (
                  <Reveal key={i} delay={i * 120}>
                    <div className="relative pl-16">
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10"
                        style={{
                          background: "hsl(60 25% 95%)",
                          border: "2px solid hsl(80 25% 35%)",
                        }}
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: "hsl(80 25% 35%)" }} />
                      </div>
                      <div
                        className="rounded-xl px-6 py-5 backdrop-blur-md flex items-center justify-between gap-4"
                        style={{
                          background: "hsla(60, 25%, 95%, 0.4)",
                          border: "1px solid hsl(80 25% 45% / 0.3)",
                          boxShadow: "var(--shadow-soft)",
                        }}
                      >
                        <span className="font-arabic text-lg text-primary flex-1 text-right">{d.text}</span>
                        <d.icon className="w-7 h-7 text-accent shrink-0" />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-4 py-12 text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-2 text-primary">
                <Heart className="w-4 h-4 fill-current" />
                <span className="font-arabic text-sm">
                  صُنع بحب بواسطة{" "}
                  <a
                    href="https://www.tiktok.com/@shim2t?_r=1&_t=ZS-95w0d8f7vnk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-accent transition-colors"
                  >
                    متجر غيمة
                  </a>
                </span>
              </div>
            </Reveal>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Index;
