import { Film, Heart, HeartOff, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

interface MovieListProps {
  type: "watchlist" | "watched" | "custom";
  filter?: string;
  listName?: string;
}

export interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
  inWatchlist: boolean;
}

const MovieList = ({ type, filter = "all", listName = "" }: MovieListProps) => {
  const { toast } = useToast();
  const [newListName, setNewListName] = useState("");
  const [customLists, setCustomLists] = useState<string[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Load custom lists from localStorage
    const savedLists = JSON.parse(localStorage.getItem('customLists') || '[]');
    setCustomLists(savedLists);

    // Load movies for the specific list type
    if (type === 'custom' && listName) {
      const listMovies = JSON.parse(localStorage.getItem(`list_${listName}`) || '[]');
      setMovies(listMovies);
    } else {
      // Mock data for other list types
      setMovies([
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
      ]);
    }
  }, [type, listName]);

  const createNewList = () => {
    if (newListName.trim()) {
      const updatedLists = [...customLists, newListName];
      setCustomLists(updatedLists);
      localStorage.setItem('customLists', JSON.stringify(updatedLists));
      localStorage.setItem(`list_${newListName}`, JSON.stringify([]));
      
      toast({
        title: "List Created",
        description: `"${newListName}" has been created.`,
        duration: 3000,
      });
      setNewListName("");
    }
  };

  const addToCustomList = (listName: string, movie: Movie) => {
    const currentList = JSON.parse(localStorage.getItem(`list_${listName}`) || '[]');
    const updatedList = [...currentList, movie];
    localStorage.setItem(`list_${listName}`, JSON.stringify(updatedList));
    
    toast({
      title: "Added to List",
      description: `"${movie.title}" has been added to "${listName}".`,
      duration: 3000,
    });

    // Refresh the movies if we're currently viewing the list we just added to
    if (type === 'custom' && listName === listName) {
      setMovies(updatedList);
    }
  };

  const handleWatchlistToggle = (movieId: number) => {
    setMovies(prev => 
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
    ? movies 
    : movies.filter(movie => {
        if (filter === "inWatchlist") return movie.inWatchlist;
        return true;
      });

  if (type === "custom" && !customLists.includes(listName)) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <Film className="mb-4 h-16 w-16 text-cinema-sage opacity-50" />
        <p className="text-lg mb-2">This list is empty</p>
        <p className="text-sm text-cinema-text/70">Start adding movies to build your collection!</p>
      </div>
    );
  }

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
    <div className="space-y-6">
      {type === "watchlist" && (
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="bg-cinema-sage/20 border-cinema-sage/50 hover:bg-cinema-sage/30 hover:border-cinema-sage text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create New List
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-cinema-forest border-cinema-sage/20">
            <DialogHeader>
              <DialogTitle className="text-cinema-text">Create New List</DialogTitle>
              <DialogDescription className="text-cinema-text/60">
                Give your list a name and start adding movies to it.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-2">
              <Input
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                placeholder="Enter list name..."
                className="bg-cinema-forest border-cinema-sage/50 text-white"
              />
              <Button 
                onClick={createNewList}
                className="bg-cinema-sage hover:bg-cinema-sage/90"
              >
                Create
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

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
                <div className="space-y-2">
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
                  {Object.keys(customLists).length > 0 && (
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
                          <DialogDescription className="text-cinema-text/60">
                            Choose a list to add this movie to.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-2">
                          {customLists.map((listName) => (
                            <Button
                              key={listName}
                              variant="outline"
                              className="w-full bg-cinema-sage/20 border-cinema-sage/50 hover:bg-cinema-sage/30 hover:border-cinema-sage text-white"
                              onClick={() => addToCustomList(listName, movie)}
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
        ))}
      </div>
    </div>
  );
};

export default MovieList;
