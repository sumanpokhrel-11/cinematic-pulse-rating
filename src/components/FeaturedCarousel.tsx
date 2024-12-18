import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Clock, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const featuredMovies = [
  {
    id: 1,
    title: "Oppenheimer",
    rating: 9.2,
    imageUrl: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    director: "Christopher Nolan",
    producers: ["Emma Thomas", "Charles Roven"],
    duration: "180 min",
    releaseDate: "July 21, 2023",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    id: 2,
    title: "Dune: Part Two",
    rating: 8.8,
    imageUrl: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    director: "Denis Villeneuve",
    producers: ["Mary Parent", "Denis Villeneuve"],
    duration: "166 min",
    releaseDate: "March 1, 2024",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  },
  {
    id: 3,
    title: "Poor Things",
    rating: 8.5,
    imageUrl: "https://image.tmdb.org/t/p/original/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    director: "Yorgos Lanthimos",
    producers: ["Ed Guiney", "Emma Stone"],
    duration: "141 min",
    releaseDate: "December 8, 2023",
    description: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
  }
];

const FeaturedCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <Carousel
      className="w-full max-w-[100vw] mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {featuredMovies.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="relative w-full h-[90vh] overflow-hidden">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{movie.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="w-6 h-6 text-cinema-accent fill-current" />
                        <span className="text-2xl font-bold text-white">{movie.rating}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <Clock className="w-5 h-5" />
                        <span>{movie.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <Calendar className="w-5 h-5" />
                        <span>{movie.releaseDate}</span>
                      </div>
                    </div>
                    <p className="text-lg text-white/90 mb-6 max-w-2xl line-clamp-3">
                      {movie.description}
                    </p>
                    <div className="text-white/80 space-y-2 mb-6">
                      <p className="text-lg">Director: {movie.director}</p>
                      <p className="text-lg">Producers: {movie.producers.join(", ")}</p>
                    </div>
                    <Button className="bg-cinema-accent text-black hover:bg-cinema-accent/90">
                      Watch Now
                    </Button>
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