interface GradientTextProps {
  text: string;
  size?: string;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ 
  text, 
  size = "text-4xl",
  className = ""
}) => {
  return (
    <h1 className={`${size} font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 ${className}`}>
      {text}
    </h1>
  );
};