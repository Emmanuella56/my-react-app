import ProjectOne from "../assets/men at work one.jpg";
import ProjectTwo from "../assets/men at work two.jpeg";
import ProjectThree from "../assets/men at work three.png";
import ProjectFour from "../assets/men at work four.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    projectImage: ProjectOne,
    title: "Residential Solar Installation",
    description: "Complete solar energy installation for modern homes.",
  },
  {
    projectImage: ProjectTwo,
    title: "Solar Maintainance",
    description: "Solar tools maintenaces for long term durability.",
  },
  {
    projectImage: ProjectThree,
    title: "Commercial Energy Solution",
    description: "Reliable renewable energy systems for business operations.",
  },
  {
    projectImage: ProjectFour,
    title: "Smart Energy Infrastructure",
    description: "Advanced smart power and storage systems for sustainability.",
  },
];

function Project() {
  return (
    <motion.div className="py-30 px-6  md:px-12 bg-gray-300">
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
            OUR PROJECTS
          </p>
          <h2 className="montserrat text-4xl md:text-5xl text-green-900">
            Featured Renewable Energy Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cls-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="overflow-hidden md:h-120 ">
                <img
                  src={project.projectImage}
                  alt={project.title}
                  className="w-full h-full ovject-cover group-hover:scale-110 transition-all duration-900"
                />
              </div>

              {/* title */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-lime-900 ">
                  {project.title}
                </h3>

                 {/* description */}
                 <p className="text-xl tracking-[1px] text-lime-800 ">
                  {project.description}
                </p>
              </div>

              
             
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
