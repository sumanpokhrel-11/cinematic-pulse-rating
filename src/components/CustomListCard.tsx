import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Film } from "lucide-react";
import MovieList from "./MovieList";

interface CustomListCardProps {
  listName: string;
}

const CustomListCard = ({ listName }: CustomListCardProps) => {
  return (
    <Card className="bg-cinema-forest border-cinema-sage/20">
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
  );
};

export default CustomListCard;