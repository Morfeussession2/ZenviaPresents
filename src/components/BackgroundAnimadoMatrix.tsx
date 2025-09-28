import React, { useEffect, useRef } from 'react';

interface MatrixChar {
  x: number;
  y: number;
  char: string;
  speed: number;
  opacity: number;
}

const BackgroundAnimadoMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = 'ZENVIA';
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: MatrixChar[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops.push({
        x: i * fontSize,
        y: Math.random() * canvas.height,
        char: chars[Math.floor(Math.random() * chars.length)],
        speed: Math.random() * 2 + 2,
        opacity: Math.random() * 0.5 + 0.5
      });
    }

    const animate = () => {
      // Create trail effect with semi-transparent black
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw matrix characters
      ctx.font = `${fontSize}px monospace`;
      
      drops.forEach((drop) => {
        // Pink color with opacity
        ctx.fillStyle = `rgba(255, 164, 231, ${drop.opacity})`;
        ctx.fillText(drop.char, drop.x, drop.y);

        // Move drop down
        drop.y += drop.speed;

        // Reset drop when it goes off screen
        if (drop.y > canvas.height) {
          drop.y = -fontSize;
          drop.char = chars[Math.floor(Math.random() * chars.length)];
          drop.speed = Math.random() * 3 + 1;
          drop.opacity = Math.random() * 0.5 + 0.5;
        }

        // Randomly change character
        if (Math.random() < 0.01) {
          drop.char = chars[Math.floor(Math.random() * chars.length)];
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.35
      }}
    />
  );
};

export default BackgroundAnimadoMatrix;