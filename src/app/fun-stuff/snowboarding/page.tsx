'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

// Snowboarding photos - add your image filenames here
const photos = [
  { src: '/images/snowboarding/IMG_4293.jpg', caption: 'Ski Slopes' },
  { src: '/images/snowboarding/IMG_4161.jpg', caption: 'Grand Tetons' },
  { src: '/images/snowboarding/IMG_3591.jpg', caption: 'Teton Range' },
  { src: '/images/snowboarding/IMG_4187.jpg', caption: 'Snowy Trail' },
  { src: '/images/snowboarding/IMG_4100.jpg', caption: 'Winter Morning' },
  { src: '/images/snowboarding/IMG_4087.jpg', caption: 'Frosty Trees' },
]

export default function SnowboardingGallery() {
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
              To Ride is to Live
            </h1>
            <p className="text-xl text-slate-dark/70 max-w-2xl">
              Snowboarding adventures in the mountains
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
    </>
  )
}
