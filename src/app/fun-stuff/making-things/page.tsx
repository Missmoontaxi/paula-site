'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'

// Making Things photos - add your image filenames here
const photos = [
  { src: '/images/making-things/IMG_3569.jpg', caption: 'The Vineyard' },
  { src: '/images/making-things/IMG_3691.jpg', caption: 'Wine Fermenting' },
  { src: '/images/making-things/AA67C.jpg', caption: 'Cabernet on the Vine' },
  { src: '/images/making-things/D17D6.jpg', caption: 'Harvest Day' },
  { src: '/images/making-things/IMG_1851.jpg', caption: 'Chardonnay Harvest' },
  { src: '/images/making-things/IMG_1963.jpg', caption: 'Willamette Valley Vineyard' },
  { src: '/images/making-things/IMG_2306.jpg', caption: 'Cabernet Cluster' },
  { src: '/images/making-things/wine1.jpg', caption: 'Crush Day' },
  { src: '/images/making-things/wine2.jpg', caption: 'Canyon Vineyard' },
]

const projects = [
  {
    title: 'MemeMe',
    description: 'A vibecoded meme discovery app. Come on in and hang out for a bit!',
    url: 'https://www.welcometomemetown.com',
    tags: ['Vibecoding', 'AI', 'Fun'],
  },
]

export default function MakingThingsGallery() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/fun-stuff"
            className="inline-flex items-center gap-2 text-teal-accent hover:text-teal-light transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Back to Fun Stuff
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-dark mb-4">
              Making Things
            </h1>
            <p className="text-xl text-slate-dark/70 max-w-2xl">
              Winemaking, vibecoding, and creative pursuits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Winemaking Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-bold text-slate-dark mb-6">
            Winemaking
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.caption}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vibecoding Section */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-bold text-slate-dark mb-6">
            Vibecoding Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
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
    </>
  )
}
