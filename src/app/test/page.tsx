"use client"

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {motion} from "framer-motion";
import { div } from "framer-motion/client"

const images = [
  "/patty.jpg",
  "/rum.jpg",
  "/albums-1.jpg",
  "/beer.jpg",
]

export default function ImageCarousel() {
  return (
    <motion.section className="relative bg-[#0b0b0b] relative  overflow-hidden" initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            // animate={{ y: [0, -4, 0] }}
transition={{
  duration: 1,
  // repeat: Infinity,
  ease: "easeInOut",
}}>
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto text-center mb-14"
      >
        <h2 className="text-3xl font-bold text-white">
          Photos & Gallery
        </h2>
        <p className="text-gray-400 mt-3">
          See the things you get at Opa
        </p>
      </motion.div>
      <Carousel
        opts={{ align: "start" }}
        className="relative mx-auto w-full max-w-6xl"
      >
        {/* Slides */}
        <CarouselContent className="ml-0 -mr-6">
          {images.map((src, index) => (
            
            <CarouselItem
              key={index}
              
              className="
                pl-4
                basis-[65%]
                md:basis-1/2
                lg:basis-1/3
              "
            >
              <Card className="overflow-hidden rounded-xl bg-black border border-white/10">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={src}
                    alt="Carousel image"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 85vw"
                    priority={index === 0}
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation – visible on mobile */}
        <CarouselPrevious
          className="
            absolute left-3 top-1/2 -translate-y-1/2
            h-9 w-9
            bg-black/70 text-white
            border border-white/20
            hover:border-yellow-400/40 hover:text-yellow-400
          "
        />
        <CarouselNext
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            h-9 w-9
            bg-black/70 text-white
            border border-white/20
            hover:border-yellow-400/40 hover:text-yellow-400
          "
        />
      </Carousel>
    </motion.section>
  )
}
