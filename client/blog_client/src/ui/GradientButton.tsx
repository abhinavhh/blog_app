import { motion } from "framer-motion";

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
      className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-primary-text font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform"
    >
      {label}
    </motion.button>
  );
};