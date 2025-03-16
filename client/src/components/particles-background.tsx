import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
}

interface ParticlesBackgroundProps {
  className?: string;
  quantity?: number;
  color?: string;
}

export default function ParticlesBackground({
  className,
  quantity = 80,
  color = "#2563eb"
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const mousePositionRef = useRef({ x: -1000, y: -1000 });
  
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        setDimensions({ width, height });
      }
    };
    
    // Initialize canvas dimensions
    handleResize();
    
    // Generate initial particles
    particlesRef.current = Array.from({ length: quantity }).map((_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      opacity: Math.random() * 0.3 + 0.1
    }));
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation loop
    startAnimation();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [quantity, dimensions.width, dimensions.height]);
  
  const handleMouseMove = (e: MouseEvent) => {
    mousePositionRef.current = {
      x: e.clientX,
      y: e.clientY
    };
  };
  
  const startAnimation = () => {
    const draw = () => {
      if (!canvasRef.current) return;
      
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off boundaries
        if (particle.x < 0 || particle.x > dimensions.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > dimensions.height) particle.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = color; // Main color
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        
        // Draw connections
        const mouseDistance = Math.hypot(
          particle.x - mousePositionRef.current.x,
          particle.y - mousePositionRef.current.y
        );
        
        // Connect to mouse if close enough
        if (mouseDistance < 150) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mousePositionRef.current.x, mousePositionRef.current.y);
          ctx.strokeStyle = color;
          ctx.globalAlpha = 0.2 * (1 - mouseDistance / 150);
          ctx.stroke();
        }
        
        // Connect to nearby particles
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const distance = Math.hypot(particle.x - p2.x, particle.y - p2.y);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color;
            ctx.globalAlpha = 0.2 * (1 - distance / 100);
            ctx.stroke();
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(draw);
    };
    
    animationRef.current = requestAnimationFrame(draw);
  };
  
  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn("absolute inset-0 z-0", className)}
    />
  );
}
