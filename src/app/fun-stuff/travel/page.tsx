'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

// Travel photos - add your image filenames here
const photos = [
  { src: '/images/travel/IMG_5731.jpg', caption: 'Irish Coast' },
  { src: '/images/travel/IMG_5497.jpg', caption: 'Paris' },
  { src: '/images/travel/IMG_5631.jpg', caption: 'Dingle, Ireland' },
  { src: '/images/travel/IMG_5638.jpg', caption: 'Irish Pub' },
  { src: '/images/travel/IMG_5743.jpg', caption: 'Irish Countryside' },
  { src: '/images/travel/IMG_5755.jpg', caption: 'Sheep on the Hills' },
  { src: '/images/travel/IMG_5762.jpg', caption: 'Dingle Crystal' },
  { src: '/images/travel/IMG_5779.jpg', caption: 'Irish Coast' },
  { src: '/images/travel/IMG_5613.jpg', caption: 'Ireland' },
  { src: '/images/travel/IMG_6064.jpg', caption: 'Beach' },
  { src: '/images/travel/IMG_6084.jpg', caption: 'Colombia' },
  { src: '/images/travel/greece.jpg', caption: 'Santorini at Dusk' },
  { src: '/images/travel/IMG_6086.jpg', caption: 'Street Art' },
  { src: '/images/travel/IMG_6087.jpg', caption: 'Umbrella Street' },
  { src: '/images/travel/IMG_6091.jpg', caption: 'Colorful Street' },
  { src: '/images/travel/IMG_6094.jpg', caption: 'Colombia' },
  { src: '/images/travel/IMG_5457.jpg', caption: 'French Chateau' },
  { src: '/images/travel/IMG_5448.jpg', caption: 'Wine Tasting' },
  { src: '/images/travel/IMG_5935.jpg', caption: 'Waterfront' },
  { src: '/images/travel/IMG_5996.jpg', caption: 'Resort' },
  { src: '/images/travel/IMG_4607.jpg', caption: 'Sedona Sunset' },
  { src: '/images/travel/IMG_4617.jpg', caption: 'Sedona' },
  { src: '/images/travel/IMG_1340.jpg', caption: 'Sunset Beach' },
  { src: '/images/travel/IMG_4255.jpg', caption: 'Surfer at Sunset' },
]

export default function TravelGallery() {
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
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-4">
              Around the world
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-dark leading-[1.1] tracking-tight mb-4">
              Travel
            </h1>
            <p className="text-lg text-slate-dark/70 max-w-2xl leading-relaxed">
              Exploring the world one adventure at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 bg-white border-t border-warm-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
