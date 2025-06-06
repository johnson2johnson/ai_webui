import { useEffect, useRef } from 'react';
import paper from 'paper';

const PaperVisualization = () => {
  const canvasRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Paper.js
    projectRef.current = new paper.Project(canvasRef.current);
    paper.activate(projectRef.current);

    const canvas = canvasRef.current;
    const view = paper.view;

    // Configuration
    const nodeCount = 50;
    const nodes = [];
    const connections = [];

    // Create neural network nodes
    for (let i = 0; i < nodeCount; i++) {
      const node = new paper.Path.Circle({
        center: [
          Math.random() * view.size.width,
          Math.random() * view.size.height
        ],
        radius: Math.random() * 3 + 1,
        fillColor: {
          gradient: {
            stops: ['#1e1b4b', '#7c2d12'],
            radial: true
          },
          origin: [0, 0],
          destination: [3, 3]
        },
        opacity: 0.3
      });

      // Add movement properties
      node.velocity = new paper.Point(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
      );

      nodes.push(node);
    }

    // Create connection lines
    const createConnections = () => {
      connections.forEach(connection => connection.remove());
      connections.length = 0;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.getDistance(nodes[j].position);
          
          if (distance < 150) {
            const line = new paper.Path.Line({
              from: nodes[i].position,
              to: nodes[j].position,
              strokeColor: '#312e81',
              strokeWidth: Math.max(0.1, 1 - distance / 150),
              opacity: Math.max(0.05, 0.4 - distance / 300)
            });

            connections.push(line);
          }
        }
      }
    };

    // Create flowing particles
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = new paper.Path.Circle({
        center: [
          Math.random() * view.size.width,
          Math.random() * view.size.height
        ],
        radius: 1,
        fillColor: '#991b1b',
        opacity: 0.2
      });

      particle.velocity = new paper.Point(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );

      particles.push(particle);
    }

    // Create pulsing waves
    const waves = [];
    const createWave = (center) => {
      const wave = new paper.Path.Circle({
        center: center,
        radius: 1,
        strokeColor: '#4c1d95',
        strokeWidth: 1,
        opacity: 0.3
      });

      waves.push({
        path: wave,
        maxRadius: 100,
        speed: 2
      });
    };

    // Animation loop
    let animationId;
    const animate = () => {
      // Move nodes
      nodes.forEach(node => {
        node.position = node.position.add(node.velocity);

        // Bounce off edges
        if (node.position.x < 0 || node.position.x > view.size.width) {
          node.velocity.x *= -1;
        }
        if (node.position.y < 0 || node.position.y > view.size.height) {
          node.velocity.y *= -1;
        }

        // Keep within bounds
        node.position.x = Math.max(0, Math.min(view.size.width, node.position.x));
        node.position.y = Math.max(0, Math.min(view.size.height, node.position.y));
      });

      // Move particles
      particles.forEach(particle => {
        particle.position = particle.position.add(particle.velocity);

        // Wrap around edges
        if (particle.position.x < 0) particle.position.x = view.size.width;
        if (particle.position.x > view.size.width) particle.position.x = 0;
        if (particle.position.y < 0) particle.position.y = view.size.height;
        if (particle.position.y > view.size.height) particle.position.y = 0;

        // Add subtle glow effect
        particle.opacity = 0.1 + Math.sin(Date.now() * 0.005 + particle.position.x * 0.01) * 0.15;
      });

      // Update waves
      waves.forEach((wave, index) => {
        wave.path.bounds.size = new paper.Size(wave.path.bounds.size.width + wave.speed);
        wave.path.opacity *= 0.98;

        if (wave.path.bounds.width > wave.maxRadius || wave.path.opacity < 0.01) {
          wave.path.remove();
          waves.splice(index, 1);
        }
      });

      // Create new wave occasionally
      if (Math.random() < 0.003) {
        createWave(new paper.Point(
          Math.random() * view.size.width,
          Math.random() * view.size.height
        ));
      }

      // Update connections every few frames for performance
      if (Math.random() < 0.1) {
        createConnections();
      }

      view.draw();
      animationId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      view.viewSize = new paper.Size(canvas.offsetWidth, canvas.offsetHeight);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (projectRef.current) {
        projectRef.current.remove();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default PaperVisualization;