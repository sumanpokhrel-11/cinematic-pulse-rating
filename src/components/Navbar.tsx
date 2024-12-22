import { Film, Home, BookmarkPlus, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const genres = [
  "Action", "Adventure", "Animation", "Comedy", "Crime", 
  "Documentary", "Drama", "Family", "Fantasy", "Horror", 
  "Mystery", "Romance", "Sci-Fi", "Thriller", "War"
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cinema-forest/95 backdrop-blur-md border-b border-cinema-sage/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cinema-text">
            CineMag
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home className="w-5 h-5" />} text="Home" />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 text-cinema-text hover:text-cinema-sage">
                  <Film className="w-5 h-5" />
                  <span>Movies</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-cinema-forest border-cinema-sage/20">
                <DropdownMenuItem className="text-cinema-text hover:text-cinema-sage focus:text-cinema-sage focus:bg-cinema-sage/10">
                  <Link to="/movies" className="w-full">All Movies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-cinema-text hover:text-cinema-sage focus:text-cinema-sage focus:bg-cinema-sage/10">
                  <Link to="/movies?filter=latest" className="w-full">Latest Releases</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-cinema-text hover:text-cinema-sage focus:text-cinema-sage focus:bg-cinema-sage/10">
                  <Link to="/movies?filter=upcoming" className="w-full">Upcoming</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 text-cinema-text hover:text-cinema-sage">
                  <span>Genres</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-cinema-forest border-cinema-sage/20">
                {genres.map((genre) => (
                  <DropdownMenuItem 
                    key={genre}
                    className="text-cinema-text hover:text-cinema-sage focus:text-cinema-sage focus:bg-cinema-sage/10"
                  >
                    <Link to={`/movies?genre=${genre.toLowerCase()}`} className="w-full">
                      {genre}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/profile" icon={<User className="w-5 h-5" />} text="Profile" />
            
            <Link 
              to="/watchlist"
              className="bg-cinema-sage text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-cinema-sage/90 transition-colors"
            >
              <BookmarkPlus className="w-5 h-5" />
              <span>Watchlist</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-cinema-text" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-cinema-forest border-cinema-sage/20">
              <div className="flex flex-col space-y-4 mt-8">
                <MobileNavLink to="/" text="Home" icon={<Home className="w-5 h-5" />} />
                <MobileNavLink to="/movies" text="Movies" icon={<Film className="w-5 h-5" />} />
                <MobileNavLink to="/profile" text="Profile" icon={<User className="w-5 h-5" />} />
                <MobileNavLink to="/watchlist" text="Watchlist" icon={<BookmarkPlus className="w-5 h-5" />} />
                
                {/* Genres Section */}
                <div className="pt-4 border-t border-cinema-sage/20">
                  <h3 className="text-sm font-semibold text-cinema-text mb-2">Genres</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {genres.map((genre) => (
                      <Link
                        key={genre}
                        to={`/movies?genre=${genre.toLowerCase()}`}
                        className="text-sm text-cinema-text/80 hover:text-cinema-sage transition-colors"
                      >
                        {genre}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 text-cinema-text hover:text-cinema-sage transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-3 text-cinema-text hover:text-cinema-sage transition-colors p-2 rounded-lg hover:bg-cinema-sage/10"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;