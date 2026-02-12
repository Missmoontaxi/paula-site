'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Briefcase, Heart } from 'lucide-react'

const highlights = [
  {
    icon: MapPin,
    title: 'Based in NYC',
    description: 'Living and building in New York City\'s vibrant AI and tech scene',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50',
  },
  {
    icon: Briefcase,
    title: 'Tech & Business Duality',
    description: 'From biotech startups to Fortune 50 media companies',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-50',
  },
  {
    icon: Heart,
    title: 'AI Enthusiast',
    description: 'Driving innovation and building community in AI',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative h-72 rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.03, rotate: -1 }}
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
                  className="relative h-72 rounded-xl overflow-hidden mt-8"
                  whileHover={{ scale: 1.03, rotate: 1 }}
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
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-dark mb-6">
                Welcome
              </h1>
              <p className="text-xl text-slate-dark/70 mb-4">
                Glad you came through.
              </p>
              <p className="text-slate-dark/70 mb-8">
                This is my little corner of the digital universe, hang out as long
                as you'd like.
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
                      className={`w-10 h-10 ${item.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <item.icon size={20} className={item.iconColor} />
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

      {/* My Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark mb-8 text-center">
              My Story
            </h2>

            <div className="max-w-none text-slate-dark/80 text-center text-lg space-y-8">
              <p>
                I am the youngest of five, grew up active in the Midwest playing sports and
                always looking for the next adventure. I was curious, loved science and studied
                pre-med in college. The day after my final, I packed what little I had and
                took my chances learning to snowboard in the Rocky Mountains. My first job 
                was automating drug discovery research and building AI-enabled data analysis apps. 
                I was immediately hooked and <strong>ALL IN on Tech.</strong>
              </p>

              <p>
                My journey led me along an unconventional path. Each twist and turn inspired
                by an opportunity to start something new. I've always been drawn to the
                creativity in building from scratch and have grown to appreciate how messy
                transformation can be. The one common theme? <strong>Technology</strong>. From lab
                robotics to streaming to AI, I always find ways to ride the wave of innovation.
              </p>

              <p>
                I've been lucky to have a career as a digital native and transformative leader
                for both startups and Fortune 50 companies in Boulder, San Francisco,
                Los Angeles and New York. My roles flowed from biotech to big tech to big
                entertainment and now I'm shaping a community of like minded AI leaders
                and builders who share the same values and deep curiosities as I do.
              </p>

              <p>
                I am always seeking new connections, the latest AI innovation, and best examples
                of breakthrough technologies. Let's connect!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Statement */}
      <section className="py-20 bg-slate-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              Leadership
            </h2>

            <p className="text-xl text-white/80 mb-6">
              I am a powerhouse executive and AI leader with a background in product
              development, partnerships, and business operations. I am calm, relentlessly
              optimistic and trusted advisor to the C-suite, founcers, investors,
              boards, and fellow rock star builders.
            </p>

            <div className="inline-block bg-deep-yellow/20 border border-deep-yellow/40 rounded-xl px-8 py-4">
              <p className="text-deep-yellow font-medium text-lg">
                Let's work together!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="font-serif text-2xl font-bold text-slate-dark mb-4">
                See the Fun Stuff
              </h3>
              <p className="text-slate-dark/70 mb-6">
                Live Curious. Stay Bold. Check out my adventures in travel, snowboarding, and winemaking.
              </p>
              <Link
                href="/fun-stuff"
                className="inline-flex items-center gap-2 text-teal-accent hover:text-teal-light font-medium transition-colors"
              >
                Explore Fun Stuff
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="font-serif text-2xl font-bold text-slate-dark mb-4">
                See My Experience
              </h3>
              <p className="text-slate-dark/70 mb-6">
                Explore my career journey from biotech to Disney to building AI communities.
              </p>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 text-teal-accent hover:text-teal-light font-medium transition-colors"
              >
                View Experience
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
