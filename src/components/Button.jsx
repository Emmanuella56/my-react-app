import { motion } from "framer-motion"
import { useState } from "react"

function Button({ children }){

    const [isHovered, setIsHovered] = useState(false)



    return(
        <>
        <button className='
        relative
        overflow-hidden
        border-2
        border-lime-500
        px-8
        py-4
        rounded-lg
        font-semibold  '
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <motion.span className=" absolute left-0 top-0 h-full w-0 bg-red-500 transition-all duration-500 group-hover:w-full "></motion.span>
            <span className="relative z10">
                {children}
                </span>
             </button>
        </>
    )
}

export default Button