'use client'

import { motion } from 'framer-motion'
import { Building2, Zap, FlaskConical, Users } from 'lucide-react'

const skillCategories = [
  {
    icon: Building2,
    title: 'Executive Leader',
    description: 'Transformative leader known for driving innovation to steer global business in media, tech, science and AI.',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-50',
  },
  {
    icon: Zap,
    title: 'Technology',
    description: 'Digital native career with global product portfolio, AI builder and advisor to engineers, investors and operators.',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
  },
  {
    icon: FlaskConical,
    title: 'Science',
    description: 'Pioneered bioinformatics and robotics to accelerate Research and Development in preclinical drug discovery.',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: Users,
    title: 'Partnerships',
    description: 'Expert at crafting strategic relationships to deliver innovative solutions propelled by the latest technology.',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50',
  },
]

const experience = [
  {
    company: 'The AI Collective',
    role: 'Head of Operations',
    description: 'Driving strategy and execution for integrated operations across the global AI Collective community and NYC Chapter, scaling the team while upholding the Collective\'s values in New York City\'s vibrant tech culture.',
    current: true,
  },
  {
    company: 'The Walt Disney Studios',
    role: 'Vice President, Disney+ Partnerships',
    description: 'Led Disney+ global partnerships and portfolio strategy by innovating with partners and digital platforms to grow global audiences for business growth and brand loyalty.',
  },
  {
    company: 'Walt Disney Imagineering',
    role: 'Vice President, Innovation',
    description: 'Created AI and digital experiences in white-space business through storytelling, technology and creativity.',
  },
  {
    company: 'Disney Interactive & Consumer Products',
    role: 'Vice President, Product',
    description: 'Transformed culture, scaled a global product portfolio and executed a unified media and content strategy.',
  },
  {
    company: 'Yahoo!',
    role: 'Sr. Director, Business Operations',
    description: 'Led product strategy, P&L and content operations for the world\'s largest digital news network.',
  },
  {
    company: 'Cytokinetics',
    role: 'Director of Product',
    description: 'Built software and hardware solutions to support R&D through predictive modeling and analytics.',
  },
  {
    company: 'Bristol Myers-Squibb',
    role: 'Systems Analyst',
    description: 'Analyst and solutions builder acting as a liaison between biological testing and novel chemical development.',
  },
]

export default function ExperiencePage() {
  return (
    <>
      {/* Skills Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-slate-dark mb-8 text-center">
              What I Bring
            </h2>

            {/* Skill Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-cream rounded-xl p-6"
                >
                  <div className={`w-12 h-12 ${category.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon size={24} className={category.iconColor} />
                  </div>
                  <h3 className="font-semibold text-slate-dark mb-2">{category.title}</h3>
                  <p className="text-sm text-slate-dark/70">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl font-bold text-slate-dark mb-12 text-center"
          >
            Work Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-teal-accent/20 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-teal-accent rounded-full transform -translate-x-1/2 mt-2 border-4 border-cream" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      {job.current && (
                        <span className="inline-block px-3 py-1 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded-full mb-3">
                          Current
                        </span>
                      )}
                      <h3 className="font-serif text-xl font-bold text-slate-dark mb-1">
                        {job.company}
                      </h3>
                      <p className="text-teal-accent font-medium mb-3">{job.role}</p>
                      <p className="text-slate-dark/70 text-sm">{job.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-white/70 mb-8">
              Interested in working together or learning more about my experience?
            </p>
            <a
              href="mailto:hello@paulamcmahon.com"
              className="inline-flex items-center gap-2 bg-teal-accent hover:bg-teal-light text-white px-8 py-4 rounded-lg transition-colors font-medium"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
