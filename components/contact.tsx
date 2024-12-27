'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"



export default function Contact() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
              Interested in commissioning a piece or have questions? We&apos;d love to hear from you.
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
                <a
                  href="https://www.instagram.com/stasis_artis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-teal-200 hover:border-teal-500 hover:bg-teal-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>

                  </Button>
                </a>
                <a
                  href="https://www.facebook.com/stasisart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-teal-200 hover:border-teal-500 hover:bg-teal-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>

                  </Button>
                </a>
                <a
                  href="https://twitter.com/stasis_art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-teal-200 hover:border-teal-500 hover:bg-teal-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                  </Button>
                </a>
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
