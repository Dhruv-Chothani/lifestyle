'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/cta-banner.jpg"
        alt="Healthy lifestyle"
        fill
        className="object-cover absolute inset-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey to better health and energy today. Get your personalized diet plan now!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Link href="/diet-plans">Get Started Now</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
