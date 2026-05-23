import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DeveloperSkills = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const skillsRow1 = [
    "React.js", "Flask", "Express.js", "Node.js",
    "TailwindCSS", "Bootstrap", "MaterialUI", "MongoDB", "MySQL", "Firebase"
  ];

  const skillsRow2 = [
    "SQLite", "PostgreSQL", "Python", "JavaScript", "Django",
    "Markdown", "C", "C++", "TypeScript", "HTML5", "Git", "CSS3"
  ];

  const skillsRow3 = [
    "Java", "Postman", "ReactQuery", "OpenAI", "Streamlit",
    "Azure", "Vercel", "OpenCV", "Github", "Supabase"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: any[] = [];
    const particleCount = 100;

    class Particle {
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number;
      canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D;
      constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas; this.ctx = ctx;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
      }
      draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        this.ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas, ctx));
    }

    const animate = () => {
      if (ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      particles.forEach((pA, i) => {
        particles.slice(i + 1).forEach(pB => {
          const d = Math.sqrt(Math.pow(pA.x - pB.x, 2) + Math.pow(pA.y - pB.y, 2));
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - d / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const SkillMarquee = ({ skills, direction = 'left', speed = '30s' }: { skills: string[], direction?: string, speed?: string }) => (
    <div className="overflow-hidden whitespace-nowrap py-4 px-[50px]">
      <div
        className="inline-flex gap-6 animate-marquee"
        style={{ animation: `marquee-${direction} ${speed} linear infinite` }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="bg-transparent border-2 border-blue-500 rounded-lg px-6 py-5 text-white font-semibold text-lg whitespace-nowrap hover:bg-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            style={{
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(59, 130, 246, 0.1)',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden py-16 px-4">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Three Rows of Marquee Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="space-y-8"
        >
          <SkillMarquee skills={skillsRow1} direction="left" speed="40s" />
          <SkillMarquee skills={skillsRow2} direction="right" speed="35s" />
          <SkillMarquee skills={skillsRow3} direction="left" speed="45s" />
        </motion.div>
      </motion.div>

      {/* CSS Animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee:hover { animation-play-state: paused; }
        .animate-marquee div:hover {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), inset 0 0 15px rgba(59, 130, 246, 0.2) !important;
          transform: scale(1.05);
          border-color: rgba(59, 130, 246, 0.9);
        }
      `}</style>
    </div>
  );
};

export default DeveloperSkills;
