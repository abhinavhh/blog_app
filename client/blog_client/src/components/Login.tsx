import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerImg from '../assets/technology-communication-icons-symbols-concept.jpg';
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <motion.div
        className="relative w-full max-w-6xl"
      >
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
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
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-gray-300 text-lg">
                    Continue your blogging journey
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <input 
                      type="text" 
                      name="username" 
                      id="username" 
                      value={formData.username} 
                      required
                      onChange={handleChange}
                      placeholder=""
                      className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-4 -top-2.5 bg-white/5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-gradient-to-r peer-focus:from-purple-400 peer-focus:to-pink-400 peer-focus:bg-clip-text peer-focus:text-transparent"
                    >
                      Username
                    </label>
                  </motion.div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
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
                      className="absolute left-4 -top-2.5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-gradient-to-r peer-focus:from-purple-400 peer-focus:to-pink-400 peer-focus:bg-clip-text peer-focus:text-transparent"
                    >
                      Password
                    </label>
                  </motion.div>

                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform"
                  >
                    Sign In
                  </motion.button>
                </form>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-center mt-8"
                >
                  <p className="text-gray-300">
                    New to our platform?{" "}
                    <Link
                      to="/register"
                      className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
                    >
                      Create an account
                    </Link>
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
                
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6"
                >
                  Share Your Story
                </motion.h2>
                
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
        </div>
      </motion.div>
    </div>
  )
}

export default Login;