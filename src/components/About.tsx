'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="container mx-auto px-6 relative py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, rgba(139, 92, 246, 0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating meaningful digital experiences that connect with people
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent relative shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-2xl"></div>

              <div className="w-full h-full flex items-center justify-center text-6xl text-muted-foreground relative z-10">
                <svg
                  className="w-32 h-32 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5C14.8 5.4 14.6 5.5 14.5 5.6L12 8.1L9.5 5.6C9.4 5.5 9.2 5.4 9 5.5L3 7V9L9 7.5V22H11V16H13V22H15V7.5L21 9Z"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a creative designer with over 3 years of experience in digital design,
              branding, and creative direction. My passion lies in crafting meaningful
              experiences that not only look beautiful but also serve a purpose.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in user-centered design, combining strategic thinking with
              artistic vision to create solutions that resonate with audiences and drive
              results for businesses.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
