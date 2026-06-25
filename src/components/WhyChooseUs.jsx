import {
  FaCheckCircle,
  FaUsers,
  FaTools,
  FaSolarPanel,
} from "react-icons/fa";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: <FaCheckCircle />,
    title: "Trusted Expertise",
    description:
      "Years of experience delivering reliable renewable energy solutions.",
  },

  {
    icon: <FaUsers />,
    title: "Customer Focused",
    description:
      "We prioritize customer satisfaction with tailored engineering services.",
  },

  {
    icon: <FaTools />,
    title: "Professional Engineering",
    description:
      "Skilled engineers delivering efficient and innovative energy systems.",
  },

  {
    icon: <FaSolarPanel />,
    title: "Sustainable Solutions",
    description:
      "Clean and sustainable energy technologies for long-term impact.",
  },
];


function WhyChooseUs() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="text-lime-600 font-semibold tracking-[0.2em] mb-4">
            WHY CHOOSE US
          </p>

          <h2
            className="
              montserrat
              text-4xl
              md:text-5xl
              font-bold
              text-green-900
            "
          >
            Reliable Renewable
            Energy Partner
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {reasons.map((reason, index) => (

            <motion.div
              key={index}
              className="
                flex
                gap-6
                p-8
                rounded-2xl
                bg-gray-50
                hover:bg-lime-600
                group
                transition-all
                duration-500
              "
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >

              {/* Icon */}
              <div
                className="
                  text-5xl
                  text-lime-500
                  group-hover:text-white
                  transition-all
                  duration-500
                "
              >
                {reason.icon}
              </div>

              {/* Text */}
              <div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-green-900
                    mb-3
                    group-hover:text-white
                    transition-all
                    duration-500
                  "
                >
                  {reason.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    leading-relaxed
                    group-hover:text-white
                    transition-all
                    duration-500
                  "
                >
                  {reason.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;