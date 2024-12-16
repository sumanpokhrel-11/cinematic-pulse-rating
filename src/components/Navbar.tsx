import { Home, Film, List, User, BookmarkPlus, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-cinema-primary/95 backdrop-blur-sm z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-cinema-text">CineMagic</span>
        </Link>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="text-cinema-text hover:text-cinema-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-cinema-primary/95 backdrop-blur-sm py-4 px-6">
                <div className="flex flex-col space-y-4">
                  <NavLink to="/" icon={<Home className="w-5 h-5" />} text="Home" onClick={toggleMenu} />
                  <NavLink to="/movies" icon={<Film className="w-5 h-5" />} text="Movies" onClick={toggleMenu} />
                  <NavLink to="/genre" icon={<List className="w-5 h-5" />} text="Genre" onClick={toggleMenu} />
                  <NavLink to="/profile" icon={<User className="w-5 h-5" />} text="Profile" onClick={toggleMenu} />
                  <NavLink 
                    to="/watchlist" 
                    icon={<BookmarkPlus className="w-5 h-5" />} 
                    text="Watchlist"
                    className="bg-green-700 px-4 py-2 rounded-lg inline-flex items-center"
                    onClick={toggleMenu}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <NavLink to="/" icon={<Home className="w-5 h-5" />} text="Home" onClick={() => {}} />
            <NavLink to="/movies" icon={<Film className="w-5 h-5" />} text="Movies" onClick={() => {}} />
            <NavLink to="/genre" icon={<List className="w-5 h-5" />} text="Genre" onClick={() => {}} />
            <NavLink to="/profile" icon={<User className="w-5 h-5" />} text="Profile" onClick={() => {}} />
            <NavLink 
              to="/watchlist" 
              icon={<BookmarkPlus className="w-5 h-5" />} 
              text="Watchlist"
              className="bg-green-700 px-4 py-2 rounded-lg"
              onClick={() => {}}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  className?: string;
  onClick: () => void;
}

const NavLink = ({ to, icon, text, className = "", onClick }: NavLinkProps) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 text-cinema-text hover:text-cinema-accent transition-colors ${className}`}
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;