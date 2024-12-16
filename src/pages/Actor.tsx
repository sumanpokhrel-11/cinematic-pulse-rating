import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

// Mock data - in a real app, this would come from an API
const actorData = {
  id: 1,
  name: "Leonardo DiCaprio",
  bio: "Leonardo Wilhelm DiCaprio is an American actor and film producer. Known for his work in biographical and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards.",
  birthDate: "November 11, 1974",
  birthPlace: "Los Angeles, California, USA",
  image: "https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg",
  socialMedia: {
    twitter: "https://twitter.com/LeoDiCaprio",
    instagram: "https://instagram.com/leonardodicaprio",
    facebook: "https://facebook.com/LeonardoDiCaprio"
  },
  movies: [
    {
      id: 1,
      title: "Inception",
      year: "2010",
      role: "Cobb",
      image: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg"
    },
    {
      id: 2,
      title: "The Wolf of Wall Street",
      year: "2013",
      role: "Jordan Belfort",
      image: "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg"
    },
    {
      id: 3,
      title: "The Revenant",
      year: "2015",
      role: "Hugh Glass",
      image: "https://image.tmdb.org/t/p/w500/9nXJPkujHXZDpH8CqGWHHzP8PAH.jpg"
    }
  ]
};

const Actor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 pb-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Avatar className="w-48 h-48 md:w-64 md:h-64">
              <AvatarImage src={actorData.image} alt={actorData.name} />
              <AvatarFallback>{actorData.name[0]}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">{actorData.name}</h1>
              
              <div className="flex gap-4">
                <a
                  href={actorData.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cinema-text hover:text-cinema-accent transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href={actorData.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cinema-text hover:text-cinema-accent transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={actorData.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cinema-text hover:text-cinema-accent transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
              
              <div className="space-y-2">
                <p className="text-white/80"><span className="text-cinema-accent">Born:</span> {actorData.birthDate}</p>
                <p className="text-white/80"><span className="text-cinema-accent">Place of Birth:</span> {actorData.birthPlace}</p>
              </div>
              
              <p className="text-white/80 leading-relaxed">{actorData.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filmography Section */}
      <div className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Filmography</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {actorData.movies.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <Card className="bg-cinema-primary border-cinema-primary hover:border-cinema-accent transition-colors">
                  <CardContent className="p-4">
                    <div className="aspect-[2/3] mb-4">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-medium text-white">{movie.title}</h3>
                    <p className="text-sm text-white/60">{movie.year} • {movie.role}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actor;