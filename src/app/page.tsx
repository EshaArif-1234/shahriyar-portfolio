'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('banner');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setActiveSection(sectionId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="relative">
        <section id="banner">
          <Banner onNavigate={scrollToSection} />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="experience" className="py-20 bg-muted/30">
          <Experience />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="projects" className="py-20 bg-muted/30">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
