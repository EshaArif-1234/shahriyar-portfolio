'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Lead Designer',
      company: 'ZaiyTech Solutions | Lahore, Pakistan',
      period: 'May 2025 – Present',
      description: 'Lead creative direction and oversee branding, UI/UX, and marketing campaigns across multiple international projects. Mentor a team of 5+ designers, improving workflow efficiency and timely delivery by 20%.',
      achievements: [
        'Develop brand systems and user-friendly digital experiences that improve client engagement and brand recognition',
        'Collaborate with developers and product managers to align design output with business objectives'
      ]
    },
    {
      title: 'Graphic Designer',
      company: 'Classic Programmers | Lahore, Pakistan',
      period: 'Aug 2023 – Jul 2025',
      description: 'Delivered complete branding packages including logos, style guides, and marketing assets for technology and corporate clients. Designed user-centric UI/UX assets for websites and mobile apps.',
      achievements: [
        'Produced digital campaigns, pitch decks, and print collateral ensuring strong brand consistency',
        'Partnered with marketing teams to convert business needs into creative visual solutions'
      ]
    },
    {
      title: 'Video Editor (Freelance)',
      company: 'Remote',
      period: 'Mar 2023 – Present',
      description: 'Produced engaging promotional and corporate videos for clients in Pakistan, UAE, and Bangladesh. Specialized in motion graphics, transitions, and professional editing.',
      achievements: [
        'Improved audience engagement and client satisfaction through creative storytelling',
        'Utilized After Effects, Premiere Pro, and CapCut for professional video production'
      ]
    },
    {
      title: 'Graphics Designer Intern / WordPress Developer',
      company: 'Premium Logics | Lahore, Pakistan',
      period: 'Feb 2021 – Jul 2022',
      description: 'Assisted senior designers in branding and digital product design. Built and updated responsive WordPress sites with SEO best practices.',
      achievements: [
        'Gained hands-on experience in interactive prototyping and modern design standards',
        'Contributed to responsive web development and SEO optimization'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A journey through creative leadership and innovative design
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-2 z-10"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
