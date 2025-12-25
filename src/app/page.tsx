"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Utensils, Wine } from "lucide-react";

// PREMIUM RESTAURANT WEBSITE – DESIGNED TO BE CLEARLY BETTER THAN res-menu TEMPLATE SITES
// Pages represented here as sections (split into routes easily)

export default function PremiumRestaurantSite() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <Menu />
      <Reviews />
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
          <a href="#menu" className="hover:text-amber-400">Menu</a>
          <a href="#reviews" className="hover:text-amber-400">Reviews</a>
          <a href="#gallery" className="hover:text-amber-400">Gallery</a>
          <a href="#contact" className="hover:text-amber-400">Contact</a>
        </div>
        <Button className="bg-amber-400 text-black hover:bg-amber-500 rounded-full px-6">
          Reserve
        </Button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de')] bg-cover bg-center opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6 max-w-4xl"
      >
        <h2 className="text-6xl md:text-7xl font-extrabold mb-6">Greek Soul. Modern Fire.</h2>
        <p className="text-lg text-white/80 mb-8">
          Elevated Mediterranean tavern experience with handcrafted cocktails & bold flavors.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-amber-400 text-black px-8 py-6 rounded-xl text-lg">View Menu</Button>
          <Button variant="outline" className="px-8 py-6 rounded-xl text-lg">Order Online</Button>
        </div>
      </motion.div>
    </section>
  );
}

function Highlights() {
  const features = [
    { icon: <Utensils />, title: "Authentic Recipes", text: "Traditional Greek flavors with a modern twist." },
    { icon: <Wine />, title: "Crafted Cocktails", text: "Premium spirits & house infusions." },
    { icon: <Star />, title: "Top Rated", text: "Loved by locals & travelers alike." },
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-neutral-900 p-10 rounded-3xl border border-white/10 text-center"
          >
            <div className="text-amber-400 mb-4 mx-auto">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-white/60">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Menu() {
  const items = [
    { name: "Lamb Gyro Platter", desc: "Slow roasted, tzatziki, pita", price: "$26" },
    { name: "Grilled Octopus", desc: "Charred lemon, olive oil", price: "$29" },
    { name: "Spanakopita", desc: "Spinach, feta, flaky phyllo", price: "$18" },
    { name: "Moussaka", desc: "Eggplant, beef, béchamel", price: "$24" },
  ];

  return (
    <section id="menu" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-16">Featured Dishes</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, i) => (
            <Card key={i} className="bg-neutral-900 border border-white/10 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <span className="text-amber-400 font-bold">{item.price}</span>
                </div>
                <p className="text-white/60">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
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
  const imgs = [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1555992336-03a23c7b20b0",
    "https://images.unsplash.com/photo-1541544741938-0af808871cc0",
  ];

  return (
    <section id="gallery" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-16">Inside OPA</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {imgs.map((src, i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.05 }}
              src={src}
              className="rounded-3xl shadow-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Reservations() {
  return (
    <section className="py-28 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-center">
      <h3 className="text-4xl font-bold mb-4">Reserve Your Table</h3>
      <p className="mb-8">Walk-ins welcome. Reservations recommended.</p>
      <Button className="bg-black text-white px-10 py-6 rounded-xl text-lg hover:bg-neutral-900">
        Book Now
      </Button>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <MapPin className="mx-auto mb-3 text-amber-400" />
          <p>Chicago, IL</p>
        </div>
        <div>
          <Phone className="mx-auto mb-3 text-amber-400" />
          <p>(312) 555‑0142</p>
        </div>
        <div>
          <Clock className="mx-auto mb-3 text-amber-400" />
          <p>Mon–Sun · 4PM – 12AM</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center text-white/40 text-sm">
      © 2025 OPA Tavern · Crafted with passion
    </footer>
  );
}
