'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import React, { useState, useEffect } from 'react';

interface BannerProps {
  onNavigate: (sectionId: string) => void;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />

      {/* Floating geometric shapes */}
      <Float speed={1.4} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[-2, 0, 0]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.3}>
        <mesh position={[2, 1, -1]}>
          <icosahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </mesh>
      </Float>

      <Float speed={0.8} rotationIntensity={0.6} floatIntensity={0.7}>
        <mesh position={[0, -1.5, 1]}>
          <dodecahedronGeometry args={[0.3]} />
          <meshStandardMaterial color="#06b6d4" wireframe />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={0.4}>
        <mesh position={[-3, 1.5, -2]}>
          <tetrahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#f59e0b" wireframe />
        </mesh>
      </Float>

      <Float speed={0.9} rotationIntensity={0.7} floatIntensity={0.8}>
        <mesh position={[3, -0.5, 2]}>
          <coneGeometry args={[0.3, 0.8, 8]} />
          <meshStandardMaterial color="#10b981" wireframe />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={0.9} floatIntensity={0.6}>
        <mesh position={[-1, 2, 1]}>
          <torusGeometry args={[0.3, 0.1, 8, 16]} />
          <meshStandardMaterial color="#ef4444" wireframe />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={0.5} floatIntensity={0.9}>
        <mesh position={[1, -2.5, -1]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="#ec4899" wireframe />
        </mesh>
      </Float>

      <Float speed={0.7} rotationIntensity={1.1} floatIntensity={0.5}>
        <mesh position={[0, 2.5, -2]}>
          <torusKnotGeometry args={[0.3, 0.1, 64, 8]} />
          <meshStandardMaterial color="#6366f1" wireframe />
        </mesh>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />
    </>
  );
}

export default function Banner({ onNavigate }: BannerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {isClient && (
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Scene />
          </Canvas>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Mirza</span>
            <span className="text-foreground"> Shahriyar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-2">
            Graphic Designer
          </h2>
          <h3 className="text-lg md:text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Graphic Designer | Branding & Creative Strategy Expert | Helping Businesses Transform Ideas Into Visual Impact
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
