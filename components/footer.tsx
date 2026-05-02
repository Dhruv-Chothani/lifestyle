'use client'

import Link from 'next/link'
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/diet-plans', label: 'Diet Plans' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ]

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 sm:w-6 h-5 sm:h-6" />
              <h3 className="text-lg sm:text-xl font-bold">NatureFuel</h3>
            </div>
            <p className="text-xs sm:text-sm opacity-90">
              Fuel your body naturally with our premium organic juices and healthy lifestyle solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 text-xs sm:text-sm opacity-90">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm opacity-90">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@naturefuel.com</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm opacity-90">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Green Street, Nature City, NC 12345</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">Subscribe to Our Newsletter</h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/40 text-primary-foreground placeholder:text-white/50 text-sm"
                required
              />
              <Button
                type="submit"
                className="w-full bg-white text-primary hover:bg-white/90 text-sm"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6 sm:mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Copyright */}
          <p className="text-xs sm:text-sm opacity-90 order-2 sm:order-1">
            &copy; 2024 NatureFuel. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4 order-1 sm:order-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
