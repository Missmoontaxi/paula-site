'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Radar, Library, Workflow, Globe } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const stats = [
  { n: '150M+', l: 'Disney+ subscribers across 100+ countries, from first New York hire' },
  { n: '$156M', l: 'P&L modernized at Yahoo, with roughly 120% revenue growth' },
  { n: '50+', l: 'partner portfolio built from zero at Disney+' },
  { n: '250K+', l: 'AI Collective members, scaled from 35K; NYC Chapter Lead' },
  { n: '12+', l: 'founder showcase events hosted across New York City' },
]

const systems = [
  {
    icon: Radar,
    title: 'Eve Events Radar',
    status: 'In production at Eve',
    description:
      'A Claude Code skill sources and scores the AI event landscape; a live radar app renders it for the Eve GTM team to plan field presence around.',
    href: 'https://github.com/Missmoontaxi/eve-radar',
    linkLabel: 'Code on GitHub',
  },
  {
    icon: Library,
    title: 'Eve Resource Center',
    status: 'Live on helloeve.co',
    description:
      'Partner-facing resource hub designed and built from scratch. Replaced a contracted web build with something shipped in-house in days.',
    href: 'https://www.helloeve.co/',
    linkLabel: 'Visit helloeve.co',
  },
  {
    icon: Workflow,
    title: 'GTM agent stack',
    status: 'In production at Eve, private',
    description:
      'Prospect research, competitor one-pagers, and pipeline automations shipped in Claude Code. Runs the partner motion every day.',
  },
  {
    icon: Globe,
    title: 'This site, and the Lab',
    status: 'Live',
    description:
      'paulamcmahon.com and moontaxilab.com: both designed, built, and deployed by me on Next.js, Tailwind, and Vercel. The lab notebook lives at the Lab.',
    href: 'https://github.com/Missmoontaxi',
    linkLabel: 'GitHub profile',
  },
]

const waves = [
  {
    label: 'The science years',
    text: 'Bioinformatics and robotics to automate preclinical drug discovery at Bristol Myers Squibb and Cytokinetics, before tech bio had a name.',
  },
  {
    label: 'The big company years',
    text: 'First New York hire on Disney+ Partnerships, scaled to 150M+ subscribers in 100+ countries with a partner portfolio built from zero to 50+. A $156M P&L modernized at Yahoo. Conversational AI shipped at Walt Disney Imagineering.',
  },
  {
    label: 'The builder years',
    text: 'Founding-team Partnerships & Ecosystem at Eve. The AI Collective scaled from 35K to 250K+ members, with the NYC chapter led from the front. Systems shipped in Claude Code, in production, on GitHub.',
  },
]

const rooms = [
  'The AI Collective, NYC Chapter Lead',
  'Chief, founding member',
  'Laconia Venture Cooperative, Venture Fellow',
  'SWITCH, angel group',
  'Next Play',
  'AI-Powered Women',
  'API Days, speaker',
  'FOST, event host',
  'NY Tech Week, Demo Night host',
]

export default function ProofPage() {
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
              Proof
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-dark leading-[1.1] tracking-tight mb-6">
              Receipts, not <span className="italic text-teal-accent">adjectives.</span>
            </h1>
            <p className="text-lg text-slate-dark/70 leading-relaxed max-w-2xl">
              Numbers from the enterprise years. Systems running in production today. Rooms that
              convene on a text. All of it verifiable, most of it linked.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ② THE NUMBERS */}
      <section className="bg-white border-t border-warm-gray py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.n}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-teal-accent mb-2">
                  {stat.n}
                </p>
                <p className="text-sm text-slate-dark/70 leading-snug">{stat.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ③ SYSTEMS IN PRODUCTION */}
      <section className="bg-cream border-t border-warm-gray py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-4">
              Shipped, not supervised
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark">
              Systems in <span className="italic text-teal-accent">production</span>
            </h2>
            <p className="text-slate-dark/70 mt-4 max-w-2xl leading-relaxed">
              Built hands-on in Claude Code, deployed, and in daily use. Not directed from a
              distance, and not demos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {systems.map((system, index) => (
              <motion.div
                key={system.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl border border-warm-gray bg-white p-7 transition-all duration-300 hover:border-teal-accent/40 hover:shadow-[0_8px_30px_-12px_rgba(26,95,90,0.25)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-accent/10 rounded-lg flex items-center justify-center group-hover:bg-teal-accent transition-colors duration-300">
                    <system.icon
                      size={24}
                      className="text-teal-accent group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <span className="px-3 py-1 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded-full">
                    {system.status}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-xl text-slate-dark mb-2">
                  {system.title}
                </h3>
                <p className="text-sm text-slate-dark/70 leading-relaxed mb-4">
                  {system.description}
                </p>
                {system.href && (
                  <a
                    href={system.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 text-sm font-medium text-teal-accent hover:text-teal-light transition-colors"
                  >
                    {system.linkLabel}
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ THREE WAVES */}
      <section className="bg-white border-t border-warm-gray py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-14 text-center">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-4">
              The pattern
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark">
              Three <span className="italic text-teal-accent">waves</span>
            </h2>
            <p className="text-slate-dark/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              The throughline is catching the wave early, three times.
            </p>
          </motion.div>

          <div className="space-y-8">
            {waves.map((wave, index) => (
              <motion.div
                key={wave.label}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-teal-accent/10 flex items-center justify-center font-serif font-bold text-teal-accent">
                    {index + 1}
                  </div>
                  {index < waves.length - 1 && (
                    <div className="w-px flex-1 bg-teal-accent/20 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-serif font-semibold text-xl text-slate-dark mb-2">
                    {wave.label}
                  </h3>
                  <p className="text-slate-dark/70 leading-relaxed">{wave.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeInUp}
            className="text-center font-serif text-xl md:text-2xl text-slate-dark mt-12 italic"
          >
            Same operator. Third wave. Best toolkit yet.
          </motion.p>
        </div>
      </section>

      {/* ⑤ ROOMS I RUN */}
      <section className="bg-cream border-t border-warm-gray py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10 text-center">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-4">
              Convening power
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark">
              Rooms I <span className="italic text-teal-accent">run</span>
            </h2>
            <p className="text-slate-dark/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              12+ founder showcase events, women-only operator panels, and workshops with the top
              AI platforms, all hosted in New York City. The communities below are active, not
              alumni lists.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-3">
            {rooms.map((room) => (
              <span
                key={room}
                className="px-4 py-2 rounded-full border border-warm-gray bg-white text-sm text-slate-dark/80"
              >
                {room}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
