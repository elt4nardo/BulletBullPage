import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const BackgroundEffect: React.FC = () => {
  const { x, y } = useMousePosition();
  
  // Calculate spotlight position as percentage of viewport
  const spotlightX = (x / window.innerWidth) * 100;
  const spotlightY = (y / window.innerHeight) * 100;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${x * 0.02}px, ${y * 0.02}px)`
        }}
      ></div>

      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 opacity-20 transition-transform duration-200 ease-out"
        style={{ 
          background: `radial-gradient(
            circle 800px at ${spotlightX}% ${spotlightY}%, 
            rgba(255, 255, 255, 0.15), 
            transparent 80%
          )`,
        }}
      ></div>

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{ 
          background: 'radial-gradient(circle, transparent 30%, black 85%)',
        }}
      ></div>
    </div>
  );
};

export default BackgroundEffect;