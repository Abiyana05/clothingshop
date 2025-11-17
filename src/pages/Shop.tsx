import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productsData from "@/data/products.json";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [filter, setFilter] = useState<string>(categoryFilter || "all");

  useEffect(() => {
    if (categoryFilter) {
      setFilter(categoryFilter);
    }
  }, [categoryFilter]);

  const filteredProducts = filter === "all" 
    ? productsData 
    : productsData.filter(product => product.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Collection</h1>
          <p className="text-lg text-muted-foreground">Discover our curated selection</p>
        </div>

        <div className="flex gap-4 mb-8 flex-wrap">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "men" ? "default" : "outline"}
            onClick={() => setFilter("men")}
          >
            Men
          </Button>
          <Button
            variant={filter === "women" ? "default" : "outline"}
            onClick={() => setFilter("women")}
          >
            Women
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
