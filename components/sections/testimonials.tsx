'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      content: 'NatureFuel has completely transformed my energy levels. I love the taste and feel amazing every day!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=60',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Health Coach',
      content: 'The quality of ingredients is exceptional. I recommend NatureFuel to all my clients.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=60',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Wellness Blogger',
      content: 'Finally a juice brand that actually cares about health. No sugar crashes, just pure energy!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=60',
      rating: 5,
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Join thousands of satisfied customers transforming their lives
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border"
              whileHover={{ y: -8 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 sm:w-5 h-4 sm:h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-sm sm:text-base text-foreground truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
