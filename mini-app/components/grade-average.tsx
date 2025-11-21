"use client";

import { useState } from "react";

export interface GradeAverageProps {
  grades: number[];
}

export default function GradeAverage({ grades }: GradeAverageProps) {
  const [average, setAverage] = useState<number | null>(null);

  const calculateAverage = () => {
    if (grades.length === 0) {
      setAverage(null);
      return;
    }
    const sum = grades.reduce((acc, val) => acc + val, 0);
    setAverage(sum / grades.length);
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <button
        className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
        onClick={calculateAverage}
      >
        Calculate Average
      </button>
      {average !== null && (
        <p className="text-lg font-medium">
          Average: <span className="font-bold">{average.toFixed(2)}</span>
        </p>
      )}
    </div>
  );
}
