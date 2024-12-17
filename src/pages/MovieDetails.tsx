import Navbar from "@/components/Navbar";
import MovieHero from "@/components/movie/MovieHero";
import CastSection from "@/components/movie/CastSection";
import MediaSection from "@/components/movie/MediaSection";
import MovieSidebar from "@/components/movie/MovieSidebar";
import ReviewSection from "@/components/movie/ReviewSection";
import RecommendationSection from "@/components/movie/RecommendationSection";

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
    },
    {
      name: "Tom Hardy",
      role: "Eames",
      image: "https://image.tmdb.org/t/p/w500/yHG6piv1Fs3UhLk6LGxGrq4YYMS.jpg"
    },
    {
      name: "Ken Watanabe",
      role: "Saito",
      image: "https://image.tmdb.org/t/p/w500/psAXOYp9SBOXvg6AXzARDedNQ9P.jpg"
    }
  ],
  reviews: [
    {
      author: "John Doe",
      rating: 9,
      content: "A masterpiece of modern cinema that challenges the boundaries of imagination and reality.",
      date: "February 15, 2024",
      avatarUrl: "https://i.pravatar.cc/150?img=1"
    },
    {
      author: "Jane Smith",
      rating: 8.5,
      content: "Christopher Nolan outdoes himself with this mind-bending thriller that keeps you guessing until the end.",
      date: "February 10, 2024",
      avatarUrl: "https://i.pravatar.cc/150?img=2"
    }
  ],
  recommendations: [
    {
      id: 2,
      title: "The Matrix",
      posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      rating: 88,
      releaseDate: "1999"
    },
    {
      id: 3,
      title: "Interstellar",
      posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      rating: 84,
      releaseDate: "2014"
    },
    {
      id: 4,
      title: "The Prestige",
      posterUrl: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTu8lL1zUhSZ.jpg",
      rating: 82,
      releaseDate: "2006"
    },
    {
      id: 5,
      title: "Shutter Island",
      posterUrl: "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
      rating: 83,
      releaseDate: "2010"
    }
  ]
};

const MovieDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <MovieHero {...movieDetails} />

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
            <ReviewSection reviews={movieDetails.reviews} />
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

      {/* Recommendations Section - Full Width */}
      <RecommendationSection movies={movieDetails.recommendations} />
    </div>
  );
};

export default MovieDetails;