'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Calendar, Github, Instagram, Linkedin, Twitter, MapPin } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@paulamcmahon.com',
    href: 'mailto:hello@paulamcmahon.com',
  },
  {
    icon: Calendar,
    label: 'Book time',
    value: 'Schedule 30 min',
    href: 'https://calendly.com/hello-paulamcmahon/30min',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New York City',
    href: null,
  },
]

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/moontaxi?igsh=dTJ3dGpmem5zNm02&utm_source=qr',
    username: '@moontaxi',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/paulamcmahon/',
    username: 'Paula McMahon',
  },
  {
    icon: Twitter,
    label: 'X / Twitter',
    href: 'https://x.com/missmoontaxi?s=21&t=7AB5d2wTLsrs1UcZNFw65w',
    username: '@missmoontaxi',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Missmoontaxi',
    username: '@Missmoontaxi',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero with Animated Gradient */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-teal-accent/5 to-cream" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(26, 95, 90, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(26, 95, 90, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(26, 95, 90, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(26, 95, 90, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-accent mb-5">
              Get in touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-dark leading-[1.1] tracking-tight mb-5">
              Let&apos;s <span className="italic text-teal-accent">connect.</span>
            </h1>
            <p className="text-lg text-slate-dark/70 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always looking for new connections and exciting projects. Reach out!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center p-6 rounded-2xl bg-white border border-warm-gray hover:border-teal-accent/40 hover:bg-gradient-to-b hover:from-teal-accent/5 hover:to-transparent hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <motion.div
                  className="w-16 h-16 bg-teal-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <method.icon size={28} className="text-teal-accent" />
                </motion.div>
                <h3 className="font-medium text-slate-dark mb-2">{method.label}</h3>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-teal-accent hover:text-teal-light transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className="text-slate-dark/70">{method.value}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-serif text-2xl font-bold text-slate-dark mb-8">
              Follow along
            </h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-cream transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-teal-accent/10 group-hover:bg-teal-accent rounded-full flex items-center justify-center transition-colors"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{
                      scale: { type: 'spring', stiffness: 400, damping: 17 },
                      rotate: { duration: 0.5 }
                    }}
                  >
                    <social.icon size={24} className="text-teal-accent group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-sm text-slate-dark/70 group-hover:text-slate-dark transition-colors">
                    {social.username}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NYC Skyline Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/nyc/NYC7.jpg"
          alt="New York City skyline at night"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-slate-dark/50 to-transparent" />
        <motion.div
          className="absolute inset-0 flex items-end justify-center pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center text-white">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MapPin size={32} className="mx-auto mb-2 text-teal-accent" />
            </motion.div>
            <p className="text-lg font-medium">Based in New York City</p>
            <p className="text-white/60 text-sm">The city that never sleeps</p>
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-slate-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Let&apos;s work <span className="italic text-teal-light">together.</span>
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re building something new, transforming something established,
              or just want to chat about AI or tacos, I&apos;d love to connect.
            </p>
            <a
              href="mailto:hello@paulamcmahon.com"
              className="inline-flex items-center gap-2 bg-teal-accent hover:bg-teal-light text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              <Mail size={20} />
              Send me an email
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
