import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MovieList from "@/components/MovieList";
import { ListChecks } from "lucide-react";

const Watchlist = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="h-5 w-5" />
              My Watchlist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filter === "all"
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  onClick={() => setFilter("all")}
                >
                  All
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filter === "watching"
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  onClick={() => setFilter("watching")}
                >
                  Watching
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    filter === "completed"
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  onClick={() => setFilter("completed")}
                >
                  Completed
                </button>
              </div>
              <MovieList type="watchlist" filter={filter} />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Watchlist;