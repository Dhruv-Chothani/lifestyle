'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Orange Boost Juice',
      image: '/images/orange-juice.jpg',
      price: '$8.99',
      description: 'Rich in Vitamin C and natural energy',
    },
    {
      id: 2,
      name: 'Green Detox Juice',
      image: '/images/green-detox.jpg',
      price: '$10.99',
      description: 'Cleanse and refresh your body naturally',
    },
    {
      id: 3,
      name: 'Berry Smoothie',
      image: '/images/berry-smoothie.jpg',
      price: '$9.99',
      description: 'Antioxidant-packed superfood blend',
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Featured Products
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Discover our most popular juices and smoothies
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
              whileHover={{ y: -8 }}
            >
              {/* Product Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                      Buy Now
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
