'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Revolution',
      description: 'Complete redesign and development of a major e-commerce platform, focusing on user experience and conversion optimization.',
      image: '/api/placeholder/600/400',
      tags: ['UI/UX Design', 'React', 'Node.js', 'E-commerce'],
      featured: true,
      link: '#',
      github: '#'
    },
    {
      title: 'Brand Identity System',
      description: 'Comprehensive brand identity design for a fintech startup, including logo, guidelines, and marketing materials.',
      image: '/api/placeholder/600/400',
      tags: ['Branding', 'Logo Design', 'Print Design'],
      featured: true,
      link: '#',
      github: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'User-centered design for a mobile banking application with focus on security, accessibility, and intuitive navigation.',
      image: '/api/placeholder/600/400',
      tags: ['Mobile Design', 'Fintech', 'UI/UX', 'React Native'],
      featured: false,
      link: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Custom portfolio website with 3D animations and interactive elements showcasing creative work.',
      image: '/api/placeholder/600/400',
      tags: ['Web Design', 'Three.js', 'Next.js', 'Animation'],
      featured: false,
      link: '#',
      github: '#'
    },
    {
      title: 'Dashboard Design',
      description: 'Modern dashboard design for a SaaS platform with data visualization and user management features.',
      image: '/api/placeholder/600/400',
      tags: ['Dashboard', 'Data Viz', 'SaaS', 'UI Design'],
      featured: false,
      link: '#',
      github: '#'
    },
    {
      title: 'Marketing Campaign',
      description: 'Integrated digital marketing campaign including social media assets, email templates, and landing pages.',
      image: '/api/placeholder/600/400',
      tags: ['Digital Marketing', 'Social Media', 'Email Design'],
      featured: false,
      link: '#',
      github: '#'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A showcase of creative work that pushes boundaries and delivers results
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl text-muted-foreground">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        View Project →
                      </a>
                      <a
                        href={project.github}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent">
                    <div className="absolute inset-0 flex items-center justify-center text-3xl text-muted-foreground">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4">
                    <h4 className="font-bold text-foreground mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
