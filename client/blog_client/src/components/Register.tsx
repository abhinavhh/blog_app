import { motion, type Variants} from "framer-motion";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import registerImg from '../assets/technology-communication-icons-symbols-concept.jpg';

interface registerForm {
    username: string,
    password: string,
    email: string,
}
const Register = () => {
    const [formData, setFormData] = useState<registerForm>({
        username:'',
        password:'',
        email:'',
    })

    const navigate = useNavigate();

    const [confirPass, setConfirmPass] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(formData.password !== confirPass){
            alert('Password not Match');
            return
        }
        try{
            const response = await fetch('api/register', {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if(data){
                alert('User Registration Successfull');
                setFormData({
                    username: '',
                    password: '',
                    email: '',
                })
                navigate('./Login.tsx');
            }
        }
        catch (err) {
            alert(`Error in registration : ${err}`);
        }
    }
    const animateInput: Variants = {
        hidden:{
            y: 20,
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.3
            }
        }
    }
  return (
    <div
        className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"
    >
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="relative w-full max-w-6xl"
        >
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* left side section */}
                    <motion.div
                        initial={{x: -50, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="flex p-8 lg:p-12"
                    >
                        <div className="max-w-md mx-auto">
                            <motion.div 
                                className="text-center mb-8"
                                initial={{y: -20, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{duration: 0.6, delay: 0.3}}
                            >
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">Register</h1>
                                <p className="text-gray-300 text-lg">Discover a better way for posting blogs</p>
                            </motion.div>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <motion.div
                                    variants={animateInput}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{scale:1.02}}
                                    className="relative group"    
                                >
                                    <input 
                                        type="text" 
                                        name="username" 
                                        id="name" 
                                        value={formData.username} 
                                        required
                                        onChange={handleChange}
                                        placeholder=""
                                        className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-4 -top-2.5 bg-white/5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-gradient-to-r peer-focus:from-purple-400 peer-focus:to-pink-400 peer-focus:bg-clip-text peer-focus:text-transparent"
                                    >
                                            username
                                    </label>
                                </motion.div>
                                <motion.div 
                                    variants={animateInput}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{scale:1.02}}
                                    className="relative group"
                                >
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        value={formData.email} 
                                        required
                                        onChange={handleChange}
                                        placeholder=""
                                        className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-4 -top-2.5 bg-white/5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-gradient-to-r peer-focus:from-purple-400 peer-focus:to-pink-400 peer-focus:bg-clip-text peer-focus:text-transparent"
                                    >
                                            e-mail
                                    </label>
                                </motion.div>
                                <motion.div 
                                    variants={animateInput}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{scale:1.02}}
                                    className="relative group"
                                >
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        value={formData.password} 
                                        required
                                        onChange={handleChange}
                                        placeholder=""
                                        className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-4 -top-2.5 bg-white/5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-gradient-to-r peer-focus:from-purple-400 peer-focus:to-pink-400 peer-focus:bg-clip-text peer-focus:text-transparent"
                                    >
                                        password
                                    </label>
                                </motion.div>
                                <motion.div 
                                    variants={animateInput}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{scale:1.02}}
                                    className="relative group"
                                >
                                    <input 
                                        type="password" 
                                        name="confirmPass" 
                                        id="confirmpassword" 
                                        value={confirPass}
                                        onChange={(e) => setConfirmPass(e.target.value)}
                                        required
                                        placeholder=""
                                        className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                                    />
                                    <label
                                        htmlFor="confirmpassword"
                                        className="absolute left-4 -top-2.5 bg-white/5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-gradient-to-r peer-focus:from-purple-400 peer-focus:to-pink-400 peer-focus:bg-clip-text peer-focus:text-transparent"
                                    >
                                            confirm-password
                                    </label>
                                </motion.div>
                                <motion.button 
                                    initial={{y: 20, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    transition={{duration: 0.6, delay: 0.6}}
                                    whileHover={{scale:1.02, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3)"}}
                                    whileTap={{scale: 0.98}}
                                    type="submit"
                                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform"
                                >
                                    Sign Up
                                </motion.button>
                            </form>
                            <motion.div
                                variants={animateInput}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.7}}
                                className="text-center mt-8"
                            >
                                <p className=" text-gray-300 p-2">
                                    Already have an account?{" "} 
                                    <a 
                                        href="/login"
                                        className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300"
                                    >Sign In</a>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                    {/* right side section */}
                    <motion.div
                        initial={{scale:0.9}}
                        animate={{scale:1}}
                        className="hidden md:block md:w-1/2"
                    >
                        <div>
                            <motion.div
                                className="flex flex-col items-center h-full justify-around"
                            >
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <motion.h2 
                                    className="text-3xl font-bold text-center p-4"
                                >Welcome To Blog App
                                </motion.h2>
                                <p className="text-center text-gray-600 p-2">
                                    Join us to share your thoughts and ideas with the world. 
                                    Create your account now and start blogging!
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Register
