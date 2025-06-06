import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900"
    >
      <div className="max-w-4xl mx-auto px-8">
        {/* Section Header */}
        <div ref={titleRef} className="mb-24">
          <h2 className="text-2xl font-light text-white tracking-widest uppercase mb-4">
            About
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="space-y-16">
          {/* Mission Statement */}
          <div>
            <h3 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
              We craft bespoke AI solutions, each one uniquely designed for your business.
            </h3>
            <p className="text-lg text-gray-300 font-light leading-relaxed max-w-3xl">
              Every solution is handcrafted from the ground up. No templates, no generic solutions. 
              Just pure, bespoke AI tailored to your exact needs and deployed in your environment.
            </p>
          </div>

          {/* Principles */}
          <div className="border-t border-gray-700 pt-16">
            <h4 className="text-sm font-light text-cyan-400 tracking-widest uppercase mb-12">
              Bespoke Principles
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-6 rounded-xl glass-dark">
                <h5 className="text-xl font-light text-white mb-4">Truly Bespoke</h5>
                <p className="text-gray-300 font-light leading-relaxed">
                  No two solutions are alike. Each one is crafted specifically for your unique requirements.
                </p>
              </div>
              <div className="p-6 rounded-xl glass-dark">
                <h5 className="text-xl font-light text-white mb-4">Artisanal Quality</h5>
                <p className="text-gray-300 font-light leading-relaxed">
                  Handcrafted with meticulous attention to detail and uncompromising quality standards.
                </p>
              </div>
              <div className="p-6 rounded-xl glass-dark">
                <h5 className="text-xl font-light text-white mb-4">Complete Ownership</h5>
                <p className="text-gray-300 font-light leading-relaxed">
                  Your bespoke AI belongs entirely to you. Full source code, complete control, no dependencies.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="border-t border-gray-700 pt-16">
            <h4 className="text-sm font-light text-cyan-400 tracking-widest uppercase mb-12">
              Leadership
            </h4>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-light text-lg rounded-xl glow-effect">
                    SC
                  </div>
                </div>
                <div>
                  <h5 className="text-xl font-light text-white mb-1">Dr. Sarah Chen</h5>
                  <p className="text-cyan-400 font-light mb-2">Master AI Craftsperson</p>
                  <p className="text-gray-300 font-light text-sm leading-relaxed">
                    Specializes in handcrafting bespoke AI architectures. Each solution is a unique masterpiece.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 flex items-center justify-center text-white font-light text-lg rounded-xl glow-effect">
                    MR
                  </div>
                </div>
                <div>
                  <h5 className="text-xl font-light text-white mb-1">Michael Rodriguez</h5>
                  <p className="text-cyan-400 font-light mb-2">Bespoke Solutions Architect</p>
                  <p className="text-gray-300 font-light text-sm leading-relaxed">
                    Designs custom AI solutions that perfectly fit each client's unique business requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;