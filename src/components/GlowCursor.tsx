import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GlowCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl"
      animate={{
        x: position.x - 128,
        y: position.y - 128,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
        mass: 0.3,
      }}
    />
  );
}