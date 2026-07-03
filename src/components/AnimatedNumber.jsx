import { useEffect, useState } from "react";

export default function AnimatedNumber({ target }) {
  const max = parseInt(target);
  const [value, setValue] = useState(1);

  useEffect(() => {
    // 🔥 случайная скорость для каждой цифры
    const randomSpeed = Math.floor(Math.random() * 1200) + 600;
    // диапазон: от 600ms до 1800ms

    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= max) {
          return 1; // 🔥 после максимума снова 1
        }
        return prev + 1; // 🔥 увеличиваем
      });
    }, randomSpeed);

    return () => clearInterval(interval);
  }, [max]);

  return (
    <div className="text-5xl font-black text-blue-500 animate-slideUp">
      {value}+
    </div>
  );
}
