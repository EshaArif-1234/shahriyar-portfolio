'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette,
  PenTool,
  Monitor,
  Layers,
  Camera,
  Video,
  Type,
  Zap,
  Smartphone,
  Edit3,
  Scissors,
  Image,
  PaintBucket,
  Brush,
  Film,
  Layout
} from 'lucide-react';
import { useState } from 'react';

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const allSkills = [
    {
      icon: Palette,
      name: 'Brand Strategy',
      color: 'text-blue-500'
    },
    {
      icon: PenTool,
      name: 'Creative Direction',
      color: 'text-purple-500'
    },
    {
      icon: Monitor,
      name: 'UI/UX Design',
      color: 'text-green-500'
    },
    {
      icon: PaintBucket,
      name: 'Photoshop',
      color: 'text-blue-600'
    },
    {
      icon: Brush,
      name: 'Illustrator',
      color: 'text-orange-500'
    },
    {
      icon: Film,
      name: 'After Effects',
      color: 'text-purple-600'
    },
    {
      icon: Camera,
      name: 'Premiere Pro',
      color: 'text-red-500'
    },
    {
      icon: Layout,
      name: 'Canva',
      color: 'text-cyan-500'
    },
    {
      icon: Scissors,
      name: 'CapCut Pro',
      color: 'text-teal-500'
    },
    {
      icon: Layers,
      name: 'Prototyping',
      color: 'text-orange-500'
    },
    {
      icon: Image,
      name: 'Adobe Creative Suite',
      color: 'text-red-500'
    },
    {
      icon: Video,
      name: 'Visual Storytelling',
      color: 'text-pink-500'
    },
    {
      icon: Video,
      name: 'Video Editing',
      color: 'text-indigo-500'
    },
    {
      icon: Type,
      name: 'Typography',
      color: 'text-yellow-500'
    },
    {
      icon: Smartphone,
      name: 'Mobile Design',
      color: 'text-teal-500'
    },
    {
      icon: Edit3,
      name: 'Content Creation',
      color: 'text-emerald-500'
    },
    {
      icon: Scissors,
      name: 'Motion Graphics',
      color: 'text-cyan-500'
    },
    {
      icon: Zap,
      name: 'Digital Marketing',
      color: 'text-amber-500'
    }
  ];

  const skillsPerSlide = 6;
  const totalSlides = Math.ceil(allSkills.length / skillsPerSlide);
  const currentSkills = allSkills.slice(
    currentSlide * skillsPerSlide,
    (currentSlide + 1) * skillsPerSlide
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {currentSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <div className={`p-4 rounded-full bg-muted group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                disabled={currentSlide === 0}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                disabled={currentSlide === totalSlides - 1}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Always Learning, Always Growing
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Design is an ever-evolving field, and I&apos;m committed to continuous learning.
              Currently exploring AI-assisted design tools, advanced animation techniques,
              and emerging web technologies to stay at the forefront of creative innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
