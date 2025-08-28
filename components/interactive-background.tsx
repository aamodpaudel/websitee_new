"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  FlaskConical, 
  FileText, 
  Code, 
  DollarSign, 
  BarChart3,
  Network,
  Cpu
} from 'lucide-react';

const InteractiveBackground: React.FC = () => {
  const leftIcons = [
    { icon: <GraduationCap size={24} />, color: '#3B82F6', name: 'Education' },
    { icon: <FlaskConical size={24} />, color: '#10B981', name: 'Science' },
    { icon: <FileText size={24} />, color: '#F59E0B', name: 'Documents' },
    { icon: <Code size={24} />, color: '#8B5CF6', name: 'Technology' },
  ];

  const rightIcons = [
    { icon: <DollarSign size={24} />, color: '#EF4444', name: 'Finance' },
    { icon: <BarChart3 size={24} />, color: '#06B6D4', name: 'Analytics' },
    { icon: <Network size={24} />, color: '#84CC16', name: 'Networking' },
    { icon: <Cpu size={24} />, color: '#6366F1', name: 'Computing' },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden hidden md:block">
      {/* Left side icons with CSS positioning */}
      <div className="absolute top-[35%] pointer-events-none" style={{ left: '25%' }}>
        {leftIcons.map((icon, index) => {
          // Custom horizontal offsets for specific icons
          let horizontalOffset = 0;
          if (index === 1) horizontalOffset = -12; // Lab icon: much farther left
          else if (index === 2) horizontalOffset = -2; // Document icon: closest to center
          else if (index === 3) horizontalOffset = -12; // Code icon: double farther left
          
          return (
            <motion.div
              key={`left-${index}`}
              className="absolute"
              style={{
                top: `${index * 15}vh`,
                left: `${horizontalOffset}vw`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm"
                style={{
                  backgroundColor: `${icon.color}15`,
                  border: `2px solid ${icon.color}`,
                }}
              >
                <div style={{ color: icon.color }}>
                  {icon.icon}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

             {/* Right side icons with CSS positioning */}
       <div className="absolute top-[35%] pointer-events-none" style={{ left: '75%' }}>
         {rightIcons.map((icon, index) => {
           // Custom horizontal offsets for right side icons (mirrored from left side)
           // Bottom icon (index 3) matches top icon of left column (index 0) = no offset
           // Third icon (index 2) matches second icon of left column (index 1) = -12vw
           // Second icon (index 1) matches third icon of left column (index 2) = -2vw  
           // Top icon (index 0) matches bottom icon of left column (index 3) = -12vw
           let horizontalOffset = 0;
           if (index === 0) horizontalOffset = 12; // Top icon: much farther right
           else if (index === 1) horizontalOffset = 2; // Second icon: closest to center
           else if (index === 2) horizontalOffset = 12; // Third icon: much farther right
           else if (index === 3) horizontalOffset = 0; // Bottom icon: no offset
           
           return (
             <motion.div
               key={`right-${index}`}
               className="absolute"
               style={{
                 top: `${index * 15}vh`,
                 left: `${horizontalOffset}vw`,
                 transform: 'translate(-50%, -50%)',
               }}
               animate={{
                 scale: [1, 1.05, 1],
                 opacity: [0.8, 1, 0.8],
               }}
               transition={{
                 duration: 6,
                 repeat: Infinity,
                 delay: (index + 4) * 0.3,
               }}
             >
               <div
                 className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm"
                 style={{
                   backgroundColor: `${icon.color}15`,
                   border: `2px solid ${icon.color}`,
                 }}
               >
                 <div style={{ color: icon.color }}>
                   {icon.icon}
                 </div>
               </div>
             </motion.div>
           );
         })}
       </div>

                           {/* Particle animations connecting to center */}
        {[...leftIcons, ...rightIcons].map((icon, index) => {
          // Custom horizontal offsets for left side particles to match icon positions
          let horizontalOffset = 0;
          if (index === 1) horizontalOffset = -12; // Lab icon particle: much farther left
          else if (index === 2) horizontalOffset = -2; // Document icon particle: closest to center
          else if (index === 3) horizontalOffset = -12; // Code icon particle: double farther left
          
          // Custom horizontal offsets for right side particles to match icon positions (mirrored)
          if (index === 4) horizontalOffset = 12; // Top right icon particle: much farther right
          else if (index === 5) horizontalOffset = 2; // Second right icon particle: closest to center
          else if (index === 6) horizontalOffset = 12; // Third right icon particle: much farther right
          else if (index === 7) horizontalOffset = 0; // Bottom right icon particle: no offset
         
          // Create 2 particles for each icon
          return [0, 1].map((particleIndex) => (
            <motion.div
              key={`particle-${index}-${particleIndex}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: 'rgba(219, 39, 119, 0.4)',
                left: index < 4 ? `calc(25% + ${horizontalOffset}vw + ${particleIndex * 0.5}vw)` : `calc(75% + ${particleIndex * 0.5}vw)`,
                top: `${35 + (index % 4) * 15 + particleIndex * 0.5}vh`,
              }}
              animate={{
                x: [0, index < 4 ? '25vw' : '-25vw'],
                y: [0, '-10vh'],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: index * 0.5 + particleIndex * 0.8,
                ease: "easeInOut",
              }}
            />
          ));
        }).flat()}
    </div>
  );
};

export default InteractiveBackground;
