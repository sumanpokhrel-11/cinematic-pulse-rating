import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Film, ListChecks, PencilLine, User } from "lucide-react";
import MovieList from "@/components/MovieList";
import TrendingMovies from "@/components/TrendingMovies";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          {/* Profile Info Card */}
          <div className="space-y-6">
            <Card className="relative">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4 h-32 w-32">
                  <Avatar className="h-32 w-32 border-4 border-primary">
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback>
                      <User className="h-16 w-16" />
                    </AvatarFallback>
                  </Avatar>
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 rounded-full bg-primary p-2 text-white hover:bg-primary/90 cursor-pointer"
                  >
                    <Camera className="h-4 w-4" />
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
                <CardTitle className="text-2xl">{name}</CardTitle>
                <CardDescription>Movie Enthusiast</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  <PencilLine className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">42</p>
                    <p className="text-sm text-muted-foreground">Watched</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">15</p>
                    <p className="text-sm text-muted-foreground">Watchlist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Favorite Genres</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Action</span>
                    <span className="text-primary">65%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div className="h-2 w-[65%] rounded-full bg-primary"></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Drama</span>
                    <span className="text-primary">45%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div className="h-2 w-[45%] rounded-full bg-primary"></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Sci-Fi</span>
                    <span className="text-primary">80%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div className="h-2 w-[80%] rounded-full bg-primary"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <Tabs defaultValue="lists" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="lists">My Lists</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="recommendations">For You</TabsTrigger>
              </TabsList>

              <TabsContent value="lists" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Film className="h-5 w-5" />
                      Watchlist
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MovieList type="watchlist" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ListChecks className="h-5 w-5" />
                      Watched Movies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MovieList type="watched" />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your profile information here
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell us about your favorite movies..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recommendations">
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended for You</CardTitle>
                    <CardDescription>
                      Based on your watching history
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TrendingMovies />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;