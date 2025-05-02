import type React from "react"

interface ProgressBarProps {
  progress: number
  startValue: string
  endValue: string
}

export function ProgressBar({ progress, startValue, endValue }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div
        className="h-4 rounded-full progress-bar"
        style={{ "--progress": `${progress}%` } as React.CSSProperties}
      ></div>

      <div className="flex justify-between text-sm">
        <div>{startValue}</div>
        <div>{progress}% Filled</div>
        <div>{endValue}</div>
      </div>
    </div>
  )
}
