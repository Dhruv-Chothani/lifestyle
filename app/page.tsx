import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}
