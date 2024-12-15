import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const featuredMovies = [
  {
    id: 1,
    title: "Oppenheimer",
    rating: 9.2,
    imageUrl: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    director: "Christopher Nolan",
    producers: ["Emma Thomas", "Charles Roven"],
  },
  {
    id: 2,
    title: "Dune: Part Two",
    rating: 8.8,
    imageUrl: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    director: "Denis Villeneuve",
    producers: ["Mary Parent", "Denis Villeneuve"],
  },
  {
    id: 3,
    title: "Poor Things",
    rating: 8.5,
    imageUrl: "https://image.tmdb.org/t/p/original/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    director: "Yorgos Lanthimos",
    producers: ["Ed Guiney", "Emma Stone"],
  }
];

const FeaturedCarousel = () => {
  return (
    <Carousel className="w-full max-w-7xl mx-auto">
      <CarouselContent>
        {featuredMovies.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="relative w-full h-[80vh] overflow-hidden">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{movie.title}</h1>
                    <div className="flex items-center space-x-2 mb-4">
                      <Star className="w-6 h-6 text-cinema-accent fill-current" />
                      <span className="text-2xl font-bold text-white">{movie.rating}</span>
                    </div>
                    <div className="text-white/80 space-y-2">
                      <p className="text-lg">Director: {movie.director}</p>
                      <p className="text-lg">Producers: {movie.producers.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default FeaturedCarousel;