import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ProfileInfo = () => {
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("");

  return (
    <Card className="bg-cinema-forest border-cinema-sage/20">
      <CardHeader>
        <CardTitle className="text-cinema-text">Profile Information</CardTitle>
        <CardDescription className="text-cinema-text/60">
          Update your profile information here
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-cinema-text">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-cinema-forest border-cinema-sage/20 text-cinema-text"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio" className="text-cinema-text">Bio</Label>
          <Textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about your favorite movies..."
            className="bg-cinema-forest border-cinema-sage/20 text-cinema-text"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileInfo;