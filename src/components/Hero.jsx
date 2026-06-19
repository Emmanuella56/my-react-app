import solarPanel from "../assets/solar panel.jpg";
import renewableEnergy from "../assets/renewable energy.jpg";
import solarPanelTwo from "../assets/solar panel two.jpg";
import energy from "../assets/energy.jpg";

import { motion } from "framer-motion";

const heroImages = [
  solarPanel,
  renewableEnergy,
  solarPanelTwo,
  energy,
  solarPanel,
  renewableEnergy,
  solarPanelTwo,
  energy,
];

function Hero() {
  return (
    <section className="overflow-hidden min-h-screen relative ">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        className="absolute inset-0 flex "
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {heroImages.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="Hero"
            className="w-screen  object-cover flex-shrink-0"
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-black/70 "></div>

      <div className="relative  z-10 min-h-screen flex items-center">
        <motion.div
          className="max-w-3xl px-6 md:px-12 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="ibm-plex-sans pt-25 text-lime-400 font-semibold mb-2">
            RENEWABLE ENERGY SOLUTIONS
          </p>
          <p className="montserrat text-5xl md:text-6xl font-bold text-white leading-tighter">
            Powering a<span className="text-lime-400"> Sustainable </span>{" "}
            Future
          </p>
          <p className="montserrat text-gray-200 text-lg mt-5">
            Solar installations, smart homes, electrical engineering, and energy
            storage solutions for homes and businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="group relative overflow-hidden border-2 border-lime-500  hover:border-lime-500/30 montserrat text-white hover:text-lime-600 px-8 py-4 rounded-lg  ">
              <span className=" absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500  group-hover:w-full "></span>
              <span className="relative z-10">Get a Quote</span>
            </button>

            <button className="group relative montserrat border-2 text-lime-500 border-white hover:border-white/30 hover:text-white px-8 py-4 rounded-lg font-semibold">
              <span className="absolute bg-lime-500 w-0 top-0 left-0 h-full transition-all duration-500 group-hover:w-full"></span>
              <span className="relative z-10"> Our Services</span>
            </button>
          </div>

          <div className="montserrat flex flex-wrap gap-8 my-12 text-white">
            <div>
              <h3 className="text-3xl font-bold text-lime-500">500+</h3>
              <p>Solar Installations</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-lime-500">18+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-lime-500">100%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </motion.div>

        
      </div>
     
      {/* <div className="relative z-10">
          <motion.div
            className="absolute top-0  left-1/2 -translate-x-1/2 text-white text-sm tracking-widest"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            SCROLL
          </motion.div>
        </div> */}
    </section>
  );
}

export default Hero;
