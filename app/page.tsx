'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function ProductsPage() {
  const [filter, setFilter] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Orange Boost Juice',
      category: 'energy',
      image: '/images/orange-juice.jpg',
      price: '$8.99',
      description: 'Rich in Vitamin C and natural energy boost',
    },
    {
      id: 2,
      name: 'Green Detox Juice',
      category: 'detox',
      image: '/images/green-detox.jpg',
      price: '$10.99',
      description: 'Complete body detoxification blend',
    },
    {
      id: 3,
      name: 'Berry Smoothie',
      category: 'weight-loss',
      image: '/images/berry-smoothie.jpg',
      price: '$9.99',
      description: 'Low-calorie superfood packed smoothie',
    },
    {
      id: 4,
      name: 'Tropical Mango Juice',
      category: 'energy',
      image: '/images/mango-juice.jpg',
      price: '$9.49',
      description: 'Natural tropical energy drink',
    },
    {
      id: 5,
      name: 'Spinach & Apple Juice',
      category: 'detox',
      image: '/images/cucumber-lime.jpg',
      price: '$10.49',
      description: 'Organic green detox cleanse',
    },
    {
      id: 6,
      name: 'Weight Loss Blend',
      category: 'weight-loss',
      image: '/images/watermelon-juice.jpg',
      price: '$11.99',
      description: 'Metabolism-boosting formula',
    },
  ]

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((p) => p.category === filter)

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'energy', label: 'Energy' },
    { id: 'detox', label: 'Detox' },
    { id: 'weight-loss', label: 'Weight Loss' },
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
      <main className="flex-1 py-12 sm:py-16 md:py-24 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
              Our Products
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Choose from our wide selection of premium juices and smoothies
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {filters.map((f) => (
              <motion.div
                key={f.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setFilter(f.id)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                    filter === f.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-white text-foreground border border-border hover:border-primary'
                  }`}
                >
                  {f.label}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product) => (
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
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    {product.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
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

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Add to Cart
                      </Button>
                    </motion.div>
                  </div>
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
