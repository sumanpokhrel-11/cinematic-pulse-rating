import { useEffect, useState } from "react";
import { useToast } from "./ui/use-toast";
import MovieCard from "./movie/MovieCard";
import CreateListDialog from "./movie/CreateListDialog";
import EmptyState from "./movie/EmptyState";

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
    const savedLists = JSON.parse(localStorage.getItem('customLists') || '[]');
    setCustomLists(savedLists);

    if (type === 'custom' && listName) {
      const listMovies = JSON.parse(localStorage.getItem(`list_${listName}`) || '[]');
      setMovies(listMovies);
    } else {
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

  const filteredMovies = filter === "all" 
    ? movies 
    : movies.filter(movie => {
        if (filter === "inWatchlist") return movie.inWatchlist;
        return true;
      });

  if (type === "custom" && !customLists.includes(listName)) {
    return <EmptyState type={type} customMessage="This list is empty" />;
  }

  if (filteredMovies.length === 0) {
    return <EmptyState type={type} />;
  }

  return (
    <div className="space-y-6">
      {type === "watchlist" && (
        <CreateListDialog
          newListName={newListName}
          onNewListNameChange={setNewListName}
          onCreateList={createNewList}
        />
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            customLists={customLists}
            onWatchlistToggle={handleWatchlistToggle}
            onAddToCustomList={addToCustomList}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;