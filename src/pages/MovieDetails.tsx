import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Calendar, Heart, List, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

// Mock data - in a real app, this would come from an API
const movieDetails = {
  id: 1,
  title: "Inception",
  tagline: "Your mind is the scene of the crime",
  rating: "8.8",
  voteCount: "29,458",
  releaseYear: "2010",
  duration: "2h 28min",
  releaseDate: "July 16, 2010",
  genres: ["Action", "Sci-Fi", "Thriller"],
  overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  imageUrl: "https://image.tmdb.org/t/p/original/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
  backdropUrl: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  freeMovieUrl: "https://www.youtube.com/embed/free-movie-id",
  isAvailableForFree: true,
  budget: "$160,000,000",
  revenue: "$836,836,967",
  status: "Released",
  originalLanguage: "English",
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
      
      {/* Custom Backdrop */}
      <div 
        className="w-full h-[600px] relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${movieDetails.backdropUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto h-full px-4 py-8 flex items-center">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Movie Poster */}
              <div className="w-64 flex-shrink-0">
                <img
                  src={movieDetails.imageUrl}
                  alt={movieDetails.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Movie Info */}
              <div className="flex-1 text-white">
                <h1 className="text-4xl font-bold mb-2">
                  {movieDetails.title} <span className="font-normal text-white/70">({movieDetails.releaseYear})</span>
                </h1>
                
                <div className="flex items-center gap-2 text-sm mb-6">
                  <span>{movieDetails.releaseDate}</span>
                  <span>•</span>
                  {movieDetails.genres.map((genre, index) => (
                    <span key={genre}>
                      {genre}
                      {index < movieDetails.genres.length - 1 && ", "}
                    </span>
                  ))}
                  <span>•</span>
                  <span>{movieDetails.duration}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cinema-primary border-4 border-cinema-accent">
                      <span className="text-xl font-bold">{movieDetails.rating}</span>
                    </div>
                    <span className="text-sm">User<br/>Score</span>
                  </div>
                  
                  <Button variant="outline" size="icon">
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Tagline */}
                <p className="text-lg italic text-white/70 mb-4">{movieDetails.tagline}</p>

                {/* Overview */}
                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                <p className="text-white/90 mb-6 max-w-3xl">{movieDetails.overview}</p>

                {/* Director */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-medium mb-1">{movieDetails.director.name}</h4>
                    <p className="text-sm text-white/70">Director</p>
                  </div>
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
          <div className="lg:col-span-2 space-y-12">
            {/* Cast Section */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Top Billed Cast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movieDetails.cast.map((actor) => (
                  <Card key={actor.name} className="bg-cinema-primary border-cinema-primary">
                    <div className="aspect-[2/3] relative">
                      <img 
                        src={actor.image} 
                        alt={actor.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-medium text-white">{actor.name}</h3>
                      <p className="text-sm text-white/60">{actor.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Media Section */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Media</h2>
              
              {/* Trailer */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Trailer</h3>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={movieDetails.trailerUrl}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allowFullScreen
                    title={`${movieDetails.title} Trailer`}
                  ></iframe>
                </div>
              </div>

              {/* Free Movie - Only show if available */}
              {movieDetails.isAvailableForFree && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Watch Movie</h3>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={movieDetails.freeMovieUrl}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allowFullScreen
                      title={`${movieDetails.title} Full Movie`}
                    ></iframe>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Status className="w-4 h-4 text-cinema-accent" />
                <span className="text-white font-medium">Status</span>
                <span className="text-white/70">{movieDetails.status}</span>
              </div>

              <div>
                <h3 className="text-white font-medium mb-1">Original Language</h3>
                <p className="text-white/70">{movieDetails.originalLanguage}</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-1">Budget</h3>
                <p className="text-white/70">{movieDetails.budget}</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-1">Revenue</h3>
                <p className="text-white/70">{movieDetails.revenue}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Keywords</h2>
              <div className="flex flex-wrap gap-2">
                {["dream", "subconscious", "thief", "corporate espionage", "inception"].map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-cinema-primary text-cinema-text text-sm rounded-full border border-cinema-accent"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;