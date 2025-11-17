import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden border-0 shadow-none hover-lift cursor-pointer">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {category}
          </p>
          <h3 className="font-medium text-lg mb-2">{name}</h3>
          <p className="text-lg font-semibold">${price.toFixed(2)}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
