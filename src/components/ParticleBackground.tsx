
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
};

export function ParticleBackground() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Generate particles based on container size
  const generateParticles = (width: number, height: number) => {
    const particleCount = Math.min(Math.floor((width * height) / 15000), 50);
    const newParticles: Particle[] = [];

    const colors = theme === "dark" 
      ? ["#3a86ff33", "#8338ec33", "#2ec4b633"] 
      : ["#3a86ff1a", "#8338ec1a", "#2ec4b61a"];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 5 + 8,
        delay: Math.random() * 2
      });
    }
    
    setParticles(newParticles);
  };

  // Initialize and handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight * 2; // Cover more than screen height for scrolling
        setDimensions({ width, height });
        generateParticles(width, height);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ height: dimensions.height }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            x: [0, 20, -20, 10, -10, 0],
            y: [0, -20, 20, -10, 10, 0],
          }}
          transition={{
            duration: particle.duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
