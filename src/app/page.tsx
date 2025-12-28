"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Utensils, Wine } from "lucide-react";
import Reviews from "@/components/Reviews";
import { div } from "framer-motion/client";
import ImageCarousel from "./test/page";
// PREMIUM RESTAURANT WEBSITE – DESIGNED TO BE CLEARLY BETTER THAN res-menu TEMPLATE SITES
// Pages represented here as sections (split into routes easily)

export default function PremiumRestaurantSite() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Highlights />
      <Menu />
      <Reviews_ />
      <Gallery />
      <Reservations />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-widest">OPA TAVERN</h1>
        <div className="hidden md:flex gap-6 text-sm uppercase tracking-wider">
          <a href="menu" className="hover:text-amber-400">Menu</a>
          <a href="#reviews" className="hover:text-amber-400">Reviews</a>
          <a href="#gallery" className="hover:text-amber-400">Gallery</a>
          <a href="#contact" className="hover:text-amber-400">Contact</a>
        </div>
        <Button className="bg-amber-400 text-black hover:bg-amber-500 rounded-full px-6">
          <a href="/menu">View Menu</a>
          
        </Button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">

      {/* Background collage */}
      <div className="absolute inset-0 -z-10">

        {/* Image 1 */}
        <div className="absolute top-10  left-10 w-[40%] h-[45%] rotate-[-6deg] rounded-3xl overflow-hidden">
          <Image
            src="/beer.jpg"
            alt="Craft beer"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image 2 */}
        <div className="absolute bottom-16 left-[30%] w-[35%] h-[40%] rotate-[4deg] rounded-3xl overflow-hidden">
          <Image
            src="/patty.jpg"
            alt="Dessert"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="absolute top-24 right-10 w-[35%] h-[50%] rotate-[8deg] rounded-3xl overflow-hidden">
          <Image
            src="/rum.jpg"
            alt="Whiskey bottle"
            fill
            className="object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6 max-w-4xl"
      >
        <h2 className="text-6xl md:text-7xl font-extrabold mb-6">
          Greek Soul. Modern Fire.
        </h2>

        <p className="text-lg text-white/80 mb-8">
          At OPA Grill & Tavern, Mediterranean and New American cuisines converge,
          creating a vibrant dining experience in Delaware, OH. Join us for bold
          flavors, a full bar, and a welcoming atmosphere.
        </p>

        <div className="flex gap-4 justify-center">
          <Button className="bg-amber-400 text-black px-8 py-6 rounded-xl text-lg">
            <a href="/menu">View Menu</a>
          </Button>
          <Button variant="outline" className="px-8 py-6 text-black rounded-xl text-lg">
            <a href="tel:+919876543210">Order Online</a>
            
          </Button>
        </div>
      </motion.div>
    </section>

  );
}

