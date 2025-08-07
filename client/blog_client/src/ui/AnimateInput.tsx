import { motion } from "framer-motion";
import React from "react";

interface AnimatedInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  delay?: number;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  type, 
  name, 
  value, 
  onChange, 
  label,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        required
        onChange={onChange}
        placeholder=""
        className="peer w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
      />
      <label
        htmlFor={name}
        className="absolute left-4 -top-2.5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-gradient-to-r peer-focus:from-purple-400 peer-focus:to-pink-400 peer-focus:bg-clip-text peer-focus:text-transparent"
      >
        {label}
      </label>
    </motion.div>
  );
};

export default AnimatedInput;