import { Link } from "react-router-dom";

interface LinkTextProps {
  to: string;
  text: string;
}

export const LinkText: React.FC<LinkTextProps> = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
    >
      {text}
    </Link>
  );
};