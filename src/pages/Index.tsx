import Navbar from "../components/Navbar";
import TrendingMovies from "../components/TrendingMovies";
import FeaturedCarousel from "../components/FeaturedCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-cinema-primary">
      <Navbar />
      <main className="pt-16">
        <FeaturedCarousel />
        <TrendingMovies />
      </main>
    </div>
  );
};

export default Index;