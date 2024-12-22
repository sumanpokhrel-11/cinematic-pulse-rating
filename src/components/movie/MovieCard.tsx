import { Film, Heart, HeartOff, Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Movie } from "../MovieList";

interface MovieCardProps {
  movie: Movie;
  customLists: string[];
  onWatchlistToggle: (movieId: number) => void;
  onAddToCustomList: (listName: string, movie: Movie) => void;
}

const MovieCard = ({ movie, customLists, onWatchlistToggle, onAddToCustomList }: MovieCardProps) => {
  return (
    <div
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
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full bg-cinema-sage/20 border-cinema-sage/50 hover:bg-cinema-sage/30 hover:border-cinema-sage text-white"
              onClick={() => onWatchlistToggle(movie.id)}
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
            {customLists.length > 0 && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-cinema-sage/20 border-cinema-sage/50 hover:bg-cinema-sage/30 hover:border-cinema-sage text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to List
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-cinema-forest border-cinema-sage/20">
                  <DialogHeader>
                    <DialogTitle className="text-cinema-text">Add to List</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2">
                    {customLists.map((listName) => (
                      <Button
                        key={listName}
                        variant="outline"
                        className="w-full bg-cinema-sage/20 border-cinema-sage/50 hover:bg-cinema-sage/30 hover:border-cinema-sage text-white"
                        onClick={() => onAddToCustomList(listName, movie)}
                      >
                        {listName}
                      </Button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;