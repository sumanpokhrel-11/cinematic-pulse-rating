import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Link as LinkIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data - in a real app, this would come from an API
const actorData = {
  id: 1,
  name: "Leonardo DiCaprio",
  biography: "Leonardo Wilhelm DiCaprio is an American actor and film producer. Known for his work in biographical and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards. As of 2019, his films have grossed over $7.2 billion worldwide, and he has been placed eight times in annual rankings of the world's highest-paid actors.",
  birthDate: "November 11, 1974",
  birthPlace: "Los Angeles, California, USA",
  knownFor: "Acting",
  gender: "Male",
  popularity: "82.23",
  image: "https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg",
  website: "http://leonardodicaprio.com",
  socialMedia: {
    twitter: "https://twitter.com/LeoDiCaprio",
    instagram: "https://instagram.com/leonardodicaprio",
    facebook: "https://facebook.com/LeonardoDiCaprio"
  },
  filmography: [
    {
      id: 1,
      title: "Killers of the Flower Moon",
      year: "2023",
      role: "Ernest Burkhart",
      image: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
      rating: 7.8
    },
    {
      id: 2,
      title: "Don't Look Up",
      year: "2021",
      role: "Dr. Randall Mindy",
      image: "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg",
      rating: 7.2
    },
    {
      id: 3,
      title: "Once Upon a Time in Hollywood",
      year: "2019",
      role: "Rick Dalton",
      image: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
      rating: 7.4
    }
  ]
};

const Actor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Basic Info */}
      <div className="bg-cinema-primary py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="w-full md:w-1/4">
              <Avatar className="w-full h-auto aspect-[2/3] rounded-lg">
                <AvatarImage src={actorData.image} alt={actorData.name} className="object-cover" />
                <AvatarFallback>{actorData.name[0]}</AvatarFallback>
              </Avatar>
              
              {/* Social Links */}
              <div className="mt-4 flex gap-4">
                <a
                  href={actorData.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cinema-text hover:text-cinema-accent transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={actorData.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cinema-text hover:text-cinema-accent transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={actorData.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cinema-text hover:text-cinema-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={actorData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cinema-text hover:text-cinema-accent transition-colors"
                >
                  <LinkIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Info Section */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-4">{actorData.name}</h1>
              
              <div className="space-y-4 text-white/80">
                <div>
                  <h2 className="text-lg font-semibold text-cinema-accent mb-2">Biography</h2>
                  <p className="leading-relaxed">{actorData.biography}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-cinema-accent">Known For</h3>
                    <p>{actorData.knownFor}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-cinema-accent">Gender</h3>
                    <p>{actorData.gender}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-cinema-accent">Birthday</h3>
                    <p>{actorData.birthDate}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-cinema-accent">Place of Birth</h3>
                    <p>{actorData.birthPlace}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filmography Section */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="movies">Movies</TabsTrigger>
            <TabsTrigger value="tv">TV Shows</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {actorData.filmography.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <Card className="p-4 hover:bg-cinema-primary/10 transition-colors">
                  <div className="flex gap-4">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-16 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-white">{movie.title}</h3>
                          <p className="text-sm text-white/60">{movie.role}</p>
                        </div>
                        <span className="text-cinema-accent">{movie.year}</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-white/80">Rating: {movie.rating}/10</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </TabsContent>
          
          <TabsContent value="movies">
            {/* Same content as "all" for now */}
          </TabsContent>
          
          <TabsContent value="tv">
            <div className="text-center text-white/60 py-8">
              No TV shows found
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Actor;