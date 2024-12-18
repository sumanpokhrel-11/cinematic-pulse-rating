import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingMovies from "../components/TrendingMovies";
import FeaturedCarousel from "../components/FeaturedCarousel";
import MovieCategories from "../components/MovieCategories";
import LatestReleases from "../components/LatestReleases";

const Index = () => {
  return (
    <div className="min-h-screen bg-cinema-primary">
      <Navbar />
      <main className="pt-16">
        <FeaturedCarousel />
        <MovieCategories />
        <LatestReleases />
        <TrendingMovies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;