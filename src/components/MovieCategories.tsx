import { Film, Flame, Clock, Star, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const categories = [
  {
    title: "Action",
    count: 245,
    icon: <Flame className="w-8 h-8 text-cinema-accent" />,
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Drama",
    count: 189,
    icon: <Star className="w-8 h-8 text-cinema-accent" />,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Comedy",
    count: 167,
    icon: <Film className="w-8 h-8 text-cinema-accent" />,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Coming Soon",
    count: 42,
    icon: <Calendar className="w-8 h-8 text-cinema-accent" />,
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
];

const MovieCategories = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-cinema-text">Explore Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card 
            key={category.title}
            className={`group bg-gradient-to-br ${category.gradient} border-none hover:scale-105 transition-transform duration-300 cursor-pointer`}
          >
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-cinema-text">{category.title}</h3>
              <p className="text-sm text-cinema-text/80">{category.count} movies</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MovieCategories;