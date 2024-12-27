'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Stasis from '@/components/assets/stasis.jpg'

export default function Featured() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const images = [
    {
      src: Stasis.src,
      alt: "Turquoise wave resin art",
      title: "Ocean's Dance"
    },
    {
      src: Stasis.src,
      alt: "Crystal clear resin formation",
      title: "Crystal Flow"
    },
    {
      src: Stasis.src,
      alt: "Teal and gold resin piece",
      title: "Golden Tide"
    },
    {
      src: Stasis.src,
      alt: "Abstract resin pour",
      title: "Ethereal Current"
    }
  ]

  return (
    <section className="py-20 container mx-auto px-4 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-teal-900 mb-4">Featured Artworks</h2>
        <p className="text-teal-700 mb-12 text-lg">Each piece tells a unique story of color and movement</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <div className="relative aspect-square">
                <Image
                  src={selectedImage}
                  alt="Enlarged artwork"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  )
}

