'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Plane, Mountain, Wine, Building2, ExternalLink } from 'lucide-react'

const categories = [
  {
    title: 'Travel',
    icon: Plane,
    description: 'Exploring the world one adventure at a time',
    image: '/images/IMG_5731.jpg',
    color: 'from-amber-500/80',
    href: '/fun-stuff/travel',
  },
  {
    title: 'To Ride is to Live',
    icon: Mountain,
    description: 'Snowboarding adventures in the mountains',
    image: '/images/IMG_4293.jpg',
    color: 'from-blue-500/80',
    href: '/fun-stuff/snowboarding',
  },
  {
    title: 'Making Things',
    icon: Wine,
    description: 'Winemaking, vibecoding, and creative pursuits',
    image: '/images/IMG_3569.jpg',
    color: 'from-purple-500/80',
    href: '/fun-stuff/making-things',
  },
  {
    title: 'NYC Pics',
    icon: Building2,
    description: 'Capturing the magic of New York City',
    image: '/images/NYC1.jpeg',
    color: 'from-orange-500/80',
    href: '/fun-stuff/nyc',
  },
]

const sideProjects = [
  {
    title: 'MemeMe',
    description: 'A vibecoded meme discovery app. Come on in and hang out for a bit!',
    url: 'https://www.welcometomemetown.com',
    tags: ['Vibecoding', 'AI', 'Fun'],
  },
]

export default function FunStuffPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-dark mb-6">
              Fun Stuff
            </h1>
            <p className="text-xl text-slate-dark/70 max-w-2xl mx-auto">
              Life is short. Get after it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Link key={category.title} href={category.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Background Image */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} to-transparent opacity-60 group-hover:opacity-70 transition-opacity`} />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                      <category.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Side Projects */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-slate-dark mb-4">
              Things I've Built
            </h2>
            <p className="text-slate-dark/70 max-w-2xl mx-auto">
              Side projects and experiments in vibecoding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sideProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-xl font-bold text-slate-dark group-hover:text-teal-accent transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={18} className="text-slate-dark/40 group-hover:text-teal-accent transition-colors" />
                </div>
                <p className="text-slate-dark/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-accent/10 text-teal-accent text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}

            {/* Add More Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-cream border-2 border-dashed border-slate-dark/20 rounded-xl p-6 flex items-center justify-center"
            >
              <p className="text-slate-dark/50 text-center">
                More projects coming soon...
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-slate-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="font-serif text-3xl md:text-4xl font-bold italic mb-6">
              "Life is short. Get after it."
            </blockquote>
            <p className="text-white/60">
              — My personal mantra
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
