import { CircleDot } from "lucide-react";

interface MovieSidebarProps {
  status: string;
  originalLanguage: string;
  budget: string;
  revenue: string;
}

const MovieSidebar = ({ status, originalLanguage, budget, revenue }: MovieSidebarProps) => {
  return (
    <div className="space-y-8 px-4 md:px-0">
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <CircleDot className="w-4 h-4 text-cinema-accent" />
          <span className="text-white font-medium">Status</span>
          <span className="text-white/70">{status}</span>
        </div>

        <div>
          <h3 className="text-white font-medium mb-1">Original Language</h3>
          <p className="text-white/70">{originalLanguage}</p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-1">Budget</h3>
          <p className="text-white/70">{budget}</p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-1">Revenue</h3>
          <p className="text-white/70">{revenue}</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Keywords</h2>
        <div className="flex flex-wrap gap-2">
          {["dream", "subconscious", "thief", "corporate espionage", "inception"].map((keyword) => (
            <span
              key={keyword}
              className="px-3 py-1 bg-cinema-primary text-cinema-text text-sm rounded-full border border-cinema-accent"
            >
              {keyword}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieSidebar;