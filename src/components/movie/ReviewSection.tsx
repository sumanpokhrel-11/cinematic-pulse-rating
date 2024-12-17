import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  author: string;
  rating: number;
  content: string;
  date: string;
  avatarUrl: string;
}

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection = ({ reviews }: ReviewSectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-cinema-primary border-cinema-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img 
                    src={review.avatarUrl} 
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-white">{review.author}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-cinema-accent fill-current" />
                        <span className="text-white">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm mb-2">{review.date}</p>
                    <p className="text-white/90">{review.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;