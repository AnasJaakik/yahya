import { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas ref is null');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get 2d context');
      return;
    }

    let particles = [];
    let animationId = null;

    // Configuration
    const particleCount = window.innerWidth > 768 ? 60 : 30;
    const connectionDistance = 150;
    const particleSpeed = 0.3;

    // Classe Particule
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebond sur les bords
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Garder les particules dans le canvas
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(5, 74, 145, 0.7)';
        ctx.fill();
      }
    }

    // Fonction pour initialiser/redimensionner le canvas
    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Créer les particules
      particles = Array.from({ length: particleCount }, () => new Particle());
      
      console.log('Canvas initialized:', {
        width: canvas.width,
        height: canvas.height,
        particles: particles.length
      });
    };

    // Initialiser le canvas
    initCanvas();

    // Fonction pour redimensionner
    const handleResize = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      if (particles.length > 0 && oldWidth > 0 && oldHeight > 0) {
        const scaleX = canvas.width / oldWidth;
        const scaleY = canvas.height / oldHeight;
        particles.forEach(particle => {
          particle.x *= scaleX;
          particle.y *= scaleY;
        });
      } else {
        particles = Array.from({ length: particleCount }, () => new Particle());
      }
    };

    window.addEventListener('resize', handleResize);

    // Fonction pour dessiner les connexions
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(5, 74, 145, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Gestionnaire de mouvement de la souris
    const mouseRef = { x: 0, y: 0 };

    // Fonction pour dessiner les connexions avec la souris
    const drawMouseConnections = () => {
      if (mouseRef.x === 0 && mouseRef.y === 0) return;
      
      particles.forEach((particle) => {
        const dx = mouseRef.x - particle.x;
        const dy = mouseRef.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance * 1.5) {
          const opacity = 1 - distance / (connectionDistance * 1.5);
          ctx.beginPath();
          ctx.moveTo(mouseRef.x, mouseRef.y);
          ctx.lineTo(particle.x, particle.y);
          ctx.strokeStyle = `rgba(241, 115, 0, ${opacity * 0.5})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });
    };

    // Fonction d'animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // TEST VISUEL - Décommentez pour voir un rectangle rouge (retirez après test)
      // ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Mettre à jour et dessiner les particules
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Dessiner les connexions
      drawConnections();
      drawMouseConnections();

      animationId = requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (e) => {
      mouseRef.x = e.clientX;
      mouseRef.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.x = -1000;
      mouseRef.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Démarrer l'animation
    animate();

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" />;
};

export default ParticleBackground;
