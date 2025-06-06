import { useEffect, useRef } from 'react';
import paper from 'paper';

const ServicePopup = ({ type, isVisible, position }) => {
  const canvasRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;

    // Initialize Paper.js
    projectRef.current = new paper.Project(canvasRef.current);
    paper.activate(projectRef.current);

    const view = paper.view;
    const canvas = canvasRef.current;

    // Clear any existing content
    paper.project.clear();

    // Create graphics based on service type
    const createGraphic = () => {
      switch (type) {
        case 'Strategy':
          return createStrategyGraphic();
        case 'Development':
          return createDevelopmentGraphic();
        case 'Integration':
          return createIntegrationGraphic();
        case 'Security':
          return createSecurityGraphic();
        case 'Support':
          return createSupportGraphic();
        default:
          return createDefaultGraphic();
      }
    };

    const createStrategyGraphic = () => {
      // Flowing lines representing strategic pathways
      const paths = [];
      for (let i = 0; i < 5; i++) {
        const path = new paper.Path();
        path.strokeColor = new paper.Color(0.06, 0.65, 0.91, 0.6); // Blue
        path.strokeWidth = 1.5;
        
        const startY = 20 + i * 15;
        path.moveTo([10, startY]);
        
        // Create curved strategic pathway
        for (let x = 10; x < view.size.width - 10; x += 20) {
          const y = startY + Math.sin((x + i * 50) * 0.02) * 8;
          path.lineTo([x, y]);
        }
        
        paths.push(path);
      }
      
      // Animate the paths
      let progress = 0;
      const animate = () => {
        progress += 0.02;
        paths.forEach((path, index) => {
          path.strokeColor.alpha = 0.3 + Math.sin(progress + index * 0.5) * 0.3;
        });
        view.draw();
        if (isVisible) requestAnimationFrame(animate);
      };
      animate();
    };

    const createDevelopmentGraphic = () => {
      // Code-like structure with building blocks
      const blocks = [];
      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 6; x++) {
          const block = new paper.Path.Rectangle({
            point: [x * 25 + 10, y * 20 + 20],
            size: [20, 15],
            fillColor: new paper.Color(0.06, 0.65, 0.91, 0.1),
            strokeColor: new paper.Color(0.06, 0.65, 0.91, 0.4),
            strokeWidth: 1
          });
          
          blocks.push({ path: block, delay: (x + y) * 0.1 });
        }
      }
      
      // Animate building effect
      let time = 0;
      const animate = () => {
        time += 0.05;
        blocks.forEach(({ path, delay }) => {
          const alpha = Math.max(0, Math.sin(time - delay) * 0.6 + 0.2);
          path.fillColor.alpha = alpha * 0.3;
          path.strokeColor.alpha = alpha;
        });
        view.draw();
        if (isVisible) requestAnimationFrame(animate);
      };
      animate();
    };

    const createIntegrationGraphic = () => {
      // Network nodes connecting
      const nodes = [];
      const connections = [];
      
      // Create nodes
      for (let i = 0; i < 8; i++) {
        const node = new paper.Path.Circle({
          center: [
            Math.random() * (view.size.width - 40) + 20,
            Math.random() * (view.size.height - 40) + 20
          ],
          radius: 3,
          fillColor: new paper.Color(0.06, 0.65, 0.91, 0.8)
        });
        nodes.push(node);
      }
      
      // Create connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.getDistance(nodes[j].position);
          if (distance < 80) {
            const line = new paper.Path.Line({
              from: nodes[i].position,
              to: nodes[j].position,
              strokeColor: new paper.Color(0.06, 0.65, 0.91, 0.3),
              strokeWidth: 1
            });
            connections.push(line);
          }
        }
      }
      
      // Animate pulsing
      let pulse = 0;
      const animate = () => {
        pulse += 0.08;
        const intensity = Math.sin(pulse) * 0.3 + 0.7;
        nodes.forEach(node => {
          node.fillColor.alpha = intensity;
        });
        connections.forEach(connection => {
          connection.strokeColor.alpha = intensity * 0.5;
        });
        view.draw();
        if (isVisible) requestAnimationFrame(animate);
      };
      animate();
    };

    const createSecurityGraphic = () => {
      // Shield-like protective layers
      const layers = [];
      const centerX = view.size.width / 2;
      const centerY = view.size.height / 2;
      
      for (let i = 0; i < 4; i++) {
        const radius = 20 + i * 15;
        const circle = new paper.Path.Circle({
          center: [centerX, centerY],
          radius: radius,
          strokeColor: new paper.Color(0.06, 0.65, 0.91, 0.4 - i * 0.08),
          strokeWidth: 1.5,
          dashArray: [5, 3]
        });
        layers.push(circle);
      }
      
      // Rotating protection
      let rotation = 0;
      const animate = () => {
        rotation += 1;
        layers.forEach((layer, index) => {
          layer.rotate(1 + index * 0.5, [centerX, centerY]);
          layer.strokeColor.alpha = 0.2 + Math.sin(rotation * 0.05 + index) * 0.2;
        });
        view.draw();
        if (isVisible) requestAnimationFrame(animate);
      };
      animate();
    };

    const createSupportGraphic = () => {
      // Radiating support waves
      const waves = [];
      const centerX = view.size.width / 2;
      const centerY = view.size.height / 2;
      
      for (let i = 0; i < 6; i++) {
        const wave = new paper.Path.Circle({
          center: [centerX, centerY],
          radius: 5,
          strokeColor: new paper.Color(0.06, 0.65, 0.91, 0.6),
          strokeWidth: 1
        });
        waves.push({ path: wave, startTime: i * 0.3 });
      }
      
      // Expanding waves
      let time = 0;
      const animate = () => {
        time += 0.05;
        waves.forEach(({ path, startTime }) => {
          const waveTime = time - startTime;
          if (waveTime > 0) {
            const radius = (waveTime * 50) % 80;
            const alpha = Math.max(0, 1 - radius / 80);
            path.bounds.size = new paper.Size(radius * 2, radius * 2);
            path.position = new paper.Point(centerX, centerY);
            path.strokeColor.alpha = alpha * 0.6;
          }
        });
        view.draw();
        if (isVisible) requestAnimationFrame(animate);
      };
      animate();
    };

    const createDefaultGraphic = () => {
      // Simple geometric pattern
      const rect = new paper.Path.Rectangle({
        point: [20, 20],
        size: [view.size.width - 40, view.size.height - 40],
        strokeColor: new paper.Color(0.06, 0.65, 0.91, 0.5),
        strokeWidth: 1
      });
    };

    createGraphic();
    view.draw();

    // Cleanup
    return () => {
      if (projectRef.current) {
        projectRef.current.remove();
      }
    };
  }, [type, isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed pointer-events-none z-50 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-2xl"
      style={{
        left: position.x + 20,
        top: position.y - 60,
        width: 200,
        height: 120,
        borderRadius: '8px'
      }}
    >
      <canvas
        ref={canvasRef}
        width={200}
        height={120}
        className="w-full h-full"
      />
    </div>
  );
};

export default ServicePopup;