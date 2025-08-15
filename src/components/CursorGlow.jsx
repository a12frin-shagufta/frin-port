import React, { useEffect, useState } from 'react';

const cursorGlow = ({ size = 200, intensity = 0.3, color = 'rgba(99,102,241,0.3)' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    transform: `translate(calc(${position.x}px - ${size / 2}px), calc(${position.y}px - ${size / 2}px))`,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    background: `radial-gradient(circle, rgba(236,72,153,0.85) 0%, rgba(239,68,68,0.65) 40%, rgba(239,68,68,0) 70%)`,

    pointerEvents: 'none',
    zIndex: 9999,
    opacity: intensity,
    mixBlendMode: 'screen',
  };

  return <div style={gradientStyle} />;
};

export default cursorGlow;