'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Services': [
      'Brand Identity',
      'UI/UX Design',
      'Web Design',
      'Mobile Design',
      'Art Direction'
    ],
    'Company': [
      'About',
      'Blog',
      'Careers',
      'Contact',
      'Privacy Policy'
    ],
    'Connect': [
      'LinkedIn',
      'Dribbble',
      'Behance',
      'Twitter',
      'Instagram'
    ]
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Darphic
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating extraordinary digital experiences through innovative design and creative vision.
                </p>
              </div>

              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', href: 'https://linkedin.com/in/darphicdesigner' },
                  { name: 'Dribbble', href: 'https://dribbble.com/darphicdesigner' },
                  { name: 'Behance', href: 'https://behance.net/darphicdesigner' },
                  { name: 'Twitter', href: 'https://twitter.com/darphicdesigner' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="text-sm font-medium">{social.name[0]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-foreground mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Darphic Designer. All rights reserved.
            </p>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
