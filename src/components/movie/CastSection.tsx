import { Card, CardContent } from "@/components/ui/card";

interface CastMember {
  name: string;
  role: string;
  image: string;
}

interface CastSectionProps {
  cast: CastMember[];
}

const CastSection = ({ cast }: CastSectionProps) => {
  return (
    <section className="py-12 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8">Top Billed Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {cast.map((actor) => (
            <Card key={actor.name} className="bg-cinema-primary border-cinema-primary overflow-hidden">
              <div className="aspect-[2/3] relative">
                <img 
                  src={actor.image} 
                  alt={actor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-white text-sm md:text-base mb-1">{actor.name}</h3>
                <p className="text-xs md:text-sm text-white/60">{actor.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CastSection;