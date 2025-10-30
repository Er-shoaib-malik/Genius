import React, { useRef, useState, useEffect, startTransition } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/**
 * PaperTransition.jsx
 * 
 * 3D paper flip effect between two images.
 * - Flips automatically when it enters the viewport.
 * - Click to spin toggle (optional).
 */

export default function PaperTransition({
  image1 = {
    src: "https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg",
    alt: "Image 1",
  },
  image2 = {
    src: "https://framerusercontent.com/images/aNsAT3jCvt4zglbWCUoFe33Q.jpg",
    alt: "Image 2",
  },
  springDuration = 1.7,
  bounce = 0.2,
  backgroundColor = "#FFFFFF",
  shadowIntensity = 0.3,
  rotationX = 15,
  rotationY = 10,
  enableClickSpin = true,
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10%" });
  const controls = useAnimation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (isInView) {
      const animateSequence = async () => {
        // Initial 3D entrance
        await controls.start({
          rotateX: rotationX,
          rotateY: rotationY,
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            duration: springDuration,
            bounce: bounce,
          },
        });

        // Flip to second image after short delay
        setTimeout(() => {
          startTransition(() => setCurrentImage(1));
        }, 500);
      };

      animateSequence();
    }
  }, [isInView, controls, springDuration, bounce, rotationX, rotationY]);

  const springTransition = {
    type: "spring",
    duration: springDuration,
    bounce: bounce,
  };

  const handleClick = () => {
    if (!enableClickSpin) return;

    const spinAnimation = async () => {
      await controls.start({
        rotateY: rotationY + 360,
        transition: springTransition,
      });

      // Switch image during spin
      startTransition(() =>
        setCurrentImage((prev) => (prev === 0 ? 1 : 0))
      );

      // Reset rotation
      controls.set({
        rotateY: rotationY,
      });
    };

    spinAnimation();
  };

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        perspective: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <motion.div
        animate={controls}
        initial={{
          rotateX: 0,
          rotateY: 0,
          scale: 0.8,
          opacity: 0,
        }}
        onClick={handleClick}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor,
          borderRadius: "8px",
          boxShadow: `0 10px 30px rgba(0, 0, 0, ${shadowIntensity})`,
          transformStyle: "preserve-3d",
          position: "relative",
          overflow: "hidden",
          cursor: enableClickSpin ? "pointer" : "default",
        }}
      >
        <motion.div
          key={currentImage}
          initial={{
            opacity: 0,
            rotateY: currentImage === 0 ? 0 : 180,
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
            transition: springTransition,
          }}
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${
              currentImage === 0 ? image1.src : image2.src
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </motion.div>
    </div>
  );
}
