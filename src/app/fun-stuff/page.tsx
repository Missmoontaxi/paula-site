'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  { title: 'Travel', image: '/images/travel/IMG_5762.jpg', href: '/fun-stuff/travel' },
  { title: 'Snowboarding', image: '/images/snowboarding/ski11.jpg', href: '/fun-stuff/snowboarding' },
  { title: 'Making Things', image: '/images/making-things/IMG_3569.jpg', href: '/fun-stuff/making-things' },
  { title: 'NYC', image: '/images/nyc/NYC1.jpg', href: '/fun-stuff/nyc' },
]

export default function FunStuff() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-5">
              Off the clock
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-dark leading-[1.1] tracking-tight mb-5">
              Fun <span className="italic text-teal-accent">stuff</span>
            </h1>
            <p className="text-lg text-slate-dark/70 max-w-2xl leading-relaxed">
              Life beyond work for travel, snowboarding, winemaking, and city fun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 md:py-16 bg-white border-t border-warm-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Link key={category.title} href={category.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-warm-gray"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-6 left-6 text-white text-2xl font-serif font-bold">
                    {category.title}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}