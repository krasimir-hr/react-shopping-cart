import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import type { CartItem } from '../App';

type NavBarProps = {
   cart: CartItem[];
}

export default function NavBar( {cart}: NavBarProps ) {
   const location = useLocation();
   return (
      location.pathname === '/' ? (
         <nav className="grid grid-cols-3  h-[61px] font-menu text-[13px] px-8 py-2 items-center absolute inset bg-white/0 hover:bg-white/100 transition-colors duration-300 w-full">
            <ul className=" inline-flex gap-10 justify-self-start">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/shop">Shop</Link>
               </li>
            </ul>               
         </nav>
      ) : (
         <nav className="grid grid-cols-3  font-menu text-[13px] px-8 py-2 items-center  inset bg-white/100 w-full fixed top-0 left- 0">
            <ul className=" inline-flex gap-10 justify-self-start">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/shop">Shop</Link>
               </li>
            </ul>
                  <h1 className="font-heading text-[30px] font-semibold justify-self-center text-center">befitting.</h1>
                  <div className="justify-self-end">
                     <Link to="/cart">Cart {cart.reduce((total, item) => total + item.quantity, 0)} </Link>
                  </div>
         </nav>
   ))
}
