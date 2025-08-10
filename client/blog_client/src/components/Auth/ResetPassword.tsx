import { motion } from "framer-motion"
import { AuthWrapper } from "./AuthWrapper"
import { GradientText } from "../styles/GradientText"
import Text from "../styles/Text"
import AnimatedInput from "../../ui/AnimateInput"
import { useState } from "react"
import { Bounce, Slide, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { GradientButton } from "../../ui/GradientButton"
import blogImg from '../../assets/technology-communication-icons-symbols-concept.jpg'
interface formProps{
    password: string,
    confirmPassword: string,
    otp:string,
    email:string,
}
const ResetPassword = () => {

    const navigate = useNavigate();

    const [verify, toggleVerify] = useState<boolean>(true);

    const [formData, setFormData ] = useState<formProps>({
        password: "",
        confirmPassword: "",
        otp: "",
        email: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value,
        }))
    }

    const handleOtpSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/verify-otp', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({password: formData.password})
            })
            const data = await response.json();
            if(response.ok) {
                toast.success(data.message, {
                    position: "top-center",
                    transition: Slide,
                    autoClose: 1000,
                });
                toggleVerify(false);
                return;
            }

            toast.error(data.message, {
                position: "top-center",
                transition: Bounce,
                autoClose: 2000
            })
        }
        catch ( err: any ) {
            toast.error(err.message, {
                position: "top-center",
                transition: Bounce,
                autoClose: 2000
            });
        }
    }

    const handleResetSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.warning('Password do not match', {
                autoClose: 1000,
                transition: Slide,
                position: "top-center"
            });
            return;
        }

        try {
            const response = await fetch('/api/auth/reset-password', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({password: formData.password})
            })
            const data = await response.json();
            if(response.ok) {
                toast.success(data.message, {
                    position: "top-center",
                    transition: Slide,
                    autoClose: 1000,
                });
                navigate('/login');
            }

            toast.error(data.message, {
                position: "top-center",
                transition: Bounce,
                autoClose: 2000
            })
        }
        catch ( err: any ) {
            toast.error(err.message, {
                position: "top-center",
                transition: Bounce,
                autoClose: 2000
            });
        }
    }
  return (
    <AuthWrapper>
        <div
            className="flex flex-col lg:flex-row"
        >
            {/* left side form */}

            {verify? <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 p-8 lg:p-12"
            >
                <div className="max-w-md mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <GradientText text="Verify OTP" />
                        <Text as="p" size="lg" font="semibold" variant="gray">
                            Verify Your Received OTP
                        </Text>
                    </motion.div>
                    <form onSubmit={handleOtpSubmit} className="space-y-6">
                        <AnimatedInput
                            type="text"
                            name="otp"
                            value={formData.otp}
                            onChange={handleChange}
                            label="Enter OTP"
                        />

                        <GradientButton type="submit" label="Verify OTP"/>
                    </form>
                </div>
            </motion.div> 
            
            : <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 p-8 lg:p-12"
            >
                <div className="max-w-md mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <GradientText text="Reset Password" />
                        <Text as="p" size="lg" font="semibold" variant="gray">
                            Enter Your Secure Password
                        </Text>
                    </motion.div>

                    <form onSubmit={handleResetSubmit} className="space-y-6">
                        <AnimatedInput
                            type="password"
                            name="password"
                            value={formData.password}
                            label="Password" 
                            onChange={handleChange}
                        />
                        <AnimatedInput 
                            type="password"
                            name="ConfirmPassword"
                            value={formData.confirmPassword}
                            label="Confirm Password" 
                            onChange={handleChange}
                        />

                        <GradientButton type="submit" label="Reset Password"/>
                    </form>
                </div>
            </motion.div>
            }
             {/* Right side - Hero section */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1 relative overflow-hidden lg:block hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                            <img
                                src={blogImg}
                                alt="Blog Platform"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <GradientText text="Welcome To Blog App" />
                    </motion.div>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-gray-300 text-lg leading-relaxed max-w-md"
                    >
                        Join us to share your thoughts and ideas with the world.
                        Create your account now and start blogging!
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="mt-8 flex space-x-4"
                    >
                        <div className="flex items-center space-x-2 text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm">Secure</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-sm">Fast</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            <span className="text-sm">Modern</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </AuthWrapper>
  )
}

export default ResetPassword