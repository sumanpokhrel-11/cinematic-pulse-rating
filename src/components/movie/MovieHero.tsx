import { Heart, List, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieHeroProps {
  title: string;
  releaseYear: string;
  releaseDate: string;
  genres: string[];
  duration: string;
  rating: string;
  tagline: string;
  overview: string;
  director: {
    name: string;
    image: string;
  };
  backdropUrl: string;
  imageUrl: string;
}

const MovieHero = ({
  title,
  releaseYear,
  releaseDate,
  genres,
  duration,
  rating,
  tagline,
  overview,
  director,
  backdropUrl,
  imageUrl,
}: MovieHeroProps) => {
  return (
    <div 
      className="w-full min-h-[500px] md:min-h-[600px] relative bg-cover bg-center mt-16 md:mt-20"
      style={{
        backgroundImage: `url(${backdropUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60">
        <div className="container mx-auto h-full px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Movie Poster */}
            <div className="w-48 md:w-64 mx-auto md:mx-0 flex-shrink-0">
              <img
                src={imageUrl}
                alt={title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Movie Info */}
            <div className="flex-1 text-white mt-4 md:mt-0">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">
                {title} <span className="font-normal text-white/70">({releaseYear})</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 text-sm mb-6 justify-center md:justify-start">
                <span>{releaseDate}</span>
                <span>•</span>
                {genres.map((genre, index) => (
                  <span key={genre}>
                    {genre}
                    {index < genres.length - 1 && ", "}
                  </span>
                ))}
                <span>•</span>
                <span>{duration}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cinema-primary border-4 border-cinema-accent">
                    <span className="text-xl font-bold">{rating}</span>
                  </div>
                  <span className="text-sm">User<br/>Score</span>
                </div>
                
                <Button variant="outline" size="icon">
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Tagline */}
              <p className="text-lg italic text-white/70 mb-4 text-center md:text-left">{tagline}</p>

              {/* Overview */}
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">Overview</h3>
              <p className="text-white/90 mb-8 max-w-3xl text-center md:text-left">{overview}</p>

              {/* Director */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <h4 className="font-medium mb-1">{director.name}</h4>
                  <p className="text-sm text-white/70">Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;