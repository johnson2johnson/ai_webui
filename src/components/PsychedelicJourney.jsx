import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const PsychedelicJourney = ({ isActive, onComplete }) => {
  const containerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const startPsychedelicJourney = () => {
    const container = containerRef.current;
    if (!container) return;

    // Create multiple layers of psychedelic elements
    const layers = [];
    const numLayers = 20;
    
    // Clear previous elements
    container.innerHTML = '';

    // Create animated layers
    for (let i = 0; i < numLayers; i++) {
      const layer = document.createElement('div');
      layer.className = 'psychedelic-layer';
      layer.style.cssText = `
        position: absolute;
        width: ${100 + i * 50}px;
        height: ${100 + i * 50}px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: conic-gradient(
          from ${i * 18}deg,
          #ff006e,
          #8338ec,
          #3a86ff,
          #06ffa5,
          #ffbe0b,
          #fb5607,
          #ff006e
        );
        opacity: 0;
        filter: blur(${i * 2}px);
        animation: psychedelicSpin ${5 + i * 0.5}s linear infinite;
        z-index: ${1000 - i};
      `;
      container.appendChild(layer);
      layers.push(layer);
    }

    // Create floating geometric shapes
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement('div');
      const shapeType = ['triangle', 'square', 'diamond'][i % 3];
      shape.className = `psychedelic-shape ${shapeType}`;
      
      const size = Math.random() * 80 + 20;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      shape.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${startX}px;
        top: ${startY}px;
        background: linear-gradient(45deg, 
          hsl(${Math.random() * 360}, 100%, 60%),
          hsl(${Math.random() * 360}, 100%, 60%)
        );
        opacity: 0;
        transform: rotate(${Math.random() * 360}deg);
        z-index: 1010;
      `;
      
      if (shapeType === 'triangle') {
        shape.style.background = 'none';
        shape.style.width = '0';
        shape.style.height = '0';
        shape.style.borderLeft = `${size/2}px solid transparent`;
        shape.style.borderRight = `${size/2}px solid transparent`;
        shape.style.borderBottom = `${size}px solid hsl(${Math.random() * 360}, 100%, 60%)`;
      } else if (shapeType === 'diamond') {
        shape.style.borderRadius = '0';
        shape.style.transform += ' rotate(45deg)';
      } else {
        shape.style.borderRadius = '10px';
      }
      
      container.appendChild(shape);
    }

    // Create text particles
    const texts = ['INNOVATION', 'AI', 'FUTURE', 'TRANSFORM', 'EVOLVE', 'DISCOVER'];
    texts.forEach((text, i) => {
      const textEl = document.createElement('div');
      textEl.textContent = text;
      textEl.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 40 + 20}px;
        font-weight: bold;
        color: hsl(${Math.random() * 360}, 100%, 70%);
        left: ${Math.random() * 80 + 10}%;
        top: ${Math.random() * 80 + 10}%;
        opacity: 0;
        z-index: 1020;
        pointer-events: none;
        text-shadow: 0 0 20px currentColor;
      `;
      container.appendChild(textEl);
    });

    // Master timeline for the psychedelic journey
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        if (onComplete) onComplete();
      }
    });

    // Phase 1: Explosion entrance
    tl.to(layers, {
      opacity: 0.8,
      scale: 3,
      duration: 0.5,
      stagger: 0.1,
      ease: "power4.out"
    })
    
    // Phase 2: Pulsing and morphing
    .to(layers, {
      scale: 1.5,
      rotation: 360,
      duration: 2,
      stagger: 0.05,
      ease: "sine.inOut",
      repeat: 2,
      yoyo: true
    }, "-=0.3")
    
    // Phase 3: Shapes flying in
    .to('.psychedelic-shape', {
      opacity: 0.9,
      scale: 1.5,
      rotation: "+=720",
      duration: 1.5,
      stagger: 0.1,
      ease: "elastic.out(1, 0.5)"
    }, "-=1.5")
    
    // Phase 4: Text revelation
    .to(container.querySelectorAll('div:last-child'), {
      opacity: 1,
      scale: 1.2,
      rotation: "+=180",
      duration: 1,
      stagger: 0.2,
      ease: "back.out(2)"
    }, "-=1")
    
    // Phase 5: Kaleidoscope effect
    .to(layers, {
      scale: 4,
      rotation: "+=1080",
      filter: "blur(20px) hue-rotate(360deg)",
      duration: 3,
      ease: "power2.inOut"
    }, "-=0.5")
    
    // Phase 6: Final implosion
    .to(container.children, {
      scale: 0,
      opacity: 0,
      rotation: "+=360",
      duration: 1,
      stagger: 0.02,
      ease: "power4.in"
    });

    // Background color cycling
    gsap.to(container, {
      background: "radial-gradient(circle, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b)",
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.to(container, {
      filter: "hue-rotate(3600deg)",
      duration: 8,
      ease: "none"
    });
  };

  useEffect(() => {
    if (isActive && !isAnimating) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        startPsychedelicJourney();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-auto"
      style={{
        background: 'radial-gradient(circle, #000, #111)',
        overflow: 'hidden'
      }}
      onClick={() => {
        if (onComplete) onComplete();
      }}
    >
      <style jsx>{`
        @keyframes psychedelicSpin {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          25% { transform: translate(-50%, -50%) rotate(90deg) scale(1.2); }
          50% { transform: translate(-50%, -50%) rotate(180deg) scale(0.8); }
          75% { transform: translate(-50%, -50%) rotate(270deg) scale(1.5); }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
        }
        
        .psychedelic-layer {
          animation: psychedelicSpin 3s linear infinite;
        }
        
        .psychedelic-shape {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
      `}</style>
      
      {/* Exit instruction */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg font-light opacity-70 z-[10000]">
        Click anywhere to end the journey
      </div>
    </div>
  );
};

export default PsychedelicJourney;