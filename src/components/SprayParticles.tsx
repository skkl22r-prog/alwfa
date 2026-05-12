import { useEffect, useRef } from "react";

const SprayParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      vy: Math.random() * 0.4 + 0.15,
      vx: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.35 + 0.25,
      tw: Math.random() * Math.PI * 2,
      ts: Math.random() * 0.04 + 0.02,
    }));

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        p.tw += p.ts;
        if (p.y > canvas.height) p.y = -5;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        const twinkle = 0.6 + Math.sin(p.tw) * 0.3;
        const alpha = p.o * twinkle;
        // soft glow halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, `hsla(0, 0%, 100%, ${alpha * 0.7})`);
        grad.addColorStop(0.4, `hsla(0, 0%, 100%, ${alpha * 0.2})`);
        grad.addColorStop(1, "hsla(0, 0%, 100%, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
        // bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0, 0%, 100%, ${Math.min(0.85, alpha + 0.1)})`;
        ctx.fill();
      });
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden="true"
    />
  );
};

export default SprayParticles;