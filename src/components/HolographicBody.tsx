import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HolographicBodyProps {
  latentAxis?: number;
  structuralVariation?: number;
  scale?: number;
}

const HolographicBody = ({ 
  latentAxis = 50, 
  structuralVariation = 50,
  scale = 1 
}: HolographicBodyProps) => {
  const [scanPosition, setScanPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanPosition((prev) => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Body proportions affected by sliders
  const shoulderWidth = 90 + (latentAxis - 50) * 0.8;
  const hipWidth = 70 + (structuralVariation - 50) * 0.6;
  const torsoHeight = 120 + (latentAxis - 50) * 0.4;
  
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ transform: `scale(${scale})` }}
    >
      {/* Outer glow */}
      <div className="absolute w-64 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      
      {/* SVG Body */}
      <svg
        viewBox="0 0 200 400"
        className="w-64 h-96 relative z-10"
        style={{ filter: 'drop-shadow(0 0 20px hsl(187 100% 50% / 0.5))' }}
      >
        <defs>
          {/* Holographic gradient */}
          <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(187, 100%, 50%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(175, 100%, 45%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(210, 100%, 60%)" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Scan line mask */}
          <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset={`${Math.max(0, scanPosition - 15)}%`} stopColor="white" stopOpacity="0" />
            <stop offset={`${scanPosition}%`} stopColor="white" stopOpacity="1" />
            <stop offset={`${Math.min(100, scanPosition + 15)}%`} stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <g opacity="0.15">
          {[...Array(20)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 20}
              x2="200"
              y2={i * 20}
              stroke="hsl(187, 100%, 50%)"
              strokeWidth="0.5"
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 20}
              y1="0"
              x2={i * 20}
              y2="400"
              stroke="hsl(187, 100%, 50%)"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Body outline - wireframe style */}
        <g filter="url(#glow)" fill="none" stroke="url(#holoGradient)" strokeWidth="1.5">
          {/* Head */}
          <ellipse cx="100" cy="40" rx="25" ry="30" opacity="0.8" />
          <ellipse cx="100" cy="40" rx="22" ry="27" opacity="0.4" />
          
          {/* Neck */}
          <line x1="90" y1="68" x2="90" y2="85" opacity="0.7" />
          <line x1="110" y1="68" x2="110" y2="85" opacity="0.7" />
          
          {/* Shoulders */}
          <motion.path
            d={`M ${100 - shoulderWidth/2} 90 Q 100 85 ${100 + shoulderWidth/2} 90`}
            opacity="0.8"
            animate={{ d: `M ${100 - shoulderWidth/2} 90 Q 100 85 ${100 + shoulderWidth/2} 90` }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Torso */}
          <motion.path
            d={`M ${100 - shoulderWidth/2} 90 
                Q ${100 - shoulderWidth/2 - 5} ${90 + torsoHeight/2} ${100 - hipWidth/2} ${90 + torsoHeight}
                L ${100 + hipWidth/2} ${90 + torsoHeight}
                Q ${100 + shoulderWidth/2 + 5} ${90 + torsoHeight/2} ${100 + shoulderWidth/2} 90`}
            opacity="0.7"
            animate={{
              d: `M ${100 - shoulderWidth/2} 90 
                  Q ${100 - shoulderWidth/2 - 5} ${90 + torsoHeight/2} ${100 - hipWidth/2} ${90 + torsoHeight}
                  L ${100 + hipWidth/2} ${90 + torsoHeight}
                  Q ${100 + shoulderWidth/2 + 5} ${90 + torsoHeight/2} ${100 + shoulderWidth/2} 90`
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Internal structure hints */}
          <g opacity="0.3">
            {/* Spine */}
            <line x1="100" y1="85" x2="100" y2={90 + torsoHeight} strokeDasharray="4 4" />
            {/* Ribs */}
            {[...Array(6)].map((_, i) => (
              <motion.ellipse
                key={`rib-${i}`}
                cx="100"
                cy={100 + i * 15}
                rx={shoulderWidth/2 - 10 - i * 3}
                ry="8"
                opacity={0.3 - i * 0.03}
                animate={{
                  rx: shoulderWidth/2 - 10 - i * 3
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </g>
          
          {/* Arms */}
          <motion.path
            d={`M ${100 - shoulderWidth/2} 95 Q ${100 - shoulderWidth/2 - 25} 140 ${100 - shoulderWidth/2 - 15} 220`}
            opacity="0.6"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <motion.path
            d={`M ${100 + shoulderWidth/2} 95 Q ${100 + shoulderWidth/2 + 25} 140 ${100 + shoulderWidth/2 + 15} 220`}
            opacity="0.6"
            strokeWidth="8"
            strokeLinecap="round"
          />
          
          {/* Legs */}
          <motion.path
            d={`M ${100 - hipWidth/2 + 5} ${90 + torsoHeight} L ${100 - hipWidth/2 - 5} 380`}
            opacity="0.6"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <motion.path
            d={`M ${100 + hipWidth/2 - 5} ${90 + torsoHeight} L ${100 + hipWidth/2 + 5} 380`}
            opacity="0.6"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>

        {/* Scan line effect */}
        <rect
          x="0"
          y={scanPosition * 4}
          width="200"
          height="20"
          fill="url(#scanGradient)"
          className="mix-blend-overlay"
        />

        {/* Data points */}
        {[
          { x: 100, y: 40 },
          { x: 100, y: 150 },
          { x: 55, y: 130 },
          { x: 145, y: 130 },
          { x: 80, y: 280 },
          { x: 120, y: 280 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="hsl(187, 100%, 50%)"
            animate={{
              r: [3, 5, 3],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 300 - 150,
            opacity: 0,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default HolographicBody;
