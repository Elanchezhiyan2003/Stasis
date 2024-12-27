import React from 'react'
import '@/styles/globals.css'
import '@/styles/tailwind.css'
import '@/styles/typography.css'
import '@/styles/variables.css'
import '@/styles/fonts.css'
import '@/styles/animation.css'
import '@/styles/typography.css'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Featured from '@/components/featured'
import Process from '@/components/process'
import Products from '@/components/products'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0f7f7] to-white">
      <Nav/>
      <Hero />
      <Featured />
      <Process />
      <Products />
      <Testimonials />
      <Contact />
    </main>
  )
}

