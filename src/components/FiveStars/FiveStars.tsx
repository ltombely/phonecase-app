import { Star } from "lucide-react";

export default function FiveStars() {
  return <div className="flex gap-0.5" data-testid="star-group">
    <Star className="h-4 w-4  text-green-600 fill-green-600" />
    <Star className="h-4 w-4 text-green-600 fill-green-600" />
    <Star className="h-4 w-4 text-green-600 fill-green-600" />
    <Star className="h-4 w-4 text-green-600 fill-green-600" />
    <Star className="h-4 w-4 text-green-600 fill-green-600" />
  </div>;
}