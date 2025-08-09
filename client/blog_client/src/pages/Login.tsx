import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerImg from "../assets/technology-communication-icons-symbols-concept.jpg";
import AnimatedInput from "../ui/AnimateInput";
import { GradientButton } from "../ui/GradientButton";
import { AuthWrapper } from "../components/Auth/AuthWrapper";
import { GradientText } from "../components/styles/GradientText";
import { LinkText } from "../components/styles/LinkText";
import Text from "../components/styles/Text";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [verifyUser, toggleVerify ] = useState<boolean>(false);
  const [formData, setFormData] = useState({ username: "", password: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Login Successful");
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (err) {
      alert(`Error in Login : ${err}`);
    }
  };

  const handleOTPRequest = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('api/auth/request-otp', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData.email)
      });
      const data = await response.json();
      if(response.ok) {
        toast.success(data.message);
        toggleVerify(false);
        navigate('/reset-password');
      }
      toast.error(data.message);
    }
    catch (err: any) {
      toast.error(err.message);
    }
  }

  return (
    <AuthWrapper>
      <div className="flex flex-col lg:flex-row">
        {/* Left - Form */}
        {verifyUser? <motion.div
          className="flex-1 p-8"
        >
          <div className="max-w-md mx-auto">
            <motion.div
              className="text-center mb-8 space-y-2"
            >
              <GradientText text="Forget Password"/>
              <Text as="p" variant="gray" size="lg" font="medium">
                Verify Your Registered Email Address
              </Text>
            </motion.div>
            <form onSubmit={handleOTPRequest} className="space-y-6">
              <AnimatedInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
              />
              <GradientButton type="submit" label="Generate OTP" />
            </form>
          </div>

        </motion.div>
        : <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 p-8"
          >
            <div className="max-w-md mx-auto">
              <motion.div
                className="text-center mb-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <GradientText text="Welcome Back" />
                <Text as="p" font="semibold" size="lg" variant="gray">
                  Continue your blogging journey
                </Text>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatedInput
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  label="Username"
                />
                <AnimatedInput
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  label="Password"
                />
                <motion.button
                  initial={{opacity:0}} 
                  animate={{opacity: 1}}
                  whileHover={{scale: 1.04}}
                  transition={{duration: 0.6}}
                  className="relative -right-5/7 -top-5"
                  onClick={() => toggleVerify(!verifyUser)}
                >
                  <Text as="p" variant="gray" font="semibold"size="sm" className="hover:bg-gradient-to-r hover:from-primary-hover-start hover:to-primary-hover-end hover:text-transparent hover:bg-clip-text"
                  >
                    Forget Password
                  </Text>
                </motion.button>
                <GradientButton type="submit" label="Sign In" />
              </form>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center mt-8"
              >
                <Text as="p" variant="gray" font="medium" size="base">
                  New to our Platform? <LinkText to="/register" text="Create an account" />
                </Text>
              </motion.div>
            </div>
          </motion.div>
        }
        
        {/* Right - Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 hidden lg:flex items-center justify-center p-8"
        >
          <div className="text-center max-w-md">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src={registerImg}
                alt="Blog Platform"
                className="w-32 h-32 object-cover mx-auto mb-6"
              />
            </motion.div>

            <GradientText text="Share Your Story" />
            <Text as="p" size="lg" variant="gray" className="mt-4">
              Join thousands of creators sharing their thoughts, ideas, and experiences with the
              world. Your voice matters.
            </Text>

            <div className="mt-6 flex justify-center gap-6">
              <Text as="span" size="sm" variant="gray">
                Secure
              </Text>
              <Text as="span" size="sm" variant="gray">
                Fast
              </Text>
              <Text as="span" size="sm" variant="gray">
                Modern
              </Text>
            </div>
          </div>
        </motion.div>
      </div>
    </AuthWrapper>
  );
};

export default Login;
