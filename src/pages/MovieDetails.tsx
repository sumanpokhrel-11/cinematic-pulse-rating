import Navbar from "@/components/Navbar";
import MovieHero from "@/components/movie/MovieHero";
import CastSection from "@/components/movie/CastSection";
import MediaSection from "@/components/movie/MediaSection";
import MovieSidebar from "@/components/movie/MovieSidebar";

// Mock data - in a real app, this would come from an API
const movieDetails = {
  id: 1,
  title: "Inception",
  tagline: "Your mind is the scene of the crime",
  rating: "8.8",
  voteCount: "29,458",
  releaseYear: "2010",
  duration: "2h 28min",
  releaseDate: "July 16, 2010",
  genres: ["Action", "Sci-Fi", "Thriller"],
  overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  imageUrl: "https://image.tmdb.org/t/p/original/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
  backdropUrl: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  freeMovieUrl: "https://www.youtube.com/embed/free-movie-id",
  isAvailableForFree: true,
  budget: "$160,000,000",
  revenue: "$836,836,967",
  status: "Released",
  originalLanguage: "English",
  director: {
    name: "Christopher Nolan",
    image: "https://image.tmdb.org/t/p/w500/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg"
  },
  cast: [
    {
      name: "Leonardo DiCaprio",
      role: "Cobb",
      image: "https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg"
    },
    {
      name: "Joseph Gordon-Levitt",
      role: "Arthur",
      image: "https://image.tmdb.org/t/p/w500/4U9G4YwTlIEbAymBaseltS8uqPx.jpg"
    },
    {
      name: "Ellen Page",
      role: "Ariadne",
      image: "https://image.tmdb.org/t/p/w500/5dL5MROP8DhHJVTswuuAABgGxeS.jpg"
    }
  ]
};

const MovieDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <MovieHero {...movieDetails} />

      {/* Content Section */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <CastSection cast={movieDetails.cast} />
            <MediaSection 
              title={movieDetails.title}
              trailerUrl={movieDetails.trailerUrl}
              freeMovieUrl={movieDetails.freeMovieUrl}
              isAvailableForFree={movieDetails.isAvailableForFree}
            />
          </div>

          {/* Sidebar */}
          <MovieSidebar 
            status={movieDetails.status}
            originalLanguage={movieDetails.originalLanguage}
            budget={movieDetails.budget}
            revenue={movieDetails.revenue}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;