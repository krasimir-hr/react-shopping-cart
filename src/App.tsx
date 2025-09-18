import { useState } from 'react';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { CartItem } from './types';

function App() {
   const [cart, setCart] = useState<CartItem[]>([]);

   const addToCart = (item: CartItem) => {      
      setCart(prev => {
         const existingItem = prev.find(i => i.id === item.id);

         if (existingItem) {
            return prev.map(i =>
               i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
            );
         }

         return [...prev, { ...item, quantity: item.quantity || 1 }]

      });
   }

   const removeFromCart = (id: number) => {
      setCart((prev) => prev.filter((item) => item.id !== id))
   }

   const updateQuantity = (id: number, newQuantity: number) => {
      setCart(prev =>
         prev.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
         )
      )
   }

   return (
      <div>
         <NavBar cart={cart}/>
         <Outlet context={{ cart, addToCart, removeFromCart, updateQuantity }}/>
         <Footer />
      </div>
   );
}

export default App;
