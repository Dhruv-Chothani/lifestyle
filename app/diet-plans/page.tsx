'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function DietPlansPage() {
  const plans = [
    {
      id: 1,
      name: 'Weight Loss Plan',
      description: 'Designed to help you shed pounds naturally',
      price: '$49.99/month',
      highlights: [
        'Customized meal plans',
        'Daily juice recommendations',
        'Progress tracking',
        'Weekly check-ins',
        'Nutrition guidance',
      ],
      weekly: [
        { day: 'Monday', breakfast: 'Green Detox Juice', lunch: 'Quinoa Salad', dinner: 'Grilled Vegetables' },
        { day: 'Tuesday', breakfast: 'Berry Smoothie', lunch: 'Chicken Wrap', dinner: 'Salmon & Rice' },
        { day: 'Wednesday', breakfast: 'Orange Juice', lunch: 'Vegetable Soup', dinner: 'Tofu Stir Fry' },
      ],
    },
    {
      id: 2,
      name: 'Muscle Gain Plan',
      description: 'Build muscle with protein-rich nutrition',
      price: '$59.99/month',
      highlights: [
        'High-protein meal plans',
        'Pre & post-workout juices',
        'Supplement recommendations',
        'Fitness integration',
        'Performance tracking',
      ],
      weekly: [
        { day: 'Monday', breakfast: 'Protein Shake', lunch: 'Chicken Breast', dinner: 'Lean Beef' },
        { day: 'Tuesday', breakfast: 'Egg Whites', lunch: 'Salmon', dinner: 'Turkey Burger' },
        { day: 'Wednesday', breakfast: 'Greek Yogurt', lunch: 'Tuna Salad', dinner: 'Grilled Chicken' },
      ],
    },
    {
      id: 3,
      name: 'Detox Plan',
      description: 'Cleanse your body naturally',
      price: '$39.99/month',
      highlights: [
        '7-day detox program',
        'Specialized juice blends',
        'Hydration guide',
        'Lifestyle tips',
        'Energy support',
      ],
      weekly: [
        { day: 'Day 1', breakfast: 'Lemon Cleanse', lunch: 'Vegetable Juice', dinner: 'Herbal Tea' },
        { day: 'Day 2', breakfast: 'Green Detox', lunch: 'Cucumber Juice', dinner: 'Ginger Tea' },
        { day: 'Day 3', breakfast: 'Beetroot Juice', lunch: 'Apple Cider', dinner: 'Turmeric Milk' },
      ],
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
      <main className="flex-1 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
              Personalized Diet Plans
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Choose a plan tailored to your health goals
            </p>
          </motion.div>

          {/* Plans Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Plan Header */}
                <div className="bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 text-primary-foreground">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{plan.name}</h3>
                  <p className="text-xs sm:text-sm opacity-90 mb-2 sm:mb-4">{plan.description}</p>
                  <p className="text-2xl sm:text-3xl font-bold">{plan.price}</p>
                </div>

                {/* Highlights */}
                <div className="p-6 sm:p-8">
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {plan.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <Check className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Weekly Preview */}
                  <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-t border-border">
                    <h4 className="font-bold text-sm sm:text-base text-foreground mb-3 sm:mb-4">Sample Weekly Plan</h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      {plan.weekly.slice(0, 2).map((day, idx) => (
                        <div key={idx} className="bg-muted p-2 sm:p-3 rounded-lg">
                          <p className="font-semibold text-foreground text-xs sm:text-sm">{day.day}</p>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {day.breakfast} • {day.lunch} • {day.dinner}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/contact">Get This Plan</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
