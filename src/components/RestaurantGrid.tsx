import { RestaurantCard } from "./RestaurantCard";

// Mock data - in a real app, this would come from your backend
const restaurants = [
  {
    id: "1",
    name: "Pizza Palace",
    cuisine: "Italian, Pizza",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
    offer: "20% OFF"
  },
  {
    id: "2",
    name: "Burger Barn",
    cuisine: "American, Burgers",
    rating: 4.3,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop"
  },
  {
    id: "3",
    name: "Spice Garden",
    cuisine: "Indian, Curry",
    rating: 4.6,
    deliveryTime: "30-40 min",
    deliveryFee: 3.49,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    offer: "Free Delivery"
  },
  {
    id: "4",
    name: "Noodle House",
    cuisine: "Chinese, Asian",
    rating: 4.2,
    deliveryTime: "15-25 min",
    deliveryFee: 2.49,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=300&fit=crop"
  },
  {
    id: "5",
    name: "Sweet Treats",
    cuisine: "Desserts, Bakery",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=300&fit=crop"
  },
  {
    id: "6",
    name: "Taco Fiesta",
    cuisine: "Mexican, Tacos",
    rating: 4.4,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop",
    offer: "Buy 1 Get 1"
  }
];

interface RestaurantGridProps {
  selectedCategory: string;
}

export const RestaurantGrid = ({ selectedCategory }: RestaurantGridProps) => {
  const filteredRestaurants = selectedCategory === "all" 
    ? restaurants 
    : restaurants.filter(restaurant => 
        restaurant.cuisine.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
};