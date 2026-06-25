import {
  FaSolarPanel,
  FaBolt,
  FaHome,
  FaBatteryHalf,
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaSolarPanel />,
    title: "Solar Installation",
    description:
      "Efficient solar energy systems for homes, businesses and industries.",
  },
  {
    icon: <FaBolt />,
    title: "Electrical Engineering",
    description:
      "Reliable electrical engineering solutions tailored to modern nees.",
  },
  {
    icon: <FaHome />,
    title: "Smart Home Solutions",
    description:
      "Advance automation systems for comfort, security and efficiency.",
  },
  {
    icon: <FaBatteryHalf />,
    title: "Energy Storage",
    description:
      "Battery and inverter systems designed for uninterrupted power supply.",
  },
  {
    icon: <FaLeaf />,
    title: "Renewable Energy Consulting",
    description:
      "Professional advisory services for sustainable energy development",
  },
];

function Service() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lime-500 font-semibold tracking-[0.2em] mb-4">OUR SERVICES</p>

          <h2 className="montserrat text-4xl md:text-5xl font-bold text-green-900">
            Innovative Renewable Energy Solutions{" "}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-lime-500"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="text-5xl text-lime-500 mb-6 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <div className="text-2xl font-bold text-green-900 mb-4">
                {service.title}
              </div>

              {/* Description*/}
              <div className="text-gray-600 leading-relaxed">
                {service.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
