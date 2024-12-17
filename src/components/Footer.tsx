import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-cinema-primary mt-16 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-cinema-text mb-4">About CineMagic</h3>
            <p className="text-cinema-text/80 text-sm leading-relaxed">
              Your ultimate destination for movies. Discover the latest releases, classic films, and everything in between.
              Create your watchlist and join our community of movie enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-cinema-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/movies" className="text-cinema-text/80 hover:text-cinema-accent transition-colors text-sm">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/genre" className="text-cinema-text/80 hover:text-cinema-accent transition-colors text-sm">
                  Genres
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-cinema-text/80 hover:text-cinema-accent transition-colors text-sm">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-xl font-bold text-cinema-text mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-cinema-text/80 hover:text-cinema-accent transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cinema-text/80 hover:text-cinema-accent transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-cinema-text/80 hover:text-cinema-accent transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold text-cinema-text mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cinema-text/80 hover:text-cinema-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cinema-text/80 hover:text-cinema-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cinema-text/80 hover:text-cinema-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cinema-text/80 hover:text-cinema-accent transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-cinema-text/20" />

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-cinema-text/60 text-sm">
            © {new Date().getFullYear()} CineMagic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;