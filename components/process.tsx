'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Stasis from '@/components/assets/stasis.jpg'

export default function Process() {
  const steps = [
    {
      title: "Design & Planning",
      description: "Every piece begins with careful color selection and composition planning",
      image: Stasis.src,
      details: [
        "Color palette selection",
        "Composition sketching",
        "Material calculations",
        "Surface preparation"
      ]
    },
    {
      title: "Resin Mixing",
      description: "Precise measurements and pigment mixing for the perfect consistency",
      image: Stasis.src,
      details: [
        "Temperature control",
        "Pigment mixing",
        "Resin catalyzation",
        "Tools preparation"
      ]
    },
    {
      title: "Pouring Technique",
      description: "Artistic pouring methods that create unique patterns and effects",
      image: Stasis.src,
      details: [
        "Layer planning",
        "Flow control",
        "Pattern creation",
        "Bubble management"
      ]
    },
    {
      title: "Curing & Finishing",
      description: "Careful monitoring and finishing touches for a perfect result",
      image: Stasis.src,
      details: [
        "Environment control",
        "Curing time",
        "Surface finishing",
        "Quality check"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-teal-900 mb-4">Our Process</h2>
          <p className="text-teal-700 mb-12 text-lg">
            Creating each piece is a journey of precision and artistry
          </p>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto">
              {steps.map((step, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="data-[state=active]:bg-teal-600 data-[state=active]:text-white px-4 py-3"
                >
                  {step.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {steps.map((step, index) => (
              <TabsContent key={index} value={index.toString()}>
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="relative aspect-video">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-teal-900 mb-4">{step.title}</h3>
                        <p className="text-teal-700 mb-6">{step.description}</p>
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-teal-600" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
