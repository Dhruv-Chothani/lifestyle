'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function AboutPage() {
  const team = [
    {
      id: 1,
      name: 'Sarah Green',
      role: 'Founder & CEO',
      bio: 'Passionate about organic nutrition and sustainable farming',
      image: '/images/team-1.jpg',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Nutritionist',
      bio: 'Expert in dietary science with 15+ years of experience',
      image: '/images/team-2.jpg',
    },
    {
      id: 3,
      name: 'Emma Johnson',
      role: 'Sustainability Officer',
      bio: 'Dedicated to environmentally friendly practices',
      image: '/images/team-3.jpg',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Mission
              </h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90">
                To empower people to take control of their health through natural, organic nutrition and sustainable practices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  NatureFuel was born from a passion for healthy living and a belief that nature provides everything we need to thrive. Founded in 2020, our journey began when our founder, Sarah Green, realized the impact of organic nutrition on personal wellness.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  What started as a small farmers&apos; market stand has grown into a thriving business, serving thousands of health-conscious customers across the region. Every product is crafted with care, using only the finest organic ingredients sourced from local farmers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we&apos;re committed to making healthy living accessible, affordable, and sustainable for everyone.
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden"
              >
                <Image
                  src="/images/about-hero.jpg"
                  alt="Organic farm with fresh produce"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-muted to-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: 'Organic Excellence',
                  description: 'We source only certified organic ingredients to ensure the highest quality.',
                },
                {
                  title: 'Sustainability',
                  description: 'Our farming practices are environmentally friendly and support local communities.',
                },
                {
                  title: 'Innovation',
                  description: 'We constantly develop new recipes and products based on nutritional science.',
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-border text-center"
                  whileHover={{ y: -8 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {team.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-muted to-background p-8 rounded-2xl shadow-lg border border-border text-center"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
