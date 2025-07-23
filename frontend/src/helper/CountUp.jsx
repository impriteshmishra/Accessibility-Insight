import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CountUp = ({ end, duration = 2000, decimals = 2 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);

      let start = 0;
      const startTime = performance.now();

      const step = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = parseFloat((progress * end).toFixed(decimals));

        setCount(value);
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }
  }, [inView, hasStarted, end, duration, decimals]);

  return (
    <span ref={ref} className="text-3xl font-bold">
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
};

export default CountUp;
