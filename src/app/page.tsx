'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const arc = [
  {
    num: '01',
    title: 'The Science Years',
    where: 'Boulder · San Francisco',
    body: 'Automated drug discovery. Built AI tools for biotech before anyone was calling it AI. Found out that if you make something work in a lab, it can work everywhere.',
  },
  {
    num: '02',
    title: 'The Big Company Years',
    where: 'Los Angeles · New York',
    body: "Scaled Yahoo Media's news network. Launched Disney+ to 150M+ subs. Built innovation programs at Imagineering. Learned how to make large, complicated systems move fast.",
  },
  {
    num: '03',
    title: 'The Builder Years',
    where: 'New York · Everywhere',
    body: 'Grew The AI Collective from 25K to 250K+. Now building partnerships and ecosystem at Eve and running Moontaxi Lab. Shipping things myself. Still riding the wave.',
  },
]

const companies = [
  { name: 'Eve', logo: '/images/logos/eve.png', url: 'https://www.helloeve.co/', className: 'h-8 w-auto' },
  { name: 'AI Collective', logo: '/images/logos/ai-collective.png', url: 'https://www.theaicollective.com/', className: 'h-8 w-auto' },
  { name: 'Disney', logo: '/images/logos/disney.png', url: 'https://www.disney.com/', className: 'h-8 w-auto' },
  { name: 'Yahoo!', logo: '/images/logos/yahoo.png', url: 'https://www.yahoo.com/', className: 'h-8 w-auto' },
  { name: 'Cytokinetics', logo: '/images/logos/cytokinetics-transparent.png', url: 'https://www.cytokinetics.com/', className: 'h-10 w-auto' },
  { name: 'Bristol Myers Squibb', logo: '/images/logos/bms.png', url: 'https://www.bms.com/', className: 'h-7 w-auto' },
]

const now = [
  {
    idx: '01',
    title: 'Eve, the Executive Voice Engine',
    href: 'https://www.helloeve.co',
    desc: 'Founding team operating leader at Eve, an AI-native company building the future of work for high-trust service businesses. Leading Partnerships & Ecosystem from New York after building foundational GTM, strategy, and resource systems.',
  },
  {
    idx: '02',
    title: 'Moontaxi Lab',
    href: 'https://www.moontaxilab.com',
    desc: "It's an AI-native operating studio where I work alongside builders and creators to experiment and with founders to shape growth strategies. A portfolio with a little mystery.",
  },
  {
    idx: '03',
    title: 'Teaching AI with friends',
    href: null,
    desc: 'Running upskilling sessions with AI curious in my network. Building agents, playbooks, and skills as code alongside people who are excited to learn and build.',
  },
]

const fun = [
  { title: 'Travel', image: '/images/travel/IMG_5762.jpg', href: '/fun-stuff/travel' },
  { title: 'Snowboarding', image: '/images/snowboarding/ski11.jpg', href: '/fun-stuff/snowboarding' },
  { title: 'Making Things', image: '/images/making-things/aqua2.jpg', href: '/fun-stuff/making-things' },
  { title: 'NYC', image: '/images/nyc/NYC1.jpg', href: '/fun-stuff/nyc' },
]

