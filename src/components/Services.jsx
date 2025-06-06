import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Subtle fade-in animation
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      }
    );

    // Staggered item animations
    itemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            }
          }
        );
      }
    });
  }, []);


  const services = [
    {
      number: "01",
      title: "Consultation",
      description: "Deep-dive analysis to understand your unique requirements"
    },
    {
      number: "02", 
      title: "Custom Design",
      description: "Handcrafted AI architecture designed specifically for you"
    },
    {
      number: "03",
      title: "Bespoke Development",
      description: "One-of-a-kind AI solutions built from scratch to your specifications"
    },
    {
      number: "04",
      title: "Private Deployment",
      description: "Secure, on-premise installations that you fully control"
    },
    {
      number: "05",
      title: "Ongoing Partnership",
      description: "Continuous refinement and evolution of your bespoke AI"
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div ref={titleRef} className="mb-24">
          <h2 className="text-2xl font-light text-white tracking-widest uppercase mb-4">
            Bespoke Services
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="border-b border-gray-700 py-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-baseline space-x-12">
                  <span className="text-sm font-light text-cyan-400 tracking-wider">
                    {service.number}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <div className="hidden md:block max-w-md">
                  <p className="text-gray-300 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              {/* Mobile description */}
              <div className="md:hidden mt-4 ml-20">
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;