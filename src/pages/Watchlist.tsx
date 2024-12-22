import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MovieList from "@/components/MovieList";
import { ListChecks, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Watchlist = () => {
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { value: "all", label: "All Movies" },
    { value: "inWatchlist", label: "In Watchlist" },
    { value: "watched", label: "Watched" },
    { value: "favorite", label: "Favorites" },
  ];

  return (
    <div className="min-h-screen bg-cinema-forest pt-20">
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-cinema-forest border-cinema-sage/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-white">
                <ListChecks className="h-6 w-6 text-cinema-sage" />
                My Watchlist
              </CardTitle>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="bg-cinema-sage/20 border-cinema-sage/50 hover:bg-cinema-sage/30 hover:border-cinema-sage text-white"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-cinema-forest border-cinema-sage/20">
                  {filterOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      className="text-white hover:text-cinema-sage focus:text-cinema-sage focus:bg-cinema-sage/10"
                      onClick={() => setFilter(option.value)}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <MovieList type="watchlist" filter={filter} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Watchlist;