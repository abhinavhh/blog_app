import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import logoImg from '/Logo.png';
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {

    const[isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const animateOpacity: Variants = {
        hidden:{
            opacity: 0.2
        },
        visible: {
            opacity: 1,
            transition:{
                duration: 2,
                ease: ["easeInOut"]
            }
        }
    }
    
  return (
    <motion.div
        className="p-4 bg-gray-900 fixed w-full"
    >
        <motion.div
            className="flex justify-between"
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
                <motion.div
                    whileHover={{scale:1.02}}
                    whileTap={{scale:0.95}}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
                </motion.div>
            </div>

            {/* Mobile View */}
            <AnimatePresence>
                {isMenuOpen && <motion.div
                    className="md:hidden"

                >
                    {["home", "blog"].map((item) => (
                        <motion.div
                            key={item}
                            className="bg-white"
                        >
                            {item}
                        </motion.div>
                    ))}
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    </motion.div>
  )
}

export default Navbar