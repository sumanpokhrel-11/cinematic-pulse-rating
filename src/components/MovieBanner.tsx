import { Star } from "lucide-react";

interface MovieBannerProps {
  title: string;
  rating: number;
  imageUrl: string;
  director: string;
  producers: string[];
}

const MovieBanner = ({ title, rating, imageUrl, director, producers }: MovieBannerProps) => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-cinema-accent fill-current" />
              <span className="text-2xl font-bold text-white">{rating}</span>
            </div>
            <div className="text-white/80 space-y-2">
              <p className="text-lg">Director: {director}</p>
              <p className="text-lg">Producers: {producers.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;