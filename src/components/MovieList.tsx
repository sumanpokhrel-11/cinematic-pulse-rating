import { Film } from "lucide-react";

interface MovieListProps {
  type: "watchlist" | "watched";
}

const MovieList = ({ type }: MovieListProps) => {
  // Mock data - replace with actual data from your state management solution
  const movies = [
    {
      id: 1,
      title: "The Dark Knight",
      year: 2008,
      poster: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      poster: "/placeholder.svg",
    },
  ];

  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
        <Film className="mb-2 h-12 w-12" />
        <p>No movies in your {type} yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="group relative aspect-[2/3] overflow-hidden rounded-lg bg-muted"
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 w-full p-4">
            <h3 className="text-sm font-medium text-white">{movie.title}</h3>
            <p className="text-xs text-gray-300">{movie.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;