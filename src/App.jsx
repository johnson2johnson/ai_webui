import { useEffect } from 'react';
import { gsap } from 'gsap';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins (ScrollTrigger will be registered in individual components)

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - 80; // Account for fixed header
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Cleanup function
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;