export default function Home() {
  return (
    <>
      {/* ① HERO — story-led */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="grid md:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-lg md:text-xl text-slate-dark/60 mb-6">
                Hi, I&apos;m Paula.
              </p>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-dark leading-[1.1] tracking-tight mb-6">
                The day after my last final,<br />
                I drove to{' '}
                <span className="italic text-teal-accent">the Rockies.</span>
              </h1>

              <p className="text-lg text-slate-dark/70 leading-relaxed max-w-xl mb-9">
                Everything since has been the same move. Show up somewhere exciting,
                learn fast and build something new.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-teal-accent hover:bg-teal-light text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  My story
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto w-72 md:w-full max-w-[360px]"
            >
              <div className="absolute inset-0 bg-teal-accent/15 rounded-2xl rotate-3" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-warm-gray">
                <Image
                  src="/images/HeroHeadsot.png"
                  alt="Paula McMahon"
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 360px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 flex items-center gap-1.5 bg-cream border border-warm-gray rounded-lg px-3 py-2 shadow-md text-sm text-slate-dark/70">
                <MapPin size={14} className="text-teal-accent" />
                New York City
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ② THE ARC */}
      <section className="bg-white border-t border-warm-gray">
        <div className="grid md:grid-cols-3">
          {arc.map((c, i) => (
            <motion.div
              key={c.num}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-warm-gray last:border-r-0 hover:bg-cream/50 transition-colors"
            >
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-dark/40 mb-2">
                {c.num}
              </p>
              <h3 className="font-serif text-2xl font-bold text-slate-dark mb-1">{c.title}</h3>
              <p className="text-sm text-teal-accent tracking-wide mb-4">{c.where}</p>
              <p className="text-sm text-slate-dark/70 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* logo band — quiet credibility */}
      <section className="bg-cream py-14 border-t border-warm-gray">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold tracking-[0.16em] uppercase text-slate-dark/40 mb-8">
            Along the way
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {companies.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                title={c.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ opacity: 1, scale: 1.06 }}
                className="opacity-70"
              >
                <Image src={c.logo} alt={c.name} width={140} height={48} className={`${c.className} object-contain`} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ③ RIGHT NOW */}
      <section className="bg-white py-20 md:py-24 border-t border-warm-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[260px_1fr] gap-10 md:gap-20 items-start">
            <motion.div {...fadeInUp}>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-4">
                Right now
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark leading-tight md:sticky md:top-28">
                What I&apos;m <span className="italic text-teal-accent">up to</span>
              </h2>
            </motion.div>

            <ul className="space-y-4">
              {now.map((row, i) => {
                const Card = row.href ? 'a' : 'div'
                const linkProps = row.href
                  ? { href: row.href, target: '_blank', rel: 'noopener noreferrer' }
                  : {}
                return (
                  <motion.li
                    key={row.idx}
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <Card
                      {...linkProps}
                      className="group relative flex gap-5 rounded-xl border border-warm-gray bg-white p-6 md:p-7 overflow-hidden transition-all duration-300 hover:border-teal-accent/40 hover:shadow-[0_8px_30px_-12px_rgba(26,95,90,0.25)]"
                    >
                      {/* teal accent bar */}
                      <span className="absolute left-0 top-0 h-full w-1 bg-teal-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

                      <span className="font-serif text-lg font-semibold text-teal-accent shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-teal-accent/10 group-hover:bg-teal-accent group-hover:text-white transition-colors duration-300">
                        {row.idx}
                      </span>

                      <div className="flex-1">
                        <p className="font-serif font-semibold text-lg text-slate-dark mb-1 flex items-center gap-1.5">
                          {row.title}
                          {row.href && (
                            <ArrowUpRight
                              size={17}
                              className="text-teal-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            />
                          )}
                        </p>
                        <p className="text-sm text-slate-dark/70 leading-relaxed">{row.desc}</p>
                      </div>
                    </Card>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ④ FUN STUFF */}
      <section className="bg-cream py-20 md:py-24 border-t border-warm-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-dark">
              Life, not just work.
            </h2>
            <Link href="/fun-stuff" className="inline-flex items-center gap-1.5 text-teal-accent hover:text-teal-light font-medium text-sm whitespace-nowrap">
              See everything
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fun.map((item, i) => (
              <Link key={item.title} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-warm-gray"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white font-medium">{item.title}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ CTA */}
      <section className="bg-slate-dark text-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Always looking for new connections<br className="hidden md:block" /> and{' '}
              <span className="italic text-teal-light">good ideas.</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-9 leading-relaxed">
              Whether you&apos;re building something new, transforming something established,
              or just have something interesting to say.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-accent hover:bg-teal-light text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Get in touch
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
