import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
      
      {/* Main Footer Content */}
      <div className="bg-black/90 backdrop-blur-xl py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white relative inline-block">
                About CineMagic
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-cinema-accent"></span>
              </h3>
              <p className="text-cinema-text/80 text-sm leading-relaxed">
                Your ultimate destination for movies. Discover the latest releases, classic films, and everything in between.
                Join our community of movie enthusiasts.
              </p>
              <div className="flex items-center gap-1 text-cinema-accent">
                <Heart className="w-4 h-4 fill-cinema-accent" />
                <span className="text-sm">Made with love for movie fans</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-cinema-accent"></span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/movies" 
                    className="text-cinema-text/80 hover:text-cinema-accent transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-cinema-accent rounded-full transform scale-0 group-hover:scale-100 transition-transform"></span>
                    Movies
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/profile" 
                    className="text-cinema-text/80 hover:text-cinema-accent transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-cinema-accent rounded-full transform scale-0 group-hover:scale-100 transition-transform"></span>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/watchlist" 
                    className="text-cinema-text/80 hover:text-cinema-accent transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-cinema-accent rounded-full transform scale-0 group-hover:scale-100 transition-transform"></span>
                    Watchlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white relative inline-block">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-cinema-accent"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-cinema-text/80">
                  <Mail className="w-4 h-4 text-cinema-accent" />
                  <span className="text-sm">support@cinemagic.com</span>
                </li>
                <li className="flex items-center gap-3 text-cinema-text/80">
                  <Phone className="w-4 h-4 text-cinema-accent" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-cinema-text/80">
                  <MapPin className="w-4 h-4 text-cinema-accent" />
                  <span className="text-sm">Los Angeles, CA 90028</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white relative inline-block">
                Follow Us
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-cinema-accent"></span>
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "https://facebook.com" },
                  { icon: Twitter, href: "https://twitter.com" },
                  { icon: Instagram, href: "https://instagram.com" },
                  { icon: Youtube, href: "https://youtube.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cinema-primary/30 flex items-center justify-center group hover:bg-cinema-accent transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-white/10" />

          {/* Copyright Section */}
          <div className="text-center">
            <p className="text-cinema-text/60 text-sm">
              © {currentYear} CineMagic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;