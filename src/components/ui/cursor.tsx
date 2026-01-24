'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse position for the cursor movement
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Velocity tracking
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);

  // Scale and rotation based on velocity
  const scaleX = useSpring(1, { damping: 20, stiffness: 300 });
  const scaleY = useSpring(1, { damping: 20, stiffness: 300 });
  const rotate = useMotionValue(0);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const moveCursor = (e: MouseEvent) => {
      // Visibility check
      if (!isVisible) setIsVisible(true);

      // Position update
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Velocity calculation
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;

      velocityX.set(dx);
      velocityY.set(dy);

      // Calculate speed (magnitude)
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Calculate rotation angle (points in direction of movement)
      if (speed > 1) { // Only rotate if moving significantly
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        rotate.set(angle);
      }

      // Calculate stretch (clamped to avoid becoming too thin/long)
      const stretch = Math.min(speed * 0.05, 0.5); // Max 50% stretch
      scaleX.set(1 + stretch);
      scaleY.set(1 - stretch * 0.5); // Slight squash on the other axis

      lastX = e.clientX;
      lastY = e.clientY;
    };

    // Reset shape when stopped (using timeout for "friction")
    const checkStopped = setInterval(() => {
      scaleX.set(1);
      scaleY.set(1);
    }, 100);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(checkStopped);
    };
  }, [isVisible, mouseX, mouseY, rotate, scaleX, scaleY, velocityX, velocityY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        rotate: rotate,
      }}
    >
      {/* The stretching pill/dot */}
      <motion.div
        className="h-4 w-4 bg-white rounded-full"
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
        }}
        animate={{
          scale: isClicking ? 0.8 : undefined
        }}
      />
    </motion.div>
  );
}
