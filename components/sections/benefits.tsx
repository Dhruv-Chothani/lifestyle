'use client'

import { motion } from 'framer-motion'
import { Zap, Leaf, Heart, Lightbulb } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Boost Energy',
      description: 'Natural ingredients to power your day with sustained energy',
    },
    {
      icon: Leaf,
      title: 'Detox Body',
      description: 'Cleanse and rejuvenate your system with organic formulas',
    },
    {
      icon: Heart,
      title: 'Improve Immunity',
      description: 'Strengthen your immune system naturally',
    },
    {
      icon: Lightbulb,
      title: 'Weight Management',
      description: 'Support your fitness goals with balanced nutrition',
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Why Choose NatureFuel?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Experience the power of natural ingredients designed for optimal health
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border"
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="mb-4 sm:mb-6 p-3 bg-primary/10 rounded-full w-fit"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
