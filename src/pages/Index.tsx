import { useState } from "react";
import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { RestaurantGrid } from "@/components/RestaurantGrid";
import { AdminButton } from "@/components/AdminButton";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="text-center py-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Delicious Food, <span className="text-primary">Delivered Fast</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Order from your favorite restaurants and get fresh, hot meals delivered to your doorstep in minutes.
          </p>
        </section>

        {/* Category Filter */}
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Restaurant Grid */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            {selectedCategory === "all" ? "All Restaurants" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Restaurants`}
          </h2>
          <RestaurantGrid selectedCategory={selectedCategory} />
        </section>
      </main>

      <AdminButton />
    </div>
  );
};

export default Index;
