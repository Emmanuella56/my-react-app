import { motion } from "framer-motion";
import AboutImage from "../assets/solar worker.jpg";

function About() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image side */}
        <motion.div
          className="flex-1 relative overflow-hidden rounded-2xl "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={AboutImage}
            alt="Solar Engineers"
            className="hover:scale-110 transition-all duration-700 shadow-xl h-full w-full object-cover"
          />

          {/* Floating Experience Card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded -xl px-6 py-4">
            <h3 className="text-3xl font-bold text-lime-600">18+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="flex-1 "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lime-600 font-semibold mb-3">ABOUT LORDGATE</p>
          <h2 className="montserat my-3 md:tracking-[3.5px] text-2xl md:text-4xl md:text-5xl font-bold text-green-900 ">
            Powering With Sustainable Energy Solutions
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed text-justify my-2">
            Lordgate Projects Nig. Ltd is a Nigerian renewable energy
            engineering, procurement and construction company delivering
            innovative and sustainable energy solutions across Nigeria.
          </p>

          <p className="text-lg text-justify text-gray-600 leading-relaxed my-2 mb-8">
            We specialize in solar installations, smart energy systems,
            electrical engineering and renewable energy consulting tailored to
            homes, businesses and industries.
          </p>

          {/* <p className="text-xl text-justify my-2">
            Lordgate Projects Nig. Ltd is a Nigerian renewable energy
            engineering, procurement and construction (EPC) company delivering
            innovative and sustainable energy solutions for homes, businesses
            and industries across Nigeria. We specialize in solar power systems,
            smart energy solutions, electrical engineering, energy storage
            systems and renewable energy consulting. From off-grid and on-grid
            installations to energy optimization projects, we provide reliable
            solutions tailored to modern energy demands. With operational
            presence across multiple states in Nigeria, Lordgate is committed to
            driving Africa’s clean energy transition through innovation,
            efficiency and customer-focused engineering services.
          </p> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl py-6 shadow-2xl hover:scale-105   transition-all duration-500">
              <h3 className="font-bold text-2xl px-2 text-green-900">
                Our Mission
              </h3>

              <p className="text-xl text-gray-600 px-2 ">
                Deliver innovative and sustainable energy solutions that create
                long-term value.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl py-6 shadow-2xl hover:scale-105  transition-all duration-500">
              <h3 className="font-bold text-2xl  text-green-900 px-2">Our Vision</h3>

              <p className="text-xl text-gray-600 px-2 ">
                Become a leading renewable energy company across Africa.
              </p>
            </div>
          </div>

          <button className="group relative my-6 bg-lime-500 text-white px-8 py-2 rounded-lg overflow-hidden hover:scale-95 duration-600 ">
            <span className="absolute w-0 top-0 h-full left-0 bg-black/20 transition-all duration-300 group-hover:w-full "></span>
            <span className="relative">Learn More</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
