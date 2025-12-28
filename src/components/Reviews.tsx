"use client";
import reviews from "../../reviews.json";
import { motion } from "framer-motion";

function Stars({ count }: any) {
  return (
    <div className="flex gap-1 text-yellow-400 text-sm">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.18),transparent_105%)]  py-20 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h2 className="text-3xl font-bold text-white">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 mt-3">
          Hear from builders who ship faster with us.
        </p>
      </motion.div>

      {/* Reviews grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            // animate={{ y: [0, -4, 0] }}
transition={{
  duration: 1,
  // repeat: Infinity,
  ease: "easeInOut",
}}
            className="
              bg-[black]
              border border-[#23232E]
              rounded-xl p-6
              shadow-lg
              hover:border-yellow-400/30
              transition-colors
            "
          >
            {/* Stars */}
            <Stars count={review.rating} />

            {/* Review text */}
            <p className="text-gray-200 mt-4 text-sm leading-relaxed">
              {review.text}
            </p>

            {/* User */}
            <div className="flex items-center gap-3 mt-6">
              <img
                src="/avatar.png"
                alt="User avatar"
                className="w-10 h-10 rounded-full bg-white/5"
              />
              <div>
                <p className="text-white font-medium text-sm">
                  {review.name}
                </p>
                <p className="text-gray-400 text-xs">
                  {review.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
