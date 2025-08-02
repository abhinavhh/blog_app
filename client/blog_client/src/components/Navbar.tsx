import { AnimatePresence, motion, rgba, scale } from "framer-motion";
import type { Variants } from "framer-motion";
import logoImg from '/Logo.png';
import React from "react";
import { Menu, X } from "lucide-react";
import { div } from "framer-motion/client";
const Navbar = () => {

    const[isMenuOpen, setIsMenuOpen] = React.useState(false);


    const animateOpacity: Variants = {
        hidden:{
            opacity: 0.2
        },
        visible: {
            x: 10,
            opacity: 1,
            transition:{
                duration: 1,
                ease: ["easeInOut"]
            }
        }
    }
    const animateMobileMenu: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            x: 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.4,

            }
        },
        exit: {
            opacity: 0,
            y: 20,
        }
    }
    
  return (
    <div className="relative z-50">
        <motion.div
            className="p-4 fixed w-full z-50"
        >
            <motion.div
                className="flex justify-between items-center"
            >
                {/* logo field */}
                <motion.div
                    variants={animateOpacity}
                    initial="hidden"
                    animate="visible"
                    whileHover={{opacity: 1}}
                    className="flex items-center gap-2 text-white"
                >
                    <img 
                        src={logoImg} 
                        alt="Logo"
                        width={40} 
                    />
                    <h2>ByteBlogs</h2>
                </motion.div>

                {/* Mobile View  Button*/}
                <div
                    className="md:hidden flex items-center space-x-4"
                >
                    <motion.button
                        type="button"
                        whileHover={{scale:1.5, color: 'white'}}
                        whileTap={{scale: 0.6}}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2"
                    >
                        {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>

        {/* Mobile View */}
        <AnimatePresence>
            {isMenuOpen && <motion.div
                variants={animateMobileMenu}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden absolute  right-0 rounded-lg shadow-md p-4 top-8 left-3/4"

            >
                {["home", "blog", "profile", "logout"].map((item) => (
                    <motion.div
                        key={item}
                        whileHover={{ scale: 1.05, color: "red"}}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-full text-left py-2  text-sm tracking-wider cursor-pointer text-white uppercase"
                    >
                        {item}
                    </motion.div>
                ))}
            </motion.div>}
        </AnimatePresence>
    </div>
  )
}

export default Navbar