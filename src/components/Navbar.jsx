import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Lordgate_Logo from "../assets/Lordgate Logo.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed flex justify-between items-center bg-white hover:transition-all duration-400  px-6 md:px-8 py-1 m absolute left-0 top-0 w-full z-50 shadow-md">
        <div className="flex items-center gap-1  md:gap-4">
          <div className="w-10 md:w-18">
            <img src={Lordgate_Logo} alt="Lordgate Logo" className="w-full" />
          </div>

          <div className="flex flex-col items-center">
            <h1 className="montserrat flex items-center text-3xl tracking-[4.5px] md:text-5xl md:tracking-[6.5px] text-green-900 font-bold">
              LORDG
              <span className="relative md:mx-1">
                <span className="text-lime-500">A</span>
                {/* <span className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    w-12
                                    h-3
                                    bg-yellow-400
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    rotate-[-15deg]
                                    "/>    */}
                TE
              </span>
            </h1>

            <div className="flex items-center gap-1">
              <div className="w-5 md:w-7 h-[2px] bg-lime-500"></div>

              <p className="text-[9.5px] md:text-sm md:tracking-[0.1em] font-bold text-lime-500">
                SOLAR & ENERGY SOLUTIONS
              </p>

              <div className="w-5 md:w-7 h-[2px] bg-lime-500"></div>
            </div>
            <p className="text-[7px] tracking-[0.2em] md:text-[10px] md:tracking-[0.4em] font-bold text-gray-600">
              CLEAN ENERGY. RELIABLE FUTURE.
            </p>
          </div>
        </div>

        <ul className="hidden md:flex justify-around md:text-lg gap-10 p-4">
          <li className="cursor-pointer hover:text-green-800 transition-colors duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-green-800 transition-colors duration-300">
            About
          </li>
          <li className="cursor-pointer hover:text-green-800 transition-colors duration-300">
            Services
          </li>
          <li className="cursor-pointer hover:text-green-800 transition-colors duration-300">
            Projects
          </li>
          <li className="cursor-pointer hover:text-green-800 transition-colors duration-300">
            Contact
          </li>
        </ul>

        <button
          onClick={handleClick}
          className="md:hidden text-2xl text-green-900"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="md:hidden flex flex-col gap-4 bg-white shadow-lg pt-20 p-4">
            <li className="cursor-pointer p-4 border-b border-l border-r  border-gray-300 shadow-md  hover:border-lime-500  hover:text-green-900 hover:scale-102 transition-all duration-300">
              Home
            </li>
            <li className="cursor-pointer p-4 border-b border-l border-r  border-gray-300 shadow-md  hover:border-lime-500  hover:text-green-900 hover:scale-102 transition-all duration-300">
              About
            </li>
            <li className="cursor-pointer p-4 border-b border-l border-r  border-gray-300 shadow-md  hover:border-lime-500  hover:text-green-900 hover:scale-102 transition-all duration-300">
              Services
            </li>
            <li className="cursor-pointer p-4 border-b border-l border-r  border-gray-300 shadow-md  hover:border-lime-500  hover:text-green-900 hover:scale-102 transition-all duration-300">
              Projects
            </li>
            <li className="cursor-pointer p-4 border-b border-l border-r  border-gray-300 shadow-md  hover:border-lime-500  hover:text-green-900 hover:scale-102 transition-all duration-300">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
