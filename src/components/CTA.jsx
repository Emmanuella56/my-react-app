import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-green-900 relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-lime-500/20 rounded-full blur-3xl -top-20 -right-40"></div>

      <div className="max-w-7xl mx-auto relative  text-center">
        <motion.p
          className="mb-4 tracking-[0.2em] text-lime-400 font-semibold "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          GET STARTED TODAY
        </motion.p>

        <motion.h2
          className="montserrat text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-[0.2em] text-lime-400 font-semibold "
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Ready To Power Your Future With Clean Energy? 
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-10 "
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          Partner with Lordgate for innovative solar, smart energy and
          engineering solutions designed for homes, businesses and industries.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          {/* Prinmary Button */}
          <button className="group relative overflow-hidden bg-lime-500 text-white px-8 py-4 rounded-lg font-semibold">
            <span
              className="absolute inset-0 bg-white translate-x-[-100%]
                    group-hover:translate-x-0 transition-all duration-500"
            ></span>
            <span className="relative z-10 group-hover:text-green-900 transition-all duration-500">
              Get a Quote
            </span>
          </button>

          {/* Secondary Button */}
          <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-all duration-500">
           Contact Us
            
          </button>
        </motion.div>
      </div>
    </section>

  );
}

export default CTA;
