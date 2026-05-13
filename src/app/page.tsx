'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const skillsRow1 = [
  'Executive Leadership',
  'Artificial Intelligence',
  'Product Management',
  'Digital Transformation',
  'Strategic Partnerships',
  'Innovation',
  'Business Development',
  'Data & Analytics',
]

const skillsRow2 = [
  'Data & Analytics',
  'Innovation',
  'Strategic Partnerships',
  'Executive Leadership',
  'Business Development',
  'Product Management',
  'Digital Transformation',
  'Artificial Intelligence',
]

const companies = [
  {
    name: 'Eve',
    logo: '/images/logos/eve.png',
    url: 'https://www.helloeve.co/',
    width: 100,
    height: 40,
    className: 'h-10 w-auto',
  },
  {
    name: 'AI Collective',
    logo: '/images/logos/ai-collective.png',
    url: 'https://www.theaicollective.com/',
    width: 140,
    height: 48,
    className: 'h-10 w-auto',
  },
  {
    name: 'Disney',
    logo: '/images/logos/disney.png',
    url: 'https://www.disney.com/',
    width: 120,
    height: 40,
    className: 'h-10 w-auto',
  },
  {
    name: 'Yahoo!',
    logo: '/images/logos/yahoo.png',
    url: 'https://www.yahoo.com/',
    width: 120,
    height: 40,
    className: 'h-10 w-auto',
  },
  {
    name: 'Cytokinetics',
    logo: '/images/logos/cytokinetics.png',
    url: 'https://www.cytokinetics.com/',
    width: 140,
    height: 60,
    className: 'h-12 w-auto',
  },
  {
    name: 'Bristol Myers Squibb',
    logo: '/images/logos/bms.png',
    url: 'https://www.bms.com/',
    width: 160,
    height: 40,
    className: 'h-8 w-auto',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <Image
            src="/images/heroPM.jpg"
            alt="Mountain landscape with aurora"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/30 via-transparent to-cream" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-teal-accent mb-6"
              >
                <Sparkles size={16} />
                <span>AI Executive and Transformative Leader</span>
              </motion.div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                Paula<br />McMahon
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg drop-shadow">
                Transformative leader driving innovation in media, tech, science and AI.
                Based in New York City.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-navy-denim hover:bg-navy-denim/90 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Headshot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-last md:order-none mt-8 md:mt-0"
            >
              <div className="relative w-64 h-80 md:w-80 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-teal-accent/20 rounded-2xl transform rotate-3" />
                <Image
                  src="/images/HeroHeadsot.png"
                  alt="Paula McMahon"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              What I Do
            </h2>
            <p className="text-slate-dark/70 max-w-2xl mx-auto">
              Transformative leader and systems thinker building teams that turn vision into reality. Digital Native with experience spanning biotech to big tech to AI.
            </p>
          </motion.div>

          {/* Marquee Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="marquee-container space-y-4 overflow-hidden"
          >
            {/* Row 1 - scrolls left */}
            <div className="flex animate-marquee-left whitespace-nowrap">
              {[...skillsRow1, ...skillsRow1].map((skill, index) => (
                <span key={`r1-${index}`} className="inline-flex items-center mx-3 flex-shrink-0">
                  <span className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-slate-dark shadow-sm hover:shadow-lg hover:bg-sky-100 hover:text-sky-900 hover:font-semibold transition-all duration-300">
                    {skill}
                  </span>
                </span>
              ))}
            </div>

            {/* Row 2 - scrolls right */}
            <div className="flex animate-marquee-right whitespace-nowrap">
              {[...skillsRow2, ...skillsRow2].map((skill, index) => (
                <span key={`r2-${index}`} className="inline-flex items-center mx-3 flex-shrink-0">
                  <span className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-slate-dark shadow-sm hover:shadow-lg hover:bg-sky-100 hover:text-sky-900 hover:font-semibold transition-all duration-300">
                    {skill}
                  </span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/Path.png"
                alt="Abstract technology visualization"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark mb-6">
                An Unconventional Path
              </h2>
              <p className="text-slate-dark/70 mb-6">
                From automating drug discovery in Boulder to leading Disney+ partnerships in New York, my career has been defined by following curiosity and embracing transformation.
              </p>
              <p className="text-slate-dark/70 mb-8">
                Today, I'm leading partnerships and ecosystem at Eve, building community at The AI Collective, and advising on AI strategy.
              </p>

              {/* Company Logos */}
              <div className="space-y-6 mb-8">
                {[
                  companies.filter((c) => !['Cytokinetics', 'Bristol Myers Squibb'].includes(c.name)),
                  companies.filter((c) => ['Cytokinetics', 'Bristol Myers Squibb'].includes(c.name)),
                ].map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-wrap items-center gap-8">
                    {row.map((company, index) => (
                      <motion.a
                        key={company.name}
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -4 }}
                        className="opacity-80 hover:opacity-100 transition-all duration-300"
                        title={company.name}
                      >
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={company.width}
                          height={company.height}
                          className={`${company.className} object-contain`}
                        />
                      </motion.a>
                    ))}
                  </div>
                ))}
              </div>

              <Link
                href="/experience"
                className="inline-flex items-center gap-2 text-teal-accent hover:text-teal-light font-medium transition-colors"
              >
                View Full Experience
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fun Stuff Teaser */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              Stay Curious. Be Bold.
            </h2>
            <p className="text-slate-dark/70 max-w-2xl mx-auto">
              When I'm not building the future of tech, you'll find me on the slopes, vibe coding, making wine, or exploring the world.
            </p>
          </motion.div>

          {/* Preview Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Travel', image: '/images/travel/IMG_5762.jpg', href: '/fun-stuff/travel' },
              { title: 'Snowboarding', image: '/images/snowboarding/ski11.jpg', href: '/fun-stuff/snowboarding' },
              { title: 'Making Things', image: '/images/making-things/aqua2.jpg', href: '/fun-stuff/making-things' },
              { title: 'NYC', image: '/images/nyc/NYC1.jpg', href: '/fun-stuff/nyc' },
            ].map((item, index) => (
              <Link key={item.title} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white font-medium">
                    {item.title}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/fun-stuff"
              className="inline-flex items-center gap-2 text-teal-accent hover:text-teal-light font-medium transition-colors"
            >
              Explore More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              I'm always looking for new connections and exciting innovation.
              Whether you're building something new or transforming something established,
              let's connect.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-accent hover:bg-teal-light text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
