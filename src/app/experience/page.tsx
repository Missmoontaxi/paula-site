'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Zap, FlaskConical, Users } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const skillCategories = [
  {
    icon: Building2,
    title: 'Executive Leader',
    description: 'Transformative leader known for driving innovation to steer global business in media, tech, science and AI.',
  },
  {
    icon: Zap,
    title: 'Technology',
    description: 'Digital native career with global product portfolio, AI builder and advisor to engineers, investors and operators.',
  },
  {
    icon: FlaskConical,
    title: 'Science',
    description: 'Pioneered bioinformatics and robotics to accelerate Research and Development in preclinical drug discovery.',
  },
  {
    icon: Users,
    title: 'Partnerships',
    description: 'Expert at crafting strategic relationships to deliver innovative solutions propelled by the latest technology.',
  },
]

const experience = [
  {
    company: 'Eve',
    role: 'Partnerships & Ecosystem',
    description: 'Building collaborative programs that create value for both our community and ecosystem partners. Focused on turning high-trust relationships into scalable growth opportunities.',
    current: true,
  },
  {
    company: 'The AI Collective',
    role: 'Head of Operations',
    description: "Driving strategy and execution for integrated operations across the global AI Collective community and NYC Chapter, scaling the team while upholding the Collective's values in New York City's vibrant tech culture.",
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
    description: "Led product strategy, P&L and content operations for the world's largest digital news network.",
  },
  {
    company: 'Cytokinetics',
    role: 'Director of Product',
    description: 'Built software and hardware solutions to support R&D through predictive modeling and analytics.',
  },
  {
    company: 'Bristol Myers Squibb',
    role: 'Systems Analyst',
    description: 'Analyst and solutions builder acting as a liaison between biological testing and novel chemical development.',
  },
]

export default function ExperiencePage() {
  return (
    <>
      {/* ① HERO */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-5">
              Experience
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-dark leading-[1.1] tracking-tight mb-6">
              Biotech to big tech to{' '}
              <span className="italic text-teal-accent">AI.</span>
            </h1>
            <p className="text-lg text-slate-dark/70 leading-relaxed max-w-2xl">
              A career of building, scaling, and transforming — across science, media,
              and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ② WHAT I BRING */}
      <section className="bg-white border-t border-warm-gray py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-4">
              Strengths
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark">
              What I <span className="italic text-teal-accent">bring</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl border border-warm-gray bg-white p-6 transition-all duration-300 hover:border-teal-accent/40 hover:shadow-[0_8px_30px_-12px_rgba(26,95,90,0.25)]"
              >
                <div className="w-12 h-12 bg-teal-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-accent transition-colors duration-300">
                  <category.icon size={24} className="text-teal-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-slate-dark mb-2">{category.title}</h3>
                <p className="text-sm text-slate-dark/70 leading-relaxed">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ③ WORK EXPERIENCE TIMELINE */}
      <section className="bg-cream border-t border-warm-gray py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-14 text-center">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-4">
              The track record
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark">
              Work <span className="italic text-teal-accent">experience</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-teal-accent/20 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-teal-accent rounded-full transform -translate-x-1/2 mt-2 border-4 border-cream" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <div className="bg-white rounded-xl p-6 border border-warm-gray shadow-sm transition-all duration-300 hover:border-teal-accent/40 hover:shadow-[0_8px_30px_-12px_rgba(26,95,90,0.25)]">
                      {job.current && (
                        <span className="inline-block px-3 py-1 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded-full mb-3">
                          Current
                        </span>
                      )}
                      <h3 className="font-serif text-xl font-bold text-slate-dark mb-1">
                        {job.company}
                      </h3>
                      <p className="text-teal-accent font-medium mb-3">{job.role}</p>
                      <p className="text-slate-dark/70 text-sm leading-relaxed">{job.description}</p>
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

      {/* ④ CTA */}
      <section className="bg-slate-dark text-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-light mb-4">
              What&apos;s next
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Let&apos;s <span className="italic text-teal-light">connect.</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-9 leading-relaxed">
              Interested in working together or learning more about my experience?
            </p>
            <a
              href="mailto:hello@paulamcmahon.com"
              className="inline-flex items-center gap-2 bg-teal-accent hover:bg-teal-light text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              Get in touch
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
