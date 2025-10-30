import React, { useState, useMemo } from "react";

export default function SwipeLettersButton(props) {
  const {
    label = "SIGN UP",
    defaultState = {
      bgColor: "#1D1D1D",
      borderColor: "#1C64FF",
      textColor: "#FFFFFF",
    },
    hoverState = {
      bgColor: "#1C64FF",
      borderColor: "#1C64FF",
      textColor: "#FFFFFF",
    },
    radius = 10,
    paddingX = 24,
    paddingY = 16,
    font = {
      fontFamily: "Poppins",
      fontSize: "18px",
      variant: "Semibold",
      letterSpacing: "0.4px",
      textAlign: "center",
    },
    align = "center",
    showBorder = true,
    direction = "alternate",
    duration = 380,
    easing = "cubic-bezier(.25,.75,.25,1)",
    stagger = 18,
    link = "",
  } = props;

  const [hovered, setHovered] = useState(false);
  const chars = useMemo(
    () => Array.from(label || "").map((c) => (c === " " ? "\u00A0" : c)),
    [label]
  );

  const handleClick = () => {
    if (!link || typeof window === "undefined") return;
    if (link.startsWith("http") || link.startsWith("//")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = link;
    }
  };

  const currentBgColor = hovered ? hoverState.bgColor : defaultState.bgColor;
  const currentBorderColor = hovered
    ? hoverState.borderColor
    : defaultState.borderColor;
  const currentTextColor = hovered
    ? hoverState.textColor
    : defaultState.textColor;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent:
          align === "center"
            ? "center"
            : align === "start"
            ? "flex-start"
            : "flex-end",
        backgroundColor: currentBgColor,
        borderRadius: radius,
        border: showBorder ? `1px solid ${currentBorderColor}` : "none",
        overflow: "hidden",
        position: "relative",
        userSelect: "none",
        cursor: "pointer",
        transition: "background-color 0.2s ease, border-color 0.2s ease",
      }}
    >
      <div
        style={{
          padding: `${paddingY}px ${paddingX}px`,
          display: "flex",
          alignItems: "center",
          justifyContent:
            align === "center"
              ? "center"
              : align === "start"
              ? "flex-start"
              : "flex-end",
          gap: `${parseFloat(font.letterSpacing) || 0.4}px`,
        }}
      >
        {chars.map((ch, i) => {
          const dir =
            direction === "alternate"
              ? i % 2 === 0
                ? "top"
                : "bottom"
              : direction;
          const initY = dir === "top" ? "-50%" : "0%";
          const hoverY = dir === "top" ? "0%" : "-50%";
          const delay = `${i * stagger}ms`;

          return (
            <span
              key={`${ch}-${i}`}
              style={{
                position: "relative",
                display: "inline-block",
                height: "1em",
                overflow: "hidden",
                fontFamily: font.fontFamily || "inherit",
                fontSize: font.fontSize,
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  display: "grid",
                  gridAutoRows: "1em",
                  transform: `translateY(${hovered ? hoverY : initY})`,
                  transitionProperty: "transform",
                  transitionDuration: `${duration}ms`,
                  transitionTimingFunction: easing,
                  transitionDelay: delay,
                  willChange: "transform",
                }}
              >
                <span
                  style={{
                    color: currentTextColor,
                    transition: "color 0.2s ease",
                  }}
                >
                  {ch}
                </span>
                <span
                  style={{
                    color: currentTextColor,
                    transition: "color 0.2s ease",
                  }}
                >
                  {ch}
                </span>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
