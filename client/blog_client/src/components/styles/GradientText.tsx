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
    <h1 className={`${size} gradient-text ${className}`}>
      {text}
    </h1>
  );
};