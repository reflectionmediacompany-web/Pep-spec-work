import { useEffect, useMemo, useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  format?: (v: number) => string;
  className?: string;
};

export default function AnimatedNumber({ value, format, className }: AnimatedNumberProps) {
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState<number>(reduceMotion ? value : 0);
  const formatter = useMemo(() => format ?? ((v: number) => v.toLocaleString()), [format]);

  useEffect(() => {
    if (reduceMotion) {
      setCurrent(value);
      return;
    }

    setCurrent(0);
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCurrent(Math.round(latest)),
    });
    return () => controls.stop();
  }, [reduceMotion, value]);

  return (
    <motion.span className={className}>{formatter(current)}</motion.span>
  );
}
