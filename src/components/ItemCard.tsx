import { Link } from 'react-router-dom';
import { Product } from '../api/products';

type ItemCardProps = {
   product: Product;
};

export default function ItemCard({ product }: ItemCardProps) {
   return (
      <Link to={`/shop/${product.id}`}>
         <div className="group cursor-pointer">
            <img src={product.image} alt={product.title} className="w-[250px] h-[250px] object-contain mb-7" />
            <h3 className="font-body text-xl mb-4 truncate group-hover:opacity-70 transition-opacity duration-300">
               {product.title}
            </h3>
            <p className="font-menu text-[13px] mb-4">${product.price.toFixed(2)}</p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-menu text-[13px]">
               Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
         </div>
      </Link>
   );
}
