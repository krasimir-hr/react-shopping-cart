import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ItemCard from '../components/ItemCard';
import { getProducts } from '../api/products';
import sceneryWide from '../assets/scenery-wide.png';
import type { OutletContextType } from '../types';
import { useOutletContext } from 'react-router-dom';

export default function Shop() {
   const [products, setProducts] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);
   const { cart } = useOutletContext<OutletContextType>();

   useEffect(() => {
      async function fetchData() {
         const data = await getProducts();
         setProducts(data);
         setLoading(false);
      }
      fetchData();
   }, []);

   if (loading) {
      return (
         <div className="flex justify-center items-center h-[70vh]">
            <p className="text-xl">Loading products...</p>
         </div>
      );
   }

   return (
      <div className="mb-[40px]">
         <NavBar cart={cart} />
         <div className="h-[320px] w-11/12 mx-auto my-10 mt-20 ">
            <img src={sceneryWide} className="h-full w-full object-cover" alt="" />
         </div>
         <h2 className="text-center text-[48px] font-body mb-[50px]">Summer Collection</h2>
         <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-10/12 mx-auto">
            {products.map((product) => (
               <ItemCard key={product.id} product={product} />
            ))}
         </div>
      </div>
   );
}
