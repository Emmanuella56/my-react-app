import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

function Footer() {

    return(
        <footer className="bg-black text-white px-6 md:px-12 py-20"> 
            <div className="max-w-7xl mx-auto">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Company */}
                    <div>
                        <h2 className="montserrat text-3xl font-bold text-lime-500 mb-6">
                            LORDGATE
                        </h2>

                        <p className="text-gray-400 leading-relaxed">
                            Delivering innovative renewable energy, solar and engineering solutions for a sustainale future.
                        </p>
                    </div>

                    {/* Services */}

                    <div>
                        <h3 className="text-2xl font-semibold mb-6">
                            Services
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-lime-400 transition-all duration-300 ">Solar Installation</li>
                            <li className="hover:text-lime-400 transition-all duration-300 "> Electrical Engineering</li>
                            <li className="hover:text-lime-400 transition-all duration-300 ">Smart Homes</li>
                              <li className="hover:text-lime-400 transition-all duration-300 "> Energy Storage</li>
                        </ul>

                    </div>

                    {/* Quick Links */}

                    <div>
                        <h3 className="text-2xl font-semibold mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li className="hover:text-lime-400 transition-all duration-300 cursor-pointer">
                                Home
                            </li>
                             <li className="hover:text-lime-400 transition-all duration-300 cursor-pointer">
                                About
                            </li>
                             <li className="hover:text-lime-400 transition-all duration-300 cursor-pointer">
                                Services
                            </li>
                             <li className="hover:text-lime-400 transition-all duration-300 cursor-pointer">
                                Projects
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Contact</h3>

                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-lime-400" />
                            <p>+234 708 556 0726</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-lime-400" />
                            <p>info@lordgateenergy.com</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-lime-400 mt-1" />
                            <p>Owerri, Imo State, Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Divider */}
            <div className="border-t border-gray-800 my-12"></div>
            
            
            
            {/* Buttom */}

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-500 text-center">
                 &copy; 2025 Lordgate. All Rights Reserved.
                </p>

                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-lime-500 hover:border-lime-500 transition-all duration-300 cursor-pointer">
                        <FaFacebookF />
                    </div>

                    <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-lime-500 hover:border-lime-500 transition-all duration-300 cursor-pointer">
                        <FaInstagram />
                    </div>

                    <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-lime-500 hover:border-lime-500 transition-all duration-300 cursor-pointer">
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer