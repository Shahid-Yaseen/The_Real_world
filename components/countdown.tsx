interface CountdownProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown({ days, hours, minutes, seconds }: CountdownProps) {
  return (
    <div className="flex gap-2 md:gap-4">
      <div className="bg-[#111] p-2 md:p-4 rounded-md text-center min-w-16">
        <div className="text-2xl md:text-4xl font-bold text-[#F0B90B]">{days.toString().padStart(2, "0")}</div>
        <div className="text-xs uppercase text-gray-400">Days</div>
      </div>

      <div className="bg-[#111] p-2 md:p-4 rounded-md text-center min-w-16">
        <div className="text-2xl md:text-4xl font-bold text-[#F0B90B]">{hours.toString().padStart(2, "0")}</div>
        <div className="text-xs uppercase text-gray-400">Hours</div>
      </div>

      <div className="bg-[#111] p-2 md:p-4 rounded-md text-center min-w-16">
        <div className="text-2xl md:text-4xl font-bold text-[#F0B90B]">{minutes.toString().padStart(2, "0")}</div>
        <div className="text-xs uppercase text-gray-400">Minutes</div>
      </div>

      <div className="bg-[#111] p-2 md:p-4 rounded-md text-center min-w-16">
        <div className="text-2xl md:text-4xl font-bold text-[#F0B90B]">{seconds.toString().padStart(2, "0")}</div>
        <div className="text-xs uppercase text-gray-400">Seconds</div>
      </div>
    </div>
  )
}
