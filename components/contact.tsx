'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Contact() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail('')
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-teal-900 mb-4">Get in Touch</h2>
            <p className="text-teal-700 mb-8">
              Interested in commissioning a piece or have questions? We'd love to hear from you.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-teal-900">Name</label>
                  <Input className="mt-1" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-teal-900">Email</label>
                  <Input className="mt-1" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-teal-900">Message</label>
                <Textarea className="mt-1" placeholder="Tell us about your interest in resin art..." rows={4} />
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 w-full">
                Send Message
              </Button>
            </form>

            <div className="mt-12">
              <p className="font-medium text-teal-900 mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                <a href="https://www.instagram.com/stasis_artis" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
                </Button>
                <Button variant="outline" size="icon">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">Newsletter</h3>
            <p className="text-teal-700 mb-6">
              Subscribe to receive updates about new pieces, exhibitions, and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

