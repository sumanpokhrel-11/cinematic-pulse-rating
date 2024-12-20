import { Home, Film, List, User, BookmarkPlus, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const genres = [
  "Action", "Adventure", "Animation", "Comedy", "Crime", 
  "Documentary", "Drama", "Family", "Fantasy", "Horror", 
  "Mystery", "Romance", "Sci-Fi", "Thriller", "War"
];

const movieCategories = [
  { name: "All Movies", path: "/movies" },
  { name: "Upcoming Movies", path: "/movies?category=upcoming" },
  { name: "Released Movies", path: "/movies?category=released" },
  { name: "Free on YouTube", path: "/movies?category=youtube" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const MovieCategoriesDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 text-cinema-text hover:text-cinema-accent transition-all duration-300">
        <Film className="w-5 h-5" />
        <span className="font-medium">Movies</span>
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-cinema-primary/95 backdrop-blur-md border-cinema-accent/20 w-48">
        {movieCategories.map((category) => (
          <DropdownMenuItem
            key={category.name}
            className="text-cinema-text hover:text-cinema-accent hover:bg-cinema-accent/10 cursor-pointer"
          >
            <Link to={category.path} className="w-full">
              {category.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const GenreDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 text-cinema-text hover:text-cinema-accent transition-all duration-300">
        <List className="w-5 h-5" />
        <span className="font-medium">Genres</span>
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-cinema-primary/95 backdrop-blur-md border-cinema-accent/20">
        {genres.map((genre) => (
          <DropdownMenuItem
            key={genre}
            className="text-cinema-text hover:text-cinema-accent hover:bg-cinema-accent/10 cursor-pointer"
          >
            <Link to={`/movies?genre=${genre.toLowerCase()}`} className="w-full">
              {genre}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-cinema-primary/95 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-b from-cinema-primary/90 to-cinema-primary/0 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-cinema-text to-cinema-accent bg-clip-text text-transparent group-hover:to-cinema-text transition-all duration-300">
            CineMagic
          </span>
        </Link>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="text-cinema-text hover:text-cinema-accent transition-colors relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 animate-in fade-in-50 duration-200" />
              ) : (
                <Menu className="w-6 h-6 animate-in fade-in-50 duration-200" />
              )}
            </button>

            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-cinema-primary/95 backdrop-blur-md shadow-lg py-4 px-6 animate-in slide-in-from-top duration-200">
                <div className="flex flex-col space-y-4">
                  <NavLink to="/" icon={<Home className="w-5 h-5" />} text="Home" onClick={toggleMenu} />
                  <div className="pl-2">
                    <MovieCategoriesDropdown />
                  </div>
                  <div className="pl-2">
                    <GenreDropdown />
                  </div>
                  <NavLink to="/profile" icon={<User className="w-5 h-5" />} text="Profile" onClick={toggleMenu} />
                  <NavLink 
                    to="/watchlist" 
                    icon={<BookmarkPlus className="w-5 h-5" />} 
                    text="Watchlist"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-2 rounded-lg inline-flex items-center shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={toggleMenu}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <NavLink 
              to="/" 
              icon={<Home className="w-5 h-5" />} 
              text="Home" 
              isActive={location.pathname === "/"} 
              onClick={() => {}}
            />
            <MovieCategoriesDropdown />
            <GenreDropdown />
            <NavLink 
              to="/profile" 
              icon={<User className="w-5 h-5" />} 
              text="Profile" 
              isActive={location.pathname === "/profile"} 
              onClick={() => {}}
            />
            <NavLink 
              to="/watchlist" 
              icon={<BookmarkPlus className="w-5 h-5" />} 
              text="Watchlist"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              isActive={location.pathname === "/watchlist"}
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
  isActive?: boolean;
  onClick: () => void;
}

const NavLink = ({ to, icon, text, className = "", isActive, onClick }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center space-x-2 text-cinema-text transition-all duration-300",
      "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-cinema-accent after:transition-transform hover:after:scale-x-100",
      "hover:text-cinema-accent",
      isActive && "text-cinema-accent after:scale-x-100",
      className
    )}
    onClick={onClick}
  >
    {icon}
    <span className="font-medium">{text}</span>
  </Link>
);

export default Navbar;