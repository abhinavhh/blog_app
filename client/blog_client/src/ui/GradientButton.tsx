import { motion } from "framer-motion";
import { useTheme } from "../components/Theme/ThemeContext";

interface GradientButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  delay?: number;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  label, 
  onClick, 
  type = "button",
  delay = 0
}) => {

  const {theme } = useTheme();
  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3)"
      }}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-4 px-6 bg-gradient-to-r font-semibold rounded-2xl shadow-lg  transition-all duration-300 transform 
        ${theme === "light"? "from-purple-500 to-pink-500 text-tertiary-text" 
          : "from-purple-600 to-pink-600 text-primary-text hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-500/25"
         }`}
    >
      {label}
    </motion.button>
  );
};