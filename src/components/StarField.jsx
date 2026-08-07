// src/components/StarField.jsx
// Lightweight canvas-based animated space/starfield background.
// Pure canvas (no extra dependencies), respects prefers-reduced-motion,
// and stays fixed behind all page content.
//
// Features: bright twinkling/sparkling stars, drifting nebula clouds,
// shooting stars, mouse parallax (closer/bigger stars shift more), and
// scroll-driven "warp speed" star streaks.
import { useEffect, useRef } from 'react';

const STAR_COLORS = ['#ffffff', '#ffffff', '#ffffff', '#a0c4ff', '#f97316'];

const NEBULA_COLORS = [
  'rgba(249, 115, 22, 0.10)', // orange (accent)
  'rgba(59, 130, 246, 0.08)', // blue
  'rgba(168, 85, 247, 0.07)', // purple
];

function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let stars = [];
    let shootingStars = [];
    let nebulae = [];
    let time = 0;
    let animationId = null;

    // Mouse parallax state (smoothed towards target each frame)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Scroll-driven "warp speed" state
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const STAR_COUNT_DENSITY = 8000; // 1 star per N px^2

    const createStars = () => {
      const count = Math.max(60, Math.floor((width * height) / STAR_COUNT_DENSITY));
      stars = Array.from({ length: count }, () => {
        const radius = Math.random() * 1.6 + 0.4;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          // Bigger stars glow and "bling" more noticeably, and feel "closer"
          isBright: radius > 1.2,
          parallaxStrength: (radius / 1.7) * 18,
          baseAlpha: Math.random() * 0.4 + 0.55,
          // Slightly faster twinkle so the sparkle reads as lively "bling bling"
          twinkleSpeed: Math.random() * 0.01 + 0.0035,
          twinklePhase: Math.random() * Math.PI * 2,
          drift: Math.random() * 0.05 + 0.01,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        };
      });
    };

    const createNebulae = () => {
      nebulae = Array.from({ length: 3 }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.max(width, height) * (0.35 + Math.random() * 0.25),
        color: NEBULA_COLORS[i % NEBULA_COLORS.length],
        speed: Math.random() * 0.05 + 0.02,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createStars();
      createNebulae();
    };

    const handleMouseMove = (e) => {
      // Normalize to -1..1 from the center of the viewport
      targetMouseX = (e.clientX / width) * 2 - 1;
      targetMouseY = (e.clientY / height) * 2 - 1;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      // Accumulate a clamped "boost" so fast scrolling briefly speeds up stars
      scrollVelocity = Math.max(-25, Math.min(25, scrollVelocity + delta * 0.5));
    };

    const maybeSpawnShootingStar = () => {
      if (prefersReducedMotion) return;
      if (Math.random() < 0.004 && shootingStars.length < 2) {
        const startX = Math.random() * width * 0.8;
        const startY = Math.random() * height * 0.4;
        const speed = Math.random() * 8 + 10;
        const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
        shootingStars.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: Math.random() * 30 + 40,
        });
      }
    };

    const drawNebulae = () => {
      for (const n of nebulae) {
        // Slow, gentle drift so the glow clouds feel alive without distraction
        const offsetX = Math.sin(time * n.speed + n.phase) * 40;
        const offsetY = Math.cos(time * n.speed + n.phase) * 30;
        const gradient = ctx.createRadialGradient(
          n.x + offsetX,
          n.y + offsetY,
          0,
          n.x + offsetX,
          n.y + offsetY,
          n.radius
        );
        gradient.addColorStop(0, n.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      // Smoothly ease parallax + scroll values towards their targets
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      scrollVelocity *= 0.92; // friction, decays back to 0

      if (!prefersReducedMotion) {
        drawNebulae();
      }

      for (const star of stars) {
        star.twinklePhase += star.twinkleSpeed;
        // Bright stars pulse with a wide swing for a lively "bling bling" glow
        const swing = star.isBright ? 0.8 : 0.45;
        const alpha =
          star.baseAlpha + Math.sin(star.twinklePhase) * swing * star.baseAlpha;
        const clampedAlpha = Math.max(0, Math.min(1, alpha));

        let drawX = star.x + mouseX * star.parallaxStrength;
        let drawY = star.y + mouseY * star.parallaxStrength;

        if (!prefersReducedMotion) {
          star.y += star.drift + Math.abs(scrollVelocity) * 0.15;
          if (star.y > height) {
            star.y = 0;
            star.x = Math.random() * width;
          }
          drawY = star.y + mouseY * star.parallaxStrength;
        }

        ctx.beginPath();
        if (star.isBright) {
          ctx.shadowBlur = 10 + Math.sin(star.twinklePhase) * 6;
          ctx.shadowColor = star.color;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fillStyle = star.color;
        ctx.globalAlpha = clampedAlpha;

        // While scrolling fast, stretch stars into short warp-speed streaks
        if (Math.abs(scrollVelocity) > 2) {
          const streakLength = Math.min(24, Math.abs(scrollVelocity)) * (star.radius / 1.4);
          ctx.lineWidth = star.radius;
          ctx.strokeStyle = star.color;
          ctx.beginPath();
          ctx.moveTo(drawX, drawY);
          ctx.lineTo(drawX, drawY - Math.sign(scrollVelocity || 1) * streakLength);
          ctx.stroke();
        } else {
          ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
          ctx.fill();

          // Sparkle glint: a small cross of light on bright, near-peak stars
          // for an extra "bling bling" twinkle.
          if (star.isBright && clampedAlpha > 0.75) {
            const glintLength = star.radius * 4 * clampedAlpha;
            ctx.globalAlpha = (clampedAlpha - 0.75) * 4;
            ctx.strokeStyle = star.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(drawX - glintLength, drawY);
            ctx.lineTo(drawX + glintLength, drawY);
            ctx.moveTo(drawX, drawY - glintLength);
            ctx.lineTo(drawX, drawY + glintLength);
            ctx.stroke();
          }
        }
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      maybeSpawnShootingStar();
      shootingStars = shootingStars.filter((s) => s.life < s.maxLife);
      for (const s of shootingStars) {
        const progress = s.life / s.maxLife;
        const fade = 1 - progress;
        s.x += s.vx;
        s.y += s.vy;
        s.life += 1;

        const tailX = s.x - s.vx * 3;
        const tailY = s.y - s.vy * 3;
        const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255,255,255,${fade})`);
        gradient.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default StarField;
