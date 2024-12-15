import Navbar from "../components/Navbar";
import MovieBanner from "../components/MovieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-cinema-primary">
      <Navbar />
      <main className="pt-16">
        <MovieBanner
          title="Purna Bahadur Ko Sarangi"
          rating={8.0}
          imageUrl="/lovable-uploads/8ee8b52f-606f-419d-a977-41faaf231e80.png"
          director="Saroj Poudel"
          producers={["Binod Poudel", "Patrick Subedi"]}
        />
      </main>
    </div>
  );
};

export default Index;