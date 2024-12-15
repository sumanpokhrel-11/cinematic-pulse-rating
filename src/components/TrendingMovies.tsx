import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const movies = [
  {
    id: 1,
    title: "The Dark Knight",
    rating: 9.0,
    imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    year: 2008,
  },
  {
    id: 2,
    title: "Inception",
    rating: 8.8,
    imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    year: 2010,
  },
  {
    id: 3,
    title: "Interstellar",
    rating: 8.6,
    imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    year: 2014,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    rating: 8.9,
    imageUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    year: 1994,
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
            className="group bg-cinema-primary border-cinema-primary hover:border-cinema-accent transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative aspect-[2/3]">
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-cinema-accent fill-current" />
                      <span className="text-sm font-bold text-white">{movie.rating}</span>
                    </div>
                    <p className="text-sm text-white/80">{movie.year}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-cinema-text group-hover:text-cinema-accent transition-colors duration-300">
                  {movie.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TrendingMovies;