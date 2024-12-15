import { Film } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const genres = [
  "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", 
  "Drama", "Family", "Fantasy", "History", "Horror", "Music", 
  "Mystery", "Romance", "Science Fiction", "Thriller", "War", "Western"
];

const Genre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-8">
        <h1 className="text-4xl font-bold mb-8 text-cinema-text">Movie Genres</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {genres.map((genre) => (
            <Card 
              key={genre} 
              className="group hover:bg-cinema-primary transition-colors duration-300 cursor-pointer border-cinema-primary"
            >
              <CardContent className="p-6 flex items-center gap-3">
                <Film className="w-6 h-6 text-cinema-accent" />
                <span className="text-lg font-medium text-cinema-text group-hover:text-cinema-accent transition-colors duration-300">
                  {genre}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Genre;