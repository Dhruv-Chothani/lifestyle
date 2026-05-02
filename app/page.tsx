'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { Benefits } from '@/components/sections/benefits'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { Testimonials } from '@/components/sections/testimonials'
import { CallToAction } from '@/components/sections/cta'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <FeaturedProducts />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
