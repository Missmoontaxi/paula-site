'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, MapPin, Briefcase, Heart } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const highlights = [
  {
    icon: MapPin,
    title: 'Based in NYC',
    description: "Living and building in New York City's vibrant AI and tech scene",
  },
  {
    icon: Briefcase,
    title: 'Tech & Business Duality',
    description: 'From biotech startups to Fortune 50 media companies',
  },
  {
    icon: Heart,
    title: 'AI Enthusiast',
    description: 'Driving innovation and building community in AI',
  },
]

const cards = [
  {
    title: 'See the fun stuff',
    desc: 'Live curious. Stay bold. Check out my adventures in travel, snowboarding, and winemaking.',
    cta: 'Explore fun stuff',
    href: '/fun-stuff',
  },
  {
    title: 'See my experience',
    desc: 'Explore my career journey from biotech to Disney to building AI communities.',
    cta: 'View experience',
    href: '/experience',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ① HERO */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-teal-accent/10 rounded-3xl rotate-2" />
              <div className="relative grid grid-cols-2 gap-4">
                <motion.div
                  className="relative h-72 rounded-xl overflow-hidden border border-warm-gray shadow-lg"
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  whileTap={{ scale: 1.03, rotate: -1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/images/PMboard.png"
                    alt="Paula snowboarding"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative h-72 rounded-xl overflow-hidden mt-8 border border-warm-gray shadow-lg"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  whileTap={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/images/PMHeadshot.jpg"
                    alt="Paula headshot"
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-5">
                About
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-dark leading-[1.1] tracking-tight mb-5">
                Welcome
              </h1>
              <p className="text-lg text-slate-dark/70 leading-relaxed mb-3">
                Glad you came through.
              </p>
              <p className="text-slate-dark/60 leading-relaxed mb-9">
                This is my little corner of the digital universe, hang out as long
                as you&apos;d like.
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 cursor-default"
                  >
                    <motion.div
                      className="w-10 h-10 bg-teal-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.12, rotate: [0, -8, 8, 0] }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <item.icon size={20} className="text-teal-accent" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium text-slate-dark">{item.title}</h3>
                      <p className="text-sm text-slate-dark/60">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ② MY STORY */}
      <section className="bg-white border-t border-warm-gray py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-4">
              The long way around
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark leading-tight mb-10">
              My <span className="italic text-teal-accent">story</span>
            </h2>

            <div className="text-slate-dark/80 text-lg leading-relaxed space-y-6">
              <p>
                I am the youngest of five, grew up active in the Midwest playing sports and
                always looking for the next adventure. I was curious, loved science and studied
                pre-med in college. The day after my final, I packed what little I had and
                took my chances learning to snowboard in the Rocky Mountains. My first job
                was automating drug discovery research and building AI-enabled data analysis apps.
                I was immediately hooked and <strong className="text-slate-dark font-semibold">ALL IN on Tech.</strong>
              </p>

              <p>
                My journey led me along an unconventional path. Each twist and turn inspired
                by an opportunity to start something new. I&apos;ve always been drawn to the
                creativity in building from scratch and have grown to appreciate how messy
                transformation can be. The one common theme? <strong className="text-slate-dark font-semibold">Technology</strong>. From lab
                robotics to streaming to AI, I always find ways to ride the wave of innovation.
              </p>

              <p>
                I&apos;ve been lucky to have a career as a digital native and transformative leader
                for both startups and Fortune 50 companies in Boulder, San Francisco,
                Los Angeles and New York. My roles flowed from biotech to big tech to big
                entertainment and now I&apos;m shaping a community of like minded AI leaders
                and builders who share the same values and deep curiosities as I do.
              </p>

              <p>
                I am always seeking new connections, the latest AI innovation, and best examples
                of breakthrough technologies. Let&apos;s connect!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ③ LEADERSHIP */}
      <section className="bg-slate-dark text-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-light mb-4">
              How I lead
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              Leadership
            </h2>

            <p className="text-xl text-white/80 leading-relaxed mb-8">
              I am a powerhouse executive and AI leader with a background in product
              development, partnerships, and business operations. I am calm, relentlessly
              optimistic and a trusted advisor to the C-suite, founders, investors,
              boards, and fellow rock star builders.
            </p>

            <div className="inline-block bg-teal-accent/15 border border-teal-light/40 rounded-xl px-8 py-4">
              <p className="text-teal-light font-medium text-lg">
                Let&apos;s work together!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ④ CTA CARDS */}
      <section className="bg-cream py-20 md:py-24 border-t border-warm-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.href}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={card.href}
                  className="group relative flex flex-col h-full rounded-2xl border border-warm-gray bg-white p-8 overflow-hidden transition-all duration-300 hover:border-teal-accent/40 hover:shadow-[0_8px_30px_-12px_rgba(26,95,90,0.25)]"
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-teal-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                  <h3 className="font-serif text-2xl font-bold text-slate-dark mb-3 flex items-center gap-1.5">
                    {card.title}
                    <ArrowUpRight
                      size={20}
                      className="text-teal-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </h3>
                  <p className="text-slate-dark/70 leading-relaxed mb-6">{card.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-teal-accent group-hover:text-teal-light font-medium transition-colors">
                    {card.cta}
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
