/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: GridPatternProps) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>([]);

  // Chỉ chạy trên client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  function getPos() {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ] as [number, number];
  }

  function generateSquares(count: number) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  }

  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) => (sq.id === id ? { ...sq, pos: getPos() } : sq))
    );
  };

  // Xử lý resize và sinh squares sau khi mount
  useEffect(() => {
    if (!isMounted) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    const currentContainerRef = containerRef.current;
    if (currentContainerRef) resizeObserver.observe(currentContainerRef);

    return () => {
      if (currentContainerRef) resizeObserver.unobserve(currentContainerRef);
    };
  }, [isMounted]);

  // Cập nhật squares khi dimensions thay đổi
  useEffect(() => {
    if (isMounted && dimensions.width > 0 && dimensions.height > 0) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares, isMounted]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />

      {isMounted && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(({ pos: [xPos, yPos], id }, index) => (
            <motion.rect
              initial={{ opacity: 0 }}
              animate={{ opacity: maxOpacity }}
              transition={{
                duration,
                repeat: 1,
                delay: index * 0.1,
                repeatType: "reverse",
                repeatDelay,
              }}
              onAnimationComplete={() => updateSquarePosition(id)}
              key={`${xPos}-${yPos}-${id}`} // Sử dụng id thay vì index
              width={width - 1}
              height={height - 1}
              x={xPos * width + 1}
              y={yPos * height + 1}
              fill="currentColor"
              strokeWidth="0"
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default GridPattern;
