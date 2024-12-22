import { Film, Heart, HeartOff } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface MovieListProps {
  type: "watchlist" | "watched";
  filter?: string;
}

const MovieList = ({ type, filter = "all" }: MovieListProps) => {
  const { toast } = useToast();
  // Mock data - replace with actual data from your state management solution
  const movies = [
    {
      id: 1,
      title: "The Dark Knight",
      year: 2008,
      poster: "/placeholder.svg",
      inWatchlist: true,
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      poster: "/placeholder.svg",
      inWatchlist: false,
    },
  ];

  const [watchlistMovies, setWatchlistMovies] = useState(
    movies.map(movie => ({ ...movie }))
  );

  const handleWatchlistToggle = (movieId: number) => {
    setWatchlistMovies(prev => 
      prev.map(movie => {
        if (movie.id === movieId) {
          const newStatus = !movie.inWatchlist;
          toast({
            title: newStatus ? "Added to Watchlist" : "Removed from Watchlist",
            description: `"${movie.title}" has been ${newStatus ? 'added to' : 'removed from'} your watchlist.`,
            duration: 3000,
          });
          return { ...movie, inWatchlist: newStatus };
        }
        return movie;
      })
    );
  };

  // Filter movies based on the filter prop
  const filteredMovies = filter === "all" 
    ? watchlistMovies 
    : watchlistMovies.filter(movie => {
        if (filter === "inWatchlist") return movie.inWatchlist;
        return true; // Add more filter conditions as needed
      });

  if (filteredMovies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <Film className="mb-4 h-16 w-16 text-cinema-sage opacity-50" />
        <p className="text-lg mb-2">No movies in your {type} yet</p>
        <p className="text-sm text-cinema-text/70">Start adding movies to keep track of what you want to watch!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {filteredMovies.map((movie) => (
        <div
          key={movie.id}
          className="group relative aspect-[2/3] overflow-hidden rounded-lg bg-cinema-forest border border-cinema-sage/20 hover:border-cinema-sage/50 transition-all duration-300"
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 w-full p-4">
              <h3 className="text-sm font-medium text-white mb-2">{movie.title}</h3>
              <p className="text-xs text-gray-300 mb-3">{movie.year}</p>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-cinema-sage/20 border-cinema-sage/50 hover:bg-cinema-sage/30 hover:border-cinema-sage text-white"
                onClick={() => handleWatchlistToggle(movie.id)}
              >
                {movie.inWatchlist ? (
                  <>
                    <HeartOff className="w-4 h-4 mr-2" />
                    Remove
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4 mr-2" />
                    Add to Watchlist
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;