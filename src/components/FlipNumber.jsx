import { useEffect, useRef, useState } from "react";

export default function FlipNumber({ target }) {
  const max = parseInt(target);
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // наблюдаем за появлением блока в зоне видимости
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);   // запускаем барабан
        } else {
          setShouldAnimate(false);  // НЕ сбрасываем value
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // барабан — листание снизу вверх от 0 до max
  useEffect(() => {
    if (!shouldAnimate) return;

    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      if (current > max) {
        clearInterval(interval);
        current = max;
      }

      setValue(current);
    }, 50); // 🔥 средняя скорость барабана

    return () => clearInterval(interval);
  }, [shouldAnimate, max]);

  return (
    <div ref={ref} className="relative h-[60px] overflow-hidden flex justify-center">
      <div
        key={value}
        className="
          text-5xl font-black text-blue-500
          animate-flip-fast
        "
      >
        {value}+
      </div>
    </div>
  );
}
