'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Stasis from '@/components/assets/stasis.jpg'
import Process from '@/components/process'

export default function Hero() {
  
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    const circles: Array<{ x: number; y: number; radius: number; color: string }> = []

    for (let i = 0; i < 100; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 50 + 20,
        color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 0.4)`
      })
    }

    const animate = () => {
      frame++
      ctx.clearRect(1, 1, canvas.width, canvas.height)

      circles.forEach((circle, i) => {
        circle.y += Math.sin(frame * 0.01 + i) * 0.5
        circle.x += Math.cos(frame * 0.01 + i) * 0.5

        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fillStyle = circle.color
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
    

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative mx-auto min-h-[100svh] overflow-hidden bg-gradient-to-t from-teal-100 to-white sm:from-teal-50">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 mx-auto"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-teal-800 mb-4 mt-60">
            Stasis Artis
              <span className="relative inline-block mt-2">
                <Image
                  src={Stasis}
                  className="relative size-7 object-cover bottom-5 rounded-full mt-2 hidden sm:block" 
                  priority
                  alt="Stasis Artist"
                  width={400}
                  height={400}
                />
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-teal-600 mb-8">
              Discover unique resin artworks that capture the essence of flowing water and natural phenomena.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg w-full sm:w-auto rounded-xl shadow-lg">
                Explore Collection
              </Button>
              <Button variant="outline" onClick={() => { Process()}} className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg w-full sm:w-auto rounded-xl shadow-lg">
                Our Process
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
