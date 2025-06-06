import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);

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

    // Form animation
    gsap.fromTo(formRef.current, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto px-8">
        {/* Section Header */}
        <div ref={titleRef} className="mb-24">
          <h2 className="text-2xl font-light text-white tracking-widest uppercase mb-4">
            Contact
          </h2>
          <div className="w-12 h-px bg-white"></div>
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="max-w-2xl mx-auto">
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 rounded-xl glass-dark glow-effect border border-cyan-400/50 bg-gradient-to-r from-cyan-900/30 to-emerald-900/30">
              <p className="text-white font-light">
                Thank you. We'll respond within 24 hours.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-400 tracking-wide uppercase mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:glow-effect transition-all duration-300 outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-400 tracking-wide uppercase mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:glow-effect transition-all duration-300 outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-light text-gray-400 tracking-wide uppercase mb-3">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:border-white transition-colors duration-300 outline-none"
                placeholder="Company name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light text-gray-400 tracking-wide uppercase mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:border-white transition-colors duration-300 outline-none resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary glow-effect"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-24 pt-16 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-sm font-light text-cyan-400 tracking-wide uppercase mb-2">Email</p>
                <a href="mailto:contact@aisolutions.com" className="text-white hover:text-cyan-400 transition-colors">
                  contact@aisolutions.com
                </a>
              </div>
              <div>
                <p className="text-sm font-light text-cyan-400 tracking-wide uppercase mb-2">Phone</p>
                <a href="tel:+15551234567" className="text-white hover:text-cyan-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;