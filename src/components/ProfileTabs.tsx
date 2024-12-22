import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, ListChecks, Plus } from "lucide-react";
import MovieList from "./MovieList";
import TrendingMovies from "./TrendingMovies";
import ProfileInfo from "./ProfileInfo";
import { useState } from "react";

const ProfileTabs = () => {
  const [customLists, setCustomLists] = useState<string[]>([]);

  return (
    <Tabs defaultValue="lists" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-cinema-forest border-cinema-sage/20">
        <TabsTrigger 
          value="lists"
          className="data-[state=active]:bg-cinema-sage data-[state=active]:text-white"
        >
          My Lists
        </TabsTrigger>
        <TabsTrigger 
          value="profile"
          className="data-[state=active]:bg-cinema-sage data-[state=active]:text-white"
        >
          Profile
        </TabsTrigger>
        <TabsTrigger 
          value="recommendations"
          className="data-[state=active]:bg-cinema-sage data-[state=active]:text-white"
        >
          For You
        </TabsTrigger>
      </TabsList>

      <TabsContent value="lists" className="space-y-6">
        <Card className="bg-cinema-forest border-cinema-sage/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cinema-text">
              <Film className="h-5 w-5" />
              Watchlist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MovieList type="watchlist" />
          </CardContent>
        </Card>

        <Card className="bg-cinema-forest border-cinema-sage/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cinema-text">
              <ListChecks className="h-5 w-5" />
              Watched Movies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MovieList type="watched" />
          </CardContent>
        </Card>

        {customLists.map((listName) => (
          <Card key={listName} className="bg-cinema-forest border-cinema-sage/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-cinema-text">
                <Film className="h-5 w-5" />
                {listName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MovieList type="custom" listName={listName} />
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="profile">
        <ProfileInfo />
      </TabsContent>

      <TabsContent value="recommendations">
        <Card className="bg-cinema-forest border-cinema-sage/20">
          <CardHeader>
            <CardTitle className="text-cinema-text">Recommended for You</CardTitle>
            <CardDescription className="text-cinema-text/60">
              Based on your watching history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TrendingMovies />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;