export function Highlights() {
  const features = [
    {
      icon: Utensils,
      title: "Authentic Recipes",
      text: "Traditional Greek flavors with a modern twist.",
    },
    {
      icon: Wine,
      title: "Crafted Cocktails",
      text: "Premium spirits & house infusions.",
    },
    {
      icon: Star,
      title: "Top Rated",
      text: "Loved by locals & travelers alike.",
    },
  ];

  return (
    <section className="relative bg-neutral-950 py-28 overflow-hidden">
      {/* subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(600px_at_50%_50%,rgba(245,158,11,0.12),transparent_90%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="
                group
                rounded-3xl
                bg-white/[0.03]
                backdrop-blur
                p-10
                border border-white/10
                shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
                hover:shadow-[0_20px_60px_-20px_rgba(245,158,11,0.25)]
                transition
              "
            >
              {/* Icon container */}
              <div className="
                mx-auto mb-6
                flex h-14 w-14 items-center justify-center
                rounded-full
                bg-amber-400/10
                text-amber-400
                group-hover:bg-amber-400/20
                transition
              ">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold tracking-wide text-white mb-3">
                {f.title}
              </h3>

              <p className="text-sm leading-relaxed text-white/60">
                {f.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
export function Menu() {
  const items = [
    {
      name: "Lamb Gyro Platter",
      desc: "Slow roasted, tzatziki, pita",
      price: "$26",
      img: "/albums-1.jpg",
    },
    {
      name: "Grilled Octopus",
      desc: "Charred lemon, olive oil",
      price: "$29",
      img: "/albums-2.jpg",
    },
    {
      name: "Spanakopita",
      desc: "Spinach, feta, flaky phyllo",
      price: "$18",
      img: "/albums-8.jpg",
    },
    {
      name: "Moussaka",
      desc: "Eggplant, beef, béchamel",
      price: "$24",
      img: "/patty.jpg",
    },
  ];

  return (
    <section id="menu" className="py-28 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-24">
          Featured Dishes
        </h3>

        <div className="grid gap-20 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* Card (anchor) */}
              <div className="relative bg-neutral-900 rounded-3xl border border-white/10 pt-28 px-8 pb-8">
                {/* Floating Image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -top-16
                    left-8
                    w-32 h-32
                    rounded-full
                    overflow-hidden
                    border-4 border-amber-400
                    shadow-2xl
                    bg-black
                  "
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-white">
                    {item.name}
                  </h4>
                  <span className="text-amber-400 font-bold">
                    {item.price}
                  </span>
                </div>

                <p className="text-white/60 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews_() {
  return (
    <div id="reviews"><Reviews /></div>
    
  );
}
function Reviews2() {
  return (
    <section id="reviews" className="py-28 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-14">What Guests Say</h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-neutral-900 p-10 rounded-3xl border border-white/10"
        >
          <p className="text-lg text-white/80 mb-6">
            “Hands down the best Greek food in town. Atmosphere, service, and cocktails are unreal.”
          </p>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="text-amber-400" />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  

  return (
    <section id="gallery" className="py-28">
      <ImageCarousel/>
    </section>
  );
}

function Reservations() {
  return (
    <section className="py-28 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-center">
      <h3 className="text-4xl font-bold mb-4">Reserve Your Table</h3>
      <p className="mb-8">Walk-ins welcome. Reservations recommended.</p>
      <a href="tel:+919876543210"><Button className="bg-black text-white px-10 py-6 rounded-xl text-lg hover:bg-neutral-900">
        Book Now
      </Button></a>
      
    </section>
  );
}

function Contact() {
  return (
    <></>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-20 pb-10 relative overflow-hidden">
  {/* subtle background accent */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.08),transparent_60%)]" />

  <div className="max-w-7xl mx-auto px-6">
    <div className="grid gap-12 md:grid-cols-3">

      {/* Brand */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          OPA Grill & Tavern
        </h2>
        <p className="text-sm leading-relaxed text-neutral-400">
          Mediterranean meets New American cuisine in the heart of Delaware, OH.
          Crafted dishes, vegetarian options, outdoor seating, and a full bar —
          perfect for lunch, dinner, and casual gatherings.
        </p>

        <ul className="mt-6 space-y-2 text-sm">
          <li>
            📍 18 S Sandusky St, Delaware, OH 43015
          </li>
          <li>
            ☎ <a href="tel:17403637283" className="hover:text-yellow-400 transition">
              (740) 363-7283
            </a>
          </li>
        </ul>
      </div>

      {/* Hours */}
      <div>
        <h3 className="text-lg font-semibold text-yellow-400 mb-4">
          Opening Hours
        </h3>

        <ul className="space-y-3 text-sm">
          {[
            ["Mon – Thu", "11:00 AM – 9:00 PM"],
            ["Friday", "11:00 AM – 11:00 PM"],
            ["Saturday", "11:00 AM – 11:00 PM"],
            ["Sunday", "Closed"],
          ].map(([day, time]) => (
            <li key={day} className="flex justify-between border-b border-neutral-800 pb-1">
              <span>{day}</span>
              <span className="text-neutral-400">{time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Other Menus */}
      <div>
        <h3 className="text-lg font-semibold text-yellow-400 mb-4">
          Other Menu Options
        </h3>

        <ul className="space-y-4 text-sm">
          {[
            ["Midway Mercantile Menu", "Midway, UT"],
            ["Tribeca Grill Menu", "New York, NY"],
            ["Jalapenos Menu", "Tustin, CA"],
            ["Cotton Calf Kitchen Menu", "Braselton, GA"],
            ["Ichiban Japanese Steakhouse", "Mobile, AL"],
          ].map(([name, location]) => (
            <li
              key={name}
              className="group cursor-pointer"
            >
              <p className="font-medium text-neutral-200 group-hover:text-yellow-400 transition">
                {name}
              </p>
              <p className="text-xs text-neutral-500">{location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Divider */}
    <div className="my-10 border-t border-neutral-800" />

    {/* Bottom bar */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
      <p>
        © {new Date().getFullYear()} OPA Grill & Tavern. All rights reserved.
      </p>

      <p className="flex items-center gap-2 hover:text-yellow-400 transition cursor-pointer">
        ✏️ Offer an edit
      </p>
    </div>
  </div>
</footer>

  );
}
