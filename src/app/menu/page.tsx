"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
interface MenuItem {
  name: string;
  price: string;
  desc?: string;
}
import { ArrowLeftIcon, Wine } from "lucide-react";
import { Footer } from "../page";
const MENU: Record<string, MenuItem[]> = {
  "Appetizers": [
    { name: "Falafel Appetizer", price: "$10.49", desc: "Ground fava beans, herbs, and spices blended and rolled in sesame seeds." },
    { name: "Fried Calamari", price: "$13.49", desc: "Tender squid, lightly handbreaded and served with our Texas sauce, roasted red peppers, and feta." },
    { name: "Fried Mushroom", price: "$10.49" },
    { name: "Spanakopita", price:"$11.49", desc: "Layers of phyllo dough filled with baby spinach, onions, feta, and herbs."},
    { name: "Saganaki Opa", price:"$12.99", desc: "The finest asiago cheese flambeed at your table, way to have a celebration!"},
    { name: "Fried Green Tomatoes", price:"$11.49",},
    { name: "Jalapenos Poppers", price:"$10.49", },
    { name: "Mac Cheese Bites", price:"$10.49", },
    { name: "Garlic Butter Mussels", price:"$14.99", desc: "One pound of mussels, steamed in garlic butter, white wine, topped with tomatoes and parsley."},
    { name: "Fried Shrimp", price:"$12.49", desc: "Lightly breaded tempura shrimp and served with housemade chili aioli sauce."},
    { name: "Fried Smelts", price:"$10.49", },
    
    // … more
  ],
  "Salads & Spreads": [
    { name: "Tzatziki", price: "$9.99", desc:"A creamy cucumbergarlic spread flavored with lemon, pepper, and dill." },
    { name: "Spinach Artichoke Dip", price: "$11.99" , desc:"Creamy artichoke and spinach dip with parmesan cheese and fried pita."},
    { name: "Garlic Hummus", price: "$9.49" , desc:"Chick peas, tahini, spices, blended with olive oil."},
    { name: "Avocado Hummus", price: "$10.49" , desc:"Chickpeas, tahini, spices, roasted red peppers blended with olive oil."},
    
    { name: "Spinach Feta", price: "$10.49" , desc:"Baby spinach, feta cheese, and spices."},
    { name: "Kopanisti", price: "$10.49" , desc:"Roasted red peppers, feta, spices."},
    {name: "Spread Sampler", price: "16.99", desc:"Choice of four different spreads."}
    // …
  ],
  "Entrées": [
    { name: "Gyro Platter", price: "$18.99" },
    { name: "Chicken Platter", price: "$18.99" },
    // …
  ],
  "Gyros": [
    { name: "Traditional Gyro", price: "$13.49" },
    { name: "Kopanisti Gyro", price: "$13.99" },
    // …
  ],
  "Sides": [
    { name: "Rice Pilaf", price: "$3.99" },
    { name: "Fresh Cut Fries", price: "$3.99" },
    // …
  ],
  "Kids & Desserts": [
    { name: "Jr. Chicken Tenders", price: "$5.99" },
    { name: "Baklava", price: "$5.99" },
    // …
  ],
  "Drinks (Draft & Beer)": [
    { name: "Bud Light", price: "$3.50" },
    { name: "Michelob Ultra", price: "$3.50" },
    { name: "White Claw", price: "$4.00" },
    // …
  ],
};

export default function MenuPage() {
  return (
    <section className=" bg-[#0a0a0a] text-white">
      <Button variant="default" size="icon" aria-label="Go Back" className="fixed relative m-4 p-4 bg-amber-400">
          <a href="/../"><ArrowLeftIcon color="black" radius={50} className="bg-amber-400" /></a>
          
          
        </Button>
      <div className="max-w-6xl mx-auto px-6">
        
        <h1 className="text-4xl font-bold text-center mb-12"><div className="justify-center items-center flex flex-row">Our Menu<Wine color="#FFC107"/></div></h1>

        {Object.entries(MENU).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold border-b border-amber-400 pb-2 mb-6">
              {category}
            </h2>

            <div className="grid md:grid-cols-1 gap-8 md:m-8 ">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex justify-between items-start transition-transform duration-300 ease-out 
                hover:scale-[1.03]"
                >
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    {item.desc && (
                      <p className="text-sm text-white/70">{item.desc}</p>
                    )}
                  </div>
                  <span className="text-amber-400 font-semibold">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>
      <Footer/>
    </section>
  );
}
