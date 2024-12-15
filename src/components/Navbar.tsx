import { Home, Film, List, User, BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-cinema-primary/95 backdrop-blur-sm z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-cinema-text">CineMagic</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <NavLink to="/" icon={<Home className="w-5 h-5" />} text="Home" />
          <NavLink to="/movies" icon={<Film className="w-5 h-5" />} text="Movies" />
          <NavLink to="/genre" icon={<List className="w-5 h-5" />} text="Genre" />
          <NavLink to="/profile" icon={<User className="w-5 h-5" />} text="Profile" />
          <NavLink 
            to="/watchlist" 
            icon={<BookmarkPlus className="w-5 h-5" />} 
            text="Watchlist"
            className="bg-green-700 px-4 py-2 rounded-lg"
          />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text, className = "" }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 text-cinema-text hover:text-cinema-accent transition-colors ${className}`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;