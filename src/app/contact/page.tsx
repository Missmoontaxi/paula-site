'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Instagram, Linkedin, Twitter, MapPin } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@paulamcmahon.com',
    href: 'mailto:hello@paulamcmahon.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '415-713-5356',
    href: 'tel:+14157135356',
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
    href: 'https://instagram.com/paulamcmahon',
    username: '@paulamcmahon',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/paulamcmahon',
    username: 'Paula McMahon',
  },
  {
    icon: Twitter,
    label: 'X / Twitter',
    href: 'https://x.com/paulamcmahon',
    username: '@paulamcmahon',
  },
]

export default function ContactPage() {
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
              Connect
            </h1>
            <p className="text-xl text-slate-dark/70 max-w-2xl mx-auto">
              I'm always looking for new and exciting opportunities. Let's chat!
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-teal-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon size={28} className="text-teal-accent" />
                </div>
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
              Follow Along
            </h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-cream transition-colors"
                >
                  <div className="w-12 h-12 bg-slate-dark/5 group-hover:bg-teal-accent/10 rounded-full flex items-center justify-center transition-colors">
                    <social.icon size={24} className="text-slate-dark/60 group-hover:text-teal-accent transition-colors" />
                  </div>
                  <span className="text-sm text-slate-dark/70 group-hover:text-teal-accent transition-colors">
                    {social.username}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Whether you're building something new, transforming something established,
              or just want to connect about AI and technology—I'd love to hear from you.
            </p>
            <a
              href="mailto:hello@paulamcmahon.com"
              className="inline-flex items-center gap-2 bg-teal-accent hover:bg-teal-light text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
