import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  { href: 'https://www.instagram.com/moontaxi?igsh=dTJ3dGpmem5zNm02&utm_source=qr', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/paulamcmahon/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/missmoontaxi?s=21&t=7AB5d2wTLsrs1UcZNFw65w', icon: Twitter, label: 'X / Twitter' },
  { href: 'https://github.com/Missmoontaxi', icon: Github, label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold">Paula McMahon</h3>
            <p className="text-white/60 text-sm mt-1">
              AI Leader & Transformative Executive
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-teal-light transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <a
              href="mailto:hello@paulamcmahon.com"
              className="text-teal-light hover:text-white transition-colors"
            >
              hello@paulamcmahon.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Paula McMahon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
