import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MovieBanner from "@/components/MovieBanner";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import LatestReleases from "@/components/LatestReleases";
import MovieCategories from "@/components/MovieCategories";

const Home = () => {
  const featuredMovie = {
    title: "The Dark Knight",
    rating: 9.0,
    imageUrl: "/placeholder.svg",
    director: "Christopher Nolan",
    producers: ["Emma Thomas", "Charles Roven"]
  };

  return (
    <div className="min-h-screen bg-background">
      <MovieBanner {...featuredMovie} />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        <FeaturedCarousel />
        
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Latest Releases</h2>
            <Button variant="outline" asChild>
              <Link to="/movies">View All</Link>
            </Button>
          </div>
          <LatestReleases />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Browse by Category</h2>
          <MovieCategories />
        </section>
      </main>
    </div>
  );
};

export default Home;