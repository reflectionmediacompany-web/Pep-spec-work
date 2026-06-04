import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 30, mass: 0.2 });

  return (
    <motion.div className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-[#e10600]/25">
      <motion.div className="h-full w-full origin-left bg-[#e10600]" style={{ scaleX }} />
    </motion.div>
  );
}

