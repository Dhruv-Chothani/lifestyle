'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: '10 Health Benefits of Fresh Juice',
      category: 'Health Tips',
      excerpt: 'Discover the amazing health benefits that fresh juices can bring to your daily routine.',
      image: '/images/blog-1.jpg',
      date: 'March 15, 2024',
    },
    {
      id: 2,
      title: 'Detox Your Body Naturally',
      category: 'Wellness',
      excerpt: 'Learn about natural detoxification methods and the best foods to include in your diet.',
      image: '/images/blog-3.jpg',
      date: 'March 12, 2024',
    },
    {
      id: 3,
      title: 'Energy Boosting Foods',
      category: 'Nutrition',
      excerpt: 'Find out which foods can give you sustained energy throughout the day.',
      image: '/images/blog-1.jpg',
      date: 'March 10, 2024',
    },
    {
      id: 4,
      title: 'Weight Loss Success Stories',
      category: 'Success Stories',
      excerpt: 'Read inspiring stories from customers who transformed their bodies with our plans.',
      image: '/images/blog-2.jpg',
      date: 'March 8, 2024',
    },
    {
      id: 5,
      title: 'The Power of Antioxidants',
      category: 'Health Tips',
      excerpt: 'Understand why antioxidants are crucial for your health and where to find them.',
      image: '/images/blog-3.jpg',
      date: 'March 5, 2024',
    },
    {
      id: 6,
      title: 'Seasonal Juice Recipes',
      category: 'Recipes',
      excerpt: 'Try our favorite seasonal juice recipes that taste great and boost your health.',
      image: '/images/blog-1.jpg',
      date: 'March 1, 2024',
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
      <main className="flex-1 py-12 sm:py-16 md:py-24 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
              Health & Wellness Blog
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Tips, recipes, and inspiration for a healthier lifestyle
            </p>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {articles.map((article) => (
              <motion.article
                key={article.id}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
                whileHover={{ y: -8 }}
              >
                {/* Article Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <span className="bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{article.date}</p>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer text-sm sm:text-base"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
