import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerImg from '../assets/technology-communication-icons-symbols-concept.jpg';
import AnimatedInput from "../ui/AnimateInput";
import { GradientButton } from "../ui/GradientButton";
import { AuthWrapper } from "../components/Auth/AuthWrapper";
import { GradientText } from "../components/styles/GradientText";
import { LinkText } from "../components/styles/LinkText";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevData => (
      {
        ...prevData,
        [name]: value,
      }
    ))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const response = await fetch('api/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if(response.ok) {
        alert('Login Successfull');
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    }catch (err) {
      alert(`Error in Login : ${err}`);
    }
  }

  return (
    <AuthWrapper>
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Form */}
        <motion.div
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
              <GradientText text="Welcome Back" />
              <p className="text-gray-300 text-lg">
                Continue your blogging journey
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatedInput
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                label="Username"
                delay={0}
              />

              <AnimatedInput
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                label="Password"
                delay={0}
              />

              <GradientButton
                type="submit"
                label="Sign In"
                delay={0.6}
              />
            </form>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center mt-8"
            >
              <p className="text-gray-300">
                New to our platform?{" "}
                <LinkText to="/register" text="Create an account" />
              </p>
            </motion.div>
          </div>
        </motion.div>

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
                  src={registerImg} 
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
              <GradientText text="Share Your Story" />
            </motion.div>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-300 text-lg leading-relaxed max-w-md"
            >
              Join thousands of creators sharing their thoughts, ideas, and experiences with the world. Your voice matters.
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

export default Login;