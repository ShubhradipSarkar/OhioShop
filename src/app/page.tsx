"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Utensils, Wine } from "lucide-react";
import Reviews from "@/components/Reviews";
import { div } from "framer-motion/client";
// PREMIUM RESTAURANT WEBSITE – DESIGNED TO BE CLEARLY BETTER THAN res-menu TEMPLATE SITES
// Pages represented here as sections (split into routes easily)

export default function PremiumRestaurantSite() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
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
          Reserve
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
        <div className="absolute top-10 left-10 w-[40%] h-[45%] rotate-[-6deg] rounded-3xl overflow-hidden">
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
          <Button variant="outline" className="px-8 py-6 rounded-xl text-lg">
            Order Online
          </Button>
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
    {
      name: "Lamb Gyro Platter",
      desc: "Slow roasted, tzatziki, pita",
      price: "$26",
      img: "https://images.unsplash.com/photo-1604908554168-3d47d1cbb4f0",
    },
    {
      name: "Grilled Octopus",
      desc: "Charred lemon, olive oil",
      price: "$29",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947",
    },
    {
      name: "Spanakopita",
      desc: "Spinach, feta, flaky phyllo",
      price: "$18",
      img: "https://images.unsplash.com/photo-1625944525533-473f1a3b8b6b",
    },
    {
      name: "Moussaka",
      desc: "Eggplant, beef, béchamel",
      price: "$24",
      img: "https://images.unsplash.com/photo-1626078299844-45f38a3bcd08",
    },
  ];

  return (
    <section id="menu" className="py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-20">Featured Dishes</h3>

        <div className="grid md:grid-cols-2 gap-20 relative">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* Floating round image */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-16 -left-6 w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-amber-400"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Card */}
              {/* <Card className="bg-neutral-900 border border-white/10 rounded-3xl pt-24">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <span className="text-amber-400 font-bold">{item.price}</span>
                  </div>
                  <p className="text-white/60">{item.desc}</p>
                </CardContent>
              </Card> */}
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

function Footer() {
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
