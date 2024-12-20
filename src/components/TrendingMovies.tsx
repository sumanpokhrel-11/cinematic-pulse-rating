import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

// Updated movie type to include genres and description
const movies = [
  {
    id: 1,
    title: "The Dark Knight",
    rating: 9.0,
    imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    id: 2,
    title: "Inception",
    rating: 8.8,
    imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    id: 3,
    title: "Interstellar",
    rating: 8.6,
    imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    year: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 4,
    title: "Pulp Fiction",
    rating: 8.9,
    imageUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    year: 1994,
    genres: ["Crime", "Drama"],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  }
];

const TrendingMovies = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-cinema-text">Trending Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Card 
            key={movie.id}
            className="group relative bg-cinema-primary border-cinema-primary hover:border-cinema-accent transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative aspect-[2/3]">
                {/* Movie Poster */}
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    {/* Movie Title */}
                    <h3 className="text-lg font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {movie.title}
                    </h3>
                    
                    {/* Genres */}
                    <div className="flex flex-wrap gap-2 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {movie.genres.map((genre) => (
                        <Badge 
                          key={genre}
                          className="bg-cinema-accent/20 text-cinema-accent border border-cinema-accent/30 hover:bg-cinema-accent/30"
                        >
                          {genre}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-white/80 line-clamp-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {movie.description}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mt-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      <Star className="w-4 h-4 text-cinema-accent fill-current" />
                      <span className="text-sm font-bold text-white">{movie.rating}</span>
                      <span className="text-sm text-white/60">• {movie.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TrendingMovies;