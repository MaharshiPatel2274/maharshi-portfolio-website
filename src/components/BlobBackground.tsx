
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

export function BlobBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useTransform(mouseX, [-500, 500], [-10, 10]);
  const translateY = useTransform(mouseY, [-500, 500], [-10, 10]);

  const springConfig = { damping: 20, stiffness: 100 };
  const springX = useSpring(translateX, springConfig);
  const springY = useSpring(translateY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX - window.innerWidth / 2);
      mouseY.set(clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96">
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-full h-full rounded-full bg-primary/10"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-full h-full rounded-full bg-secondary/10"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/3 w-2/3 h-2/3 rounded-full bg-accent/10"
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 10, 0] 
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
    </div>
  );
}
