import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import PaperVisualization from './PaperVisualization';
import PsychedelicJourney from './PsychedelicJourney';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const [showPsychedelic, setShowPsychedelic] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 30
    });

    // Animate elements in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3");


  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"
    >
      {/* Elegant Background Effects */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
        
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
          <div className="floating-orb orb-4"></div>
        </div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Main Headline */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-light text-white mb-8 leading-none tracking-tight"
        >
          Bespoke
          <br />
          <span className="text-gradient font-extralight">AI</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Handcrafted AI solutions tailored precisely to your business needs. Built for you, owned by you.
        </p>

        {/* Single Call to Action */}
        <div ref={ctaRef}>
          <button 
            onClick={() => setShowPsychedelic(true)}
            className="btn-primary text-base px-12 py-4 font-light tracking-wide glow-effect"
          >
            Discover Bespoke AI
          </button>
        </div>
      </div>

      {/* Psychedelic Journey Overlay */}
      <PsychedelicJourney 
        isActive={showPsychedelic}
        onComplete={() => setShowPsychedelic(false)}
      />

    </section>
  );
};

export default Hero;