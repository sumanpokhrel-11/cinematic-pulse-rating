import { Card, CardContent } from "@/components/ui/card";

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
  releaseDate: string;
}

interface RecommendationSectionProps {
  movies: Movie[];
}

const RecommendationSection = ({ movies }: RecommendationSectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Recommendations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <Card key={movie.id} className="bg-cinema-primary border-cinema-primary">
              <div className="aspect-[2/3] relative">
                <img 
                  src={movie.posterUrl} 
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/80">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">{movie.rating}%</span>
                    <span className="text-white/70 text-xs">{movie.releaseDate}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-3">
                <h3 className="font-medium text-white text-sm md:text-base line-clamp-2">{movie.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;