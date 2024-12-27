'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Stasis from '@/components/assets/stasis.jpg'

export default function Testimonials() {
  const testimonials = [
    {
      text: "The resin artwork I received is absolutely stunning. The way it captures light and creates depth is beyond my expectations.",
      author: "Emma W.",
      location: "New York, NY",
      rating: 5,
      image: Stasis
    },
    {
      text: "A true masterpiece that has become the focal point of my living room. The craftsmanship is exceptional.",
      author: "James L.",
      location: "Los Angeles, CA",
      rating: 5,
      image: Stasis
    },
    {
      text: "The colors and patterns in my piece are mesmerizing. I find myself getting lost in its details every day.",
      author: "Sophie M.",
      location: "London, UK",
      rating: 5,
      image: Stasis
    }
  ]

  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-teal-900 mb-4 text-center">
            Client Testimonials
          </h2>
          <p className="text-teal-700 mb-12 text-lg text-center max-w-2xl mx-auto">
            Hear what our collectors say about their pieces
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-teal-700 italic flex-grow">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium text-teal-900">{testimonial.author}</p>
                        <p className="text-sm text-teal-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

