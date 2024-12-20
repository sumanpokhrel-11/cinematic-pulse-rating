import FeaturedCarousel from "@/components/FeaturedCarousel";
import LatestReleases from "@/components/LatestReleases";
import MovieCategories from "@/components/MovieCategories";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-cinema-forest pt-16">
      <main className="space-y-12">
        <FeaturedCarousel />
        <LatestReleases />
        <MovieCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Home;