import React, { useMemo } from "react"
import { motion } from "framer-motion"

export default function XPProgressCompact({
  currentXP = 290,
  tiersCSV = "Explorer:0, Thinker:200, Innovator:1500, Visionary:6000, Genius:12000",
  maxWidthPx = 340,
  paddingPx = 10,
  primary = "#1C64FF",
  trackBg = "#EEF2F7",
  text = "#0F172A",
  muted = "#64748B",
}) {
  // Parse tiers
  const tiers = useMemo(() => {
    const items = tiersCSV
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((pair) => {
        const [label, xpStr] = pair.split(":")
        return {
          label: (label || "").trim(),
          xp: parseInt(xpStr || "0", 10) || 0,
        }
      })
      .sort((a, b) => a.xp - b.xp)

    if (items.length === 0 || items[0].xp !== 0) {
      items.unshift({ label: "Start", xp: 0 })
    }
    return items
  }, [tiersCSV])

  const maxXP = tiers[tiers.length - 1]?.xp || 1
  const clampedXP = Math.min(Math.max(0, currentXP), maxXP)

  // Determine progress and current tier
  let currentIdx = 0
  for (let i = 0; i < tiers.length; i++) {
    if (clampedXP >= tiers[i].xp) currentIdx = i
  }

  const nextTier = tiers[Math.min(currentIdx + 1, tiers.length - 1)]
  const prevXP = tiers[currentIdx]?.xp || 0
  const nextXP = nextTier.xp
  const sectionSpan = 100 / Math.max(1, tiers.length - 1)
  const sectionStart = currentIdx * sectionSpan
  const progressWithin =
    nextXP - prevXP > 0 ? (clampedXP - prevXP) / (nextXP - prevXP) : 0
  const fillPct = sectionStart + progressWithin * sectionSpan

  return (
    <div
      className="w-full box-border"
      style={{
        maxWidth: maxWidthPx,
        padding: paddingPx,
        color: text,
        fontFamily:
          "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div className="font-extrabold text-[15px] mb-2">
        {tiers[currentIdx]?.label} • {clampedXP.toLocaleString()} XP
      </div>

      {/* Progress bar */}
      <div
        className="relative w-full h-[10px] rounded-full overflow-hidden"
        style={{ backgroundColor: trackBg }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{ backgroundColor: primary }}
          animate={{ width: `${Math.max(0, Math.min(100, fillPct))}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      {/* Dots */}
      <div
        className="grid mt-2"
        style={{
          gridTemplateColumns: `repeat(${tiers.length}, 1fr)`,
          alignItems: "center",
        }}
      >
        {tiers.map((t, i) => {
          const active = clampedXP >= t.xp
          return (
            <div
              key={i}
              className="w-[14px] h-[14px] rounded-full justify-self-center border-2"
              style={{
                backgroundColor: active ? primary : trackBg,
                borderColor: active ? primary : trackBg,
              }}
            />
          )
        })}
      </div>

      {/* Labels */}
      <div
        className="grid mt-1"
        style={{
          gridTemplateColumns: `repeat(${tiers.length}, 1fr)`,
        }}
      >
        {tiers.map((t, i) => (
          <div key={i} className="text-center">
            <div className="text-[12px] font-bold">{t.label}</div>
            <div className="text-[10px]" style={{ color: muted }}>
              {t.xp.toLocaleString()} XP
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
