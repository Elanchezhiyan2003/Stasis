'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  interface Product {
    name: string
    price: string
    image: string
    description: string
    dimensions: string
    materials: string[]
  }

  const products: Product[] = [
    {
      name: "Azure Depths",
      price: "$499",
      image: "/placeholder.svg?height=600&width=600",
      description: "A mesmerizing piece capturing the depths of the ocean with swirling blues and teals",
      dimensions: "24\" x 24\"",
      materials: ["Epoxy resin", "Alcohol ink", "Metal pigments", "Canvas"]
    },
    {
      name: "Emerald Flow",
      price: "$599",
      image: "/placeholder.svg?height=600&width=600",
      description: "Rich emerald tones cascade through crystalline formations",
      dimensions: "30\" x 20\"",
      materials: ["Epoxy resin", "Mica powder", "Acrylic paint", "Wood panel"]
    },
    {
      name: "Coastal Dream",
      price: "$449",
      image: "/placeholder.svg?height=600&width=600",
      description: "Inspired by aerial views of tropical coastlines",
      dimensions: "20\" x 20\"",
      materials: ["Epoxy resin", "Metallic pigments", "Glass powder", "Canvas"]
    }
  ]

  return (
    <section className="py-20 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-teal-900 mb-4">Available Pieces</h2>
        <p className="text-teal-700 mb-12 text-lg">
          Each artwork is unique and carefully crafted
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-teal-900">{product.name}</h3>
                  <p className="text-teal-600 font-medium mt-2">{product.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-teal-900">
                    {selectedProduct.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="relative aspect-square">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-teal-700">{selectedProduct.description}</p>
                    <div>
                      <h4 className="font-semibold text-teal-900">Dimensions</h4>
                      <p className="text-teal-600">{selectedProduct.dimensions}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900">Materials</h4>
                      <ul className="list-disc list-inside text-teal-600">
                        {selectedProduct.materials.map((material, index) => (
                          <li key={index}>{material}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-2xl font-bold text-teal-900">{selectedProduct.price}</p>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Purchase Artwork
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  )
}

