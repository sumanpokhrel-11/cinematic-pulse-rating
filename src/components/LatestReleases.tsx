import { Calendar, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const releases = [
  {
    id: 1,
    title: "Dune: Part Two",
    releaseDate: "March 1, 2024",
    rating: 8.8,
    imageUrl: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
  },
  {
    id: 2,
    title: "Drive-Away Dolls",
    releaseDate: "February 23, 2024",
    rating: 7.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/wTxQR3KwQCYKDqQvxZwujz3gLTC.jpg",
  },
  {
    id: 3,
    title: "Madame Web",
    releaseDate: "February 14, 2024",
    rating: 7.2,
    imageUrl: "https://image.tmdb.org/t/p/w500/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
  }
];

const LatestReleases = () => {
  return (
    <section className="bg-cinema-primary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-cinema-text">Latest Releases</h2>
          <Calendar className="w-6 h-6 text-cinema-accent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {releases.map((movie) => (
            <Card 
              key={movie.id}
              className="bg-cinema-primary border-cinema-primary overflow-hidden hover:border-cinema-accent transition-colors duration-300"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 px-2 py-1 rounded">
                  <Star className="w-4 h-4 text-cinema-accent fill-current" />
                  <span className="text-sm font-bold text-white">{movie.rating}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-cinema-text mb-2">{movie.title}</h3>
                <p className="text-sm text-cinema-text/80">{movie.releaseDate}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestReleases;