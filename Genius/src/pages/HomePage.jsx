import * as React from "react"
import { motion } from "framer-motion"
import SignUpButton from '../components/SwipeLettersButton'

const TEXT = "Unlock the Genius in[br]You — Anywhere in the[br]World"
const BREAK_TOKEN = "[br]"

const ANIMATE_BY = "words"
const DIRECTION = "top"
const DELAY_MS = 150
const STEP_DURATION_S = 0.35
const EASING = "easeOut"
const THRESHOLD = 0.1
const ROOT_MARGIN = "20px"

const FROM_SNAPSHOT = { opacity: 0, y: -50, filter: "blur(20px)" }
const TO_SNAPSHOTS = [
  { opacity: 0.5, y: 10, filter: "blur(5px)" },
  { opacity: 1, y: 0, filter: "blur(0px)" },
]

const COLOR = "#FFFFFF"
const FONT_FAMILY = "poppins"
const FONT_WEIGHT = 450
const FONT_STYLE = "normal"
const TEXT_ALIGN = "center"
const LETTER_SPACING_PX = 0
const LINE_HEIGHT = 1.2

const FONT_SIZE_DESKTOP = 62
const FONT_SIZE_TABLET = 20
const FONT_SIZE_MOBILE = 20

const BRAND_GENIUS_COLORS = true
const RESERVE_DESKTOP_HEIGHT = false

const GENIUS_PALETTE = [
  "#1DB2F0",
  "#1DB2F0",
  "#3C9545",
  "#FDD309",
  "#FC2220",
  "#FC2220",
]

const isOnlyWhitespace = (s) => s !== "\n" && /^\s+$/.test(s)

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ])
  const keyframes = {}
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])]
  })
  return keyframes
}

export default function BlurTextLocked() {
  const normalizedText = TEXT.replace(/\r\n?/g, "\n")
    .replace(/\\n/g, "\n")
    .split(BREAK_TOKEN)
    .join("\n")

  const elements =
    ANIMATE_BY === "words"
      ? normalizedText.split(/(\s+|\n)/)
      : Array.from(normalizedText)

  const [inView, setInView] = React.useState(false)
  const ref = React.useRef(null)

  const uid = React.useId()
  const uniqueClass = `blurtext-${uid.replace(/[:]/g, "")}`

  React.useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(ref.current)
        }
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const fromSnapshot =
    DIRECTION === "top"
      ? { ...FROM_SNAPSHOT }
      : { ...FROM_SNAPSHOT, y: Math.abs(Number(FROM_SNAPSHOT.y)) || 50 }

  const toSnapshots = TO_SNAPSHOTS
  const stepCount = toSnapshots.length + 1
  const totalDuration = STEP_DURATION_S * (stepCount - 1)
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  )
  const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)

  const animCount = elements.filter(
    (e) => !isOnlyWhitespace(e) && e !== "\n"
  ).length
  let animatedIndex = -1

  const textIsExactlyGenius = normalizedText.trim().toLowerCase() === "genius"
  let geniusLetterPtr = 0

  const explicitLineCount = React.useMemo(
    () => Math.max(1, normalizedText.split("\n").length),
    [normalizedText]
  )

  const reservedMinHeightPx = React.useMemo(() => {
    if (!RESERVE_DESKTOP_HEIGHT) return undefined
    const lineBoxPx = LINE_HEIGHT * FONT_SIZE_DESKTOP
    return Math.round(explicitLineCount * lineBoxPx)
  }, [explicitLineCount])

  return (
    <>
      <style>{`
        .${uniqueClass} { font-size: ${FONT_SIZE_DESKTOP}px; }
        @media (max-width: 1199px) { .${uniqueClass} { font-size: ${FONT_SIZE_TABLET}px; } }
        @media (max-width: 767px) { .${uniqueClass} { font-size: ${FONT_SIZE_MOBILE}px; } }
      `}</style>

      <p
        ref={ref}
        className={uniqueClass}
        style={{
          display: "block",
          margin: 0,
          color: COLOR,
          fontFamily: FONT_FAMILY,
          fontWeight: FONT_WEIGHT,
          fontStyle: FONT_STYLE,
          textTransform: "none",
          textAlign: TEXT_ALIGN,
          letterSpacing: `${LETTER_SPACING_PX}px`,
          lineHeight: LINE_HEIGHT,
          whiteSpace: "pre-wrap",
          minHeight: reservedMinHeightPx,
        }}
      >
        {elements.map((segment, index) => {
          if (segment === "\n") return <br key={`br-${index}`} />
          if (isOnlyWhitespace(segment)) {
            return (
              <span key={`ws-${index}`} style={{ whiteSpace: "pre" }}>
                {segment}
              </span>
            )
          }

          animatedIndex += 1
          const spanTransition = {
            duration: totalDuration,
            times,
            delay: (animatedIndex * DELAY_MS) / 1000,
            ease: EASING,
          }

          if (
            BRAND_GENIUS_COLORS &&
            ANIMATE_BY === "words" &&
            segment.replace(/[^a-z]/gi, "").toLowerCase() === "genius"
          ) {
            const letters = Array.from(segment)
            return (
              <motion.span
                key={`seg-${index}`}
                initial={fromSnapshot}
                animate={inView ? animateKeyframes : fromSnapshot}
                transition={spanTransition}
                style={{
                  display: "inline-block",
                  willChange: "transform, filter, opacity",
                }}
              >
                {letters.map((ch, i) => {
                  const pos = "genius".indexOf(ch.toLowerCase())
                  const letterColor =
                    pos !== -1 ? GENIUS_PALETTE[pos] : undefined
                  return (
                    <span key={`gletter-${i}`} style={{ color: letterColor }}>
                      {ch}
                    </span>
                  )
                })}
              </motion.span>
            )
          }

          const letterColor =
            BRAND_GENIUS_COLORS &&
            ANIMATE_BY === "letters" &&
            textIsExactlyGenius &&
            geniusLetterPtr < GENIUS_PALETTE.length
              ? GENIUS_PALETTE[geniusLetterPtr++]
              : undefined

          return (
            <motion.span
              key={`seg-${index}`}
              initial={fromSnapshot}
              animate={inView ? animateKeyframes : fromSnapshot}
              transition={spanTransition}
              style={{
                display: "inline-block",
                willChange: "transform, filter, opacity",
                color: letterColor,
              }}
            >
              {segment}
            </motion.span>
          )
        })}
      </p>

      
    </>
  )
}

// import * as React from 'react'
// import {motion} from "framer-motion"

// const HomePage = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       Hello Motion
//     </motion.div>
//   );
  
// }

// export default HomePage
