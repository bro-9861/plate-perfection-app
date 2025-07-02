import { Star, Clock, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  offer?: string;
}

export const RestaurantCard = ({
  name,
  cuisine,
  rating,
  deliveryTime,
  deliveryFee,
  image,
  offer
}: RestaurantCardProps) => {
  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 cursor-pointer overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {offer && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
            {offer}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{cuisine}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="flex items-center space-x-1 bg-success/10 px-2 py-1 rounded">
                  <Star className="w-3 h-3 fill-success text-success" />
                  <span className="text-success font-medium">{rating}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{deliveryTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Truck className="w-3 h-3" />
              <span>${deliveryFee}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};