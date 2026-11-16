"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function WarpSpeedLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: { x: number; y: number; z: number; o: number; color: string }[] = [];
    const numStars = 800;
    const centerX = width / 2;
    const centerY = height / 2;

    const colors = [
      "255, 255, 255", // white
      "255, 255, 255",
      "180, 220, 255",
      "30, 167, 255"
    ];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - centerX,
        y: Math.random() * height - centerY,
        z: Math.random() * width,
        o: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Removed lightning arrays and functions

    let animationFrameId: number;
    let frameCount = 0;

    const render = () => {
      ctx.fillStyle = "rgba(4, 11, 22, 0.35)"; // dark background with trails
      ctx.fillRect(0, 0, width, height);

      // Render stars
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        
        star.z -= 2; // slower warp speed
        if (star.z <= 0) {
          star.x = Math.random() * width - centerX;
          star.y = Math.random() * height - centerY;
          star.z = width;
        }

        const sx = centerX + (star.x / star.z) * width;
        const sy = centerY + (star.y / star.z) * width;
        const size = (1 - star.z / width) * 3.5;

        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${star.color}, ${star.o})`;
        ctx.fill();
      }

      // Removed lightning render

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="warp-logo-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Warp Speed & Lightning Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />

      {/* Original Silver Logo */}
      <motion.div 
        className="warp-logo-image-wrapper"
        animate={{
          scale: isHovered ? [1.25, 1.27, 1.25] : [1, 1.02, 1],
        }}
        transition={{
          duration: isHovered ? 0.05 : 0.1, // Even faster jitter when hovered for intensity
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      >
        <Image
          src="/assets/ai8ht-logo-transparent-clean.png"
          alt="AI8HT Logo"
          width={800}
          height={300}
          style={{ width: "auto", height: "100%", objectFit: "contain", filter: "brightness(1.1) drop-shadow(0px 5px 15px rgba(0,0,0,0.8))" }}
          priority
        />
      </motion.div>
    </div>
  );
}
