'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subtext: 'Mon-Fri, 9 AM - 6 PM EST',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@naturefuel.com',
      subtext: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '123 Green Street',
      subtext: 'Nature City, NC 12345',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '9 AM - 6 PM EST',
      subtext: 'Monday to Friday',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Get In Touch
              </h1>
              <p className="text-base sm:text-lg md:text-xl opacity-90">
                We&apos;d love to hear from you. Send us a message!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white border-border text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white border-border text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={4}
                      className="w-full bg-white border-border resize-none text-sm"
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                  Contact Information
                </h2>

                <motion.div
                  className="space-y-4 sm:space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon
                    return (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-border"
                        whileHover={{ y: -4 }}
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="p-2 sm:p-3 bg-primary/10 rounded-full flex-shrink-0">
                            <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">
                              {info.title}
                            </h3>
                            <p className="text-sm sm:text-base text-foreground font-semibold break-words">
                              {info.content}
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              {info.subtext}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                  className="mt-6 sm:mt-8 bg-white p-6 rounded-2xl shadow-lg border border-border h-48 sm:h-64 flex items-center justify-center"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center px-4">
                    <MapPin className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-2" />
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Google Maps integration coming soon
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
