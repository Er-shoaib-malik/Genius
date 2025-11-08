import React, { useEffect, useMemo, useState } from "react"

const FONT = {
  fontFamily:
    "Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
}

const COLORS = {
  axis: "#7B818E",
  grid: "#DBDDE0",
  line: "#B9D5FF",
  point: "#0066FF",
  guide: "#1C64FF",
}

const SIZES = {
  axisW: 2,
  lineW: 3,
  pointR: 5,
}

const LineChartLocked = ({ xData, yData, highlightIndex }) => {
  const viewW = 400
  const viewH = 240
  const padding = 32

  const xPositions = useMemo(() => {
    const len = Math.max(1, xData.length)
    if (len === 1) return [padding]
    const usable = viewW - 2 * padding
    return Array.from({ length: len }, (_, i) => padding + (i * usable) / (len - 1))
  }, [xData])

  const hasSeries = yData.length > 0
  const yMin = hasSeries ? Math.min(...yData) : 0
  const yMax = hasSeries ? Math.max(...yData) : 1
  const yRange = yMax - yMin === 0 ? 1 : yMax - yMin

  const points = useMemo(() => {
    const n = Math.min(xData.length, yData.length)
    if (n <= 0) return []
    if (n === 1) return [{ x: xPositions[0], y: viewH / 2 }]
    return Array.from({ length: n }, (_, i) => ({
      x: xPositions[i],
      y: padding + ((yMax - yData[i]) * (viewH - 2 * padding)) / yRange,
    }))
  }, [xData.length, yData, xPositions, yMax, yRange])

  const linePath = useMemo(() => {
    if (points.length === 0) return ""
    return points.map((p, i) => (i ? `L${p.x},${p.y}` : `M${p.x},${p.y}`)).join(" ")
  }, [points])

  const yTicks = 5
  const yTickVals = useMemo(
    () =>
      Array.from({ length: yTicks + 1 }, (_, i) => yMin + ((yMax - yMin) * i) / yTicks),
    [yMin, yMax]
  )

  return (
    <div className="w-full h-full relative">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewW} ${viewH}`}
        preserveAspectRatio="none"
        className="block overflow-visible"
      >
        {/* Grid */}
        <g>
          {xPositions.map((x, i) => (
            <line
              key={`v-${i}`}
              x1={x}
              y1={padding}
              x2={x}
              y2={viewH - padding}
              stroke={COLORS.grid}
              strokeWidth={1}
              opacity={0.2}
            />
          ))}
          {yTickVals.map((val, i) => {
            const y = padding + ((yMax - val) * (viewH - 2 * padding)) / (yRange || 1)
            return (
              <line
                key={`h-${i}`}
                x1={padding}
                y1={y}
                x2={viewW - padding}
                y2={y}
                stroke={COLORS.grid}
                strokeWidth={1}
                opacity={0.3}
              />
            )
          })}
        </g>

        {/* Axes */}
        <line
          x1={padding}
          y1={viewH - padding}
          x2={viewW - padding}
          y2={viewH - padding}
          stroke={COLORS.axis}
          strokeWidth={SIZES.axisW}
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={viewH - padding}
          stroke={COLORS.axis}
          strokeWidth={SIZES.axisW}
        />

        {/* Y Labels */}
        {yTickVals.map((val, i) => {
          const y = padding + ((yMax - val) * (viewH - 2 * padding)) / (yRange || 1)
          return (
            <g key={i}>
              <text
                x={padding - 10}
                y={y + 4}
                className="text-[12px]"
                fontFamily={FONT.fontFamily}
                textAnchor="end"
                fill={COLORS.axis}
              >
                {val.toFixed(2)}
              </text>
            </g>
          )
        })}

        {/* X Labels */}
        {xData.map((label, i) => (
          <text
            key={i}
            x={xPositions[i]}
            y={viewH - padding + 18}
            className="text-[12px]"
            fontFamily={FONT.fontFamily}
            textAnchor="middle"
            fill={COLORS.axis}
          >
            {label}
          </text>
        ))}

        {/* Guideline */}
        {typeof highlightIndex === "number" &&
          highlightIndex >= 0 &&
          highlightIndex < xPositions.length && (
            <line
              x1={xPositions[highlightIndex]}
              y1={padding}
              x2={xPositions[highlightIndex]}
              y2={viewH - padding}
              stroke={COLORS.guide}
              strokeWidth={2}
              opacity={0.7}
            />
          )}

        {/* Line + Points */}
        {hasSeries && (
          <>
            <path
              d={linePath}
              fill="none"
              stroke={COLORS.line}
              strokeWidth={SIZES.lineW}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {points.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={SIZES.pointR}
                fill={COLORS.point}
                stroke={COLORS.line}
                strokeWidth={1}
              />
            ))}
          </>
        )}
      </svg>
    </div>
  )
}

export default function ProgressChartLockedNoInputs() {
  const [view, setView] = useState("day")
  const [start, setStart] = useState(0)

  const DAY_WIN = 8
  const WEEK_WIN = 4
  const YEAR_WIN = 6
  const SHOW_WEEKENDS = true

  const dayY = []
  const weekY = []
  const yearY = []

  const now = new Date()
  const nowHour = now.getHours()
  const nowDOW = (now.getDay() + 6) % 7
  const nowMonth = now.getMonth()

  useEffect(() => {
    if (view === "day") {
      const end = Math.min(24, nowHour + 1)
      setStart(Math.max(0, end - DAY_WIN))
    } else if (view === "week") {
      const len = SHOW_WEEKENDS ? 7 : 5
      const idx = SHOW_WEEKENDS ? nowDOW : Math.min(nowDOW, 4)
      const end = Math.min(len, idx + 1)
      setStart(Math.max(0, end - WEEK_WIN))
    } else {
      const end = Math.min(12, nowMonth + 1)
      setStart(Math.max(0, end - YEAR_WIN))
    }
  }, [view, nowHour, nowDOW, nowMonth])

  const { xData, yData, canPanLeft, canPanRight, highlightIndex } = useMemo(() => {
    if (view === "day") {
      const labels = Array.from({ length: 24 }, (_, h) => `${String(h).padStart(2, "0")}:00`)
      const end = Math.min(24, start + DAY_WIN)
      return {
        xData: labels.slice(start, end),
        yData: dayY.slice(start, end),
        canPanLeft: start > 0,
        canPanRight: end < 24,
        highlightIndex: Math.max(0, Math.min(end - start - 1, nowHour - start)),
      }
    }
    if (view === "week") {
      const all = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      const len = SHOW_WEEKENDS ? 7 : 5
      const labels = all.slice(0, len)
      const end = Math.min(len, start + WEEK_WIN)
      const idx = SHOW_WEEKENDS ? nowDOW : Math.min(nowDOW, 4)
      return {
        xData: labels.slice(start, end),
        yData: weekY.slice(start, end),
        canPanLeft: start > 0,
        canPanRight: end < len,
        highlightIndex: Math.max(0, Math.min(end - start - 1, idx - start)),
      }
    }
    const labels = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ]
    const end = Math.min(12, start + YEAR_WIN)
    return {
      xData: labels.slice(start, end),
      yData: yearY.slice(start, end),
      canPanLeft: start > 0,
      canPanRight: end < 12,
      highlightIndex: Math.max(0, Math.min(end - start - 1, nowMonth - start)),
    }
  }, [view, start, nowHour, nowDOW, nowMonth])

  return (
    <div className="max-w-[300px] max-h-[223px] grid grid-rows-[auto_1fr] gap-2 ml-2">
      <div className="flex items-center justify-between">
        <div className="inline-flex gap-1 p-1 border border-gray-300 rounded-lg">
          {["day", "week", "year"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                view === v
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            className={`flex items-center justify-center w-8 h-7 border border-gray-300 rounded-md ${
              canPanLeft ? "opacity-100" : "opacity-50 pointer-events-none"
            }`}
            onClick={() => setStart(Math.max(0, start - 1))}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className={`flex items-center justify-center w-8 h-7 border border-gray-300 rounded-md ${
              canPanRight ? "opacity-100" : "opacity-50 pointer-events-none"
            }`}
            onClick={() => setStart(start + 1)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <LineChartLocked xData={xData} yData={yData} highlightIndex={highlightIndex} />
    </div>
  )
}
