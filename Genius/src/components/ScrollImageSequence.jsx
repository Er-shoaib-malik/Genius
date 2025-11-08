import React, { useEffect, useRef } from "react";

export default function ScrollImageSequence() {
  const canvasRef = useRef(null);
  const frameCount = 100;

  const currentFrame = (index) =>
    `/frames/Comp 1_${index.toString().padStart(5, "0")}.png`;

  const preloadImages = () => {
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
    };
    setCanvasSize();

    const img = new Image();
    img.src = currentFrame(0);
    img.onload = () => drawImageStretchWidth(img, ctx, canvas);

    const updateImage = (index) => {
      const image = new Image();
      image.src = currentFrame(index);
      image.onload = () => drawImageStretchWidth(image, ctx, canvas);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop = window.innerHeight * 4; // shorter scroll zone
      const scrollFraction = Math.min(scrollTop / maxScrollTop, 1);
      const frameIndex = Math.ceil(scrollFraction * (frameCount - 1));
      requestAnimationFrame(() => updateImage(frameIndex));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", setCanvasSize);
    preloadImages();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const drawImageStretchWidth = (img, ctx, canvas) => {
    const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
    const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
    const imgAspect = img.width / img.height;
    const renderWidth = canvasWidth;
    const renderHeight = renderWidth / imgAspect;
    const xStart = 0;
    const yStart = (canvasHeight - renderHeight) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, xStart, yStart, renderWidth, renderHeight);
  };

  return (
    <section className=" h-[500vh] bg-black">
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none"
      />

      {/* Text overlay (fades in/out as you scroll if you want later) */}
      <div className="sticky top-0 flex items-center justify-center h-screen text-white text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Read • Learn • Create</h1>
          <p className="text-2xl font-semibold">Your E-book Studio</p>
        </div>
      </div>
    </section>
  );
}
