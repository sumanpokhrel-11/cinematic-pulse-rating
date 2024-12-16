import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";

// Mock data - in a real app, this would come from an API
const movieDetails = {
  id: 1,
  title: "Inception",
  rating: "8.8",
  releaseYear: "2010",
  duration: "2h 28min",
  genres: ["Action", "Sci-Fi", "Thriller"],
  description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  imageUrl: "https://image.tmdb.org/t/p/original/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
  director: {
    name: "Christopher Nolan",
    image: "https://image.tmdb.org/t/p/w500/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg"
  },
  cast: [
    {
      name: "Leonardo DiCaprio",
      role: "Cobb",
      image: "https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg"
    },
    {
      name: "Joseph Gordon-Levitt",
      role: "Arthur",
      image: "https://image.tmdb.org/t/p/w500/4U9G4YwTlIEbAymBaseltS8uqPx.jpg"
    },
    {
      name: "Ellen Page",
      role: "Ariadne",
      image: "https://image.tmdb.org/t/p/w500/5dL5MROP8DhHJVTswuuAABgGxeS.jpg"
    }
  ]
};

const MovieDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <img
          src={movieDetails.imageUrl}
          alt={movieDetails.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent">
          <div className="absolute bottom-0 left-0 w-full p-8">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {movieDetails.title}
                </h1>
                <div className="flex items-center gap-4 text-white/80 mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-cinema-accent fill-current" />
                    <span className="text-xl font-bold text-white">{movieDetails.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{movieDetails.releaseYear}</span>
                  <span>•</span>
                  <span>{movieDetails.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {movieDetails.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-cinema-primary text-cinema-text text-sm rounded-full border border-cinema-accent"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Synopsis</h2>
              <p className="text-white/80 leading-relaxed">
                {movieDetails.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Cast</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {movieDetails.cast.map((actor) => (
                  <Card key={actor.name} className="bg-cinema-primary border-cinema-primary">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={actor.image} alt={actor.name} />
                          <AvatarFallback>{actor.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-white">{actor.name}</h3>
                          <p className="text-sm text-white/60">{actor.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Director</h2>
              <Card className="bg-cinema-primary border-cinema-primary">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={movieDetails.director.image} alt={movieDetails.director.name} />
                      <AvatarFallback>{movieDetails.director.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-white">{movieDetails.director.name}</h3>
                      <p className="text-sm text-white/60">Director</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;