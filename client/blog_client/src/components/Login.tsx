import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const animateDiv = {
    scale:1,
    transition:{
        duration:0.4,
    }
  }
  return (
    <div className="w-full flex justify-center p-6 ">
      <motion.div
        initial={{scale: 0.9}}
        animate={animateDiv}
        className="border-1 p-0.5 rounded-lg border-gray-400 bg-gray-300"
      >
        <motion.div
          className="border-1 p-4 rounded-lg bg-white border-gray-400"
        >
          <motion.div className="mb-2 p-2">
            <h1 className="text-2xl font-bold">Login page</h1>
            <p className="text-sm">Discover a better way of posting blogs</p>
          </motion.div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <motion.div
                whileHover={{scale:1.03}}
                className="relative"    
            >
                <input 
                    type="text" 
                    name="username" 
                    id="name" 
                    value={formData.username} 
                    required
                    onChange={handleChange}
                    placeholder=""
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                        username
                </label>
            </motion.div>
            <motion.div 
                whileHover={{scale:1.03}}
                className="relative"
            >
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={formData.password} 
                    required
                    onChange={handleChange}
                    placeholder=""
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label
                    htmlFor="password"
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                    password
                </label>
            </motion.div>
            <motion.div 
                className="relative"
            >
                <motion.button
                    whileHover={{scale:1.03, background:"#00005f"}}
                    className="bg-blue-950 text-white p-2 rounded-lg w-full"
                >
                    Submit
                </motion.button>
            </motion.div>
          </form>
          <motion.div>
            <p className="text-gray-500 mt-2">Don't have an account 
              <a href="/register" className="text-blue-500 ml-1 hover:underline">Register here</a>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Login;