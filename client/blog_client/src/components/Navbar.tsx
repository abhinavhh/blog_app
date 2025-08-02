import { AnimatePresence, motion} from "framer-motion";
import type { Variants } from "framer-motion";
import logoImg from '/Logo.png';
import React from "react";
import { Menu, X } from "lucide-react";
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

    const animateNavlinks: Variants = {
        hidden: {
            opacity: 0,
            x: 10,
        },
        visible:{
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: 0.2,
                ease: ["easeInOut"],
            }
        }
    }
    
  return (
    <div className="relative z-50">
        <motion.div
            className="p-4 fixed w-full z-50"
        >
            <motion.div
                className="max-w-7xl mx-auto flex justify-between items-center"
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
                    <h2 className="font-bold text-xl">ByteBlogs</h2>
                </motion.div>

                {/* Desktop View */}
                <motion.div
                    className="hidden md:flex space-x-6 mr-8"
                >
                    {["home", "blog", "profile", "logout"].map((item) => (
                        <motion.button
                            key={item}
                            variants={animateNavlinks}
                            initial="hidden"
                            animate="visible"
                            whileHover={{scale: 1.09, color: "gray"}}
                            className="text-white uppercase text-sm tracking-wider cursor-pointer"
                        >
                            {item}
                        </motion.button>
                    ))}
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
                className="md:hidden absolute  right-0 rounded-l-lg shadow-md p-4 top-4 left-3/4 bg-white/10 backdrop-blur-lg"

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