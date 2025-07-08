import { motion} from "framer-motion";

const Register = () => {
  return (
    <section 
        id="register"
        className="flex"
    >
        <motion.div
            whileHover={{scale: 1.1}}
        >
            Registration
        </motion.div>
    </section>
  )
}

export default Register
