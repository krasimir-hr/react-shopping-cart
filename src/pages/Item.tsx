import { useOutletContext, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getProductById, Product } from '../api/products';
import type { OutletContextType } from '../types';

export default function ItemPage() {
   const { id } = useParams();
   const { addToCart } = useOutletContext<OutletContextType>();

   const [product, setProduct] = useState<Product | null>(null);
   const [loading, setLoading] = useState(true);
   const [quantity, setQuantity] = useState<number>(1);

   useEffect(() => {
      async function fetchData() {
         if (!id) return;
         const data = await getProductById(id);
         setProduct(data);
         setLoading(false);
      }
      fetchData();
   }, [id]);

   if (!product) {
      return <div>Product not found.</div>;
   }

   const handleAddToCart = () => {
      addToCart({
         id: product.id,
         name: product.title,
         price: product.price,
         image: product.image,
         quantity: quantity,
      })
   }

   if (loading) {
      return (
         <div className="flex justify-center items-center h-[70vh]">
            <p className="text-xl">Loading products...</p>
         </div>
      );
   }

   return (
      <div className="h-[100vh]">
         <div className="mt-[140px] gap-20 flex mx-auto justify-center w-[1100px]">
            <div>
               <img src={product.image} alt="" className="w-[600px] h-[600px] object-contain" />
            </div>

            <div className="w-2/5 flex flex-col justify-evenly">
               <h3 className="text-[30px] font-body ]">{product.title}</h3>
               <p className="font-body text-[20px]">${product.price.toFixed(2)}</p>
               <p className="font-body">{product.description}</p>
               <div>
                  <div className="flex justify-between border-b-[1px] border-t-[1px] border-black py-3">
                     <p className="font-menu text-[13px]">Rating</p>
                     <p className="mr-5">{product.rating.rate.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-black py-3">
                     <p className="font-menu text-[13px]">Times rated</p>
                     <p className="mr-5">{product.rating.count}</p>
                  </div>
               </div>

               <div className="flex items-center font-body border-[1px] border-black focus-within:outline focus-within:outline-2 p-1 text-sm justify-between w-[170px]">
                  <span>Quantity</span>
                  <input
                     type="number"
                     value={quantity}
                     onChange={e =>setQuantity(Number(e.target.value))}
                     name="quantity-input"
                     id="quantity-input"
                     className="py-2 border-0 border-black focus:outline-none ml-3 text-xs w-[80px]"
                  />
               </div>

               <button 
                  onClick={handleAddToCart}
                  className="bg-black text-white w-full uppercase font-menu text-[13px] py-[2px] ">
                  Add to Cart
               </button>
            </div>
         </div>
      </div>
   );
}
