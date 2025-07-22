import { motion} from "framer-motion";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

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
    const animateDiv = {
        scale:1,
        transition:{
            duration:0.4,
        }
    }
  return (
    <section 
        id="register"
        className="flex justify-center w-full p-6"
    >
        <motion.div
            initial={{scale:0.9}}
            animate={animateDiv}
            className="border-1 bg-gray-300 border-gray-400 p-0.5 rounded-lg "
        >
            <motion.div
                className="border-1 p-4 rounded-lg bg-white border-gray-400"
            >
                <div className="mb-2 p-2">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <p className="text-sm">Discover a better way for posting blogs</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2"
                >
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
                            type="email" 
                            name="email" 
                            id="email" 
                            value={formData.email} 
                            required
                            onChange={handleChange}
                            placeholder=""
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                                e-mail
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
                        whileHover={{scale:1.03}}
                        className="relative"
                    >
                        <input 
                            type="password" 
                            name="confirmPass" 
                            id="confirmpassword" 
                            value={confirPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            required
                            placeholder=""
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor="confirmpassword"
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                                confirm-password
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
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Register
