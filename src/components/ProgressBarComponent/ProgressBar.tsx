"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressBarComponent({
  progress,
  progressColor,
  className,
}: {
  progress: number;
  progressColor: string;
  className?: string;
}) {
  const [progressCount, setProgressCount] = React.useState(1);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgressCount(progress), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      value={progressCount}
      className={className}
      progressColor={progressColor}
    />
  );
}
