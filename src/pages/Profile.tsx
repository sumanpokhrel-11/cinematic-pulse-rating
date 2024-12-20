import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, PencilLine, User } from "lucide-react";
import { useState } from "react";
import ProfileTabs from "@/components/ProfileTabs";

const Profile = () => {
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
    <div className="min-h-screen bg-cinema-forest pt-20">
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          {/* Profile Info Card */}
          <div className="space-y-6">
            <Card className="bg-cinema-forest border-cinema-sage/20">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4 h-32 w-32">
                  <Avatar className="h-32 w-32 border-4 border-cinema-sage">
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback className="bg-cinema-sage/20">
                      <User className="h-16 w-16 text-cinema-sage" />
                    </AvatarFallback>
                  </Avatar>
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 rounded-full bg-cinema-sage p-2 text-white hover:bg-cinema-sage/90 cursor-pointer"
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
                <CardTitle className="text-2xl text-cinema-text">John Doe</CardTitle>
                <CardDescription className="text-cinema-text/60">Movie Enthusiast</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full border-cinema-sage text-cinema-sage hover:bg-cinema-sage/10">
                  <PencilLine className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-cinema-text">42</p>
                    <p className="text-sm text-cinema-text/60">Watched</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-cinema-text">15</p>
                    <p className="text-sm text-cinema-text/60">Watchlist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-cinema-forest border-cinema-sage/20">
              <CardHeader>
                <CardTitle className="text-cinema-text">Favorite Genres</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-cinema-text">
                    <span>Action</span>
                    <span className="text-cinema-sage">65%</span>
                  </div>
                  <div className="h-2 rounded-full bg-cinema-sage/20">
                    <div className="h-2 w-[65%] rounded-full bg-cinema-sage"></div>
                  </div>
                  <div className="flex justify-between text-cinema-text">
                    <span>Drama</span>
                    <span className="text-cinema-sage">45%</span>
                  </div>
                  <div className="h-2 rounded-full bg-cinema-sage/20">
                    <div className="h-2 w-[45%] rounded-full bg-cinema-sage"></div>
                  </div>
                  <div className="flex justify-between text-cinema-text">
                    <span>Sci-Fi</span>
                    <span className="text-cinema-sage">80%</span>
                  </div>
                  <div className="h-2 rounded-full bg-cinema-sage/20">
                    <div className="h-2 w-[80%] rounded-full bg-cinema-sage"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <ProfileTabs />
        </div>
      </main>
    </div>
  );
};

export default Profile;