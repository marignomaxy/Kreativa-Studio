import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Contact, Showcase } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Navbar } from './components/Navbar';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Services } from './components/Services';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const progressBar = document.querySelector<HTMLElement>('.progress-bar');

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progressBar?.style.setProperty('--progress', progress.toString());
      setScrolled(window.scrollY > 70);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    document.querySelectorAll('.reveal').forEach((element) => {
      if (reduceMotion) {
        element.classList.add('is-visible');
      } else {
        observer.observe(element);
      }
    });

    onScroll();
    const scrollToHash = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        target?.scrollIntoView();
        target?.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
      }
    };

    window.setTimeout(scrollToHash, 300);
    window.setTimeout(scrollToHash, 900);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className="progress-bar" aria-hidden="true" />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Services />
        <Process />
        <Showcase />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
