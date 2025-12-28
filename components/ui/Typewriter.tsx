"use client";
import { useState, useEffect } from "react";

export default function Typewriter({ text, delay = 100 }: { text: string; delay?: number }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse ml-1 inline-block bg-sky-400 w-2 h-6 align-middle" />
    </span>
  );
}