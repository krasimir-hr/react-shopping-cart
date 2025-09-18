import NavBar from '../components/NavBar';
import { useOutletContext } from 'react-router-dom';
import { OutletContextType } from '../types';
import { Link } from 'react-router-dom';

export default function Cart() {
   const { cart, removeFromCart, updateQuantity } = useOutletContext<OutletContextType>();

   if (cart.length === 0) {
      return <div className="mt-[500px] text-center">Your cart is empty.</div>;
   }

   return (
      <div className="min-h-[70vh]">
         <div className="mt-[150px] mx-auto w-[950px]">
            <h3 className="font-body text-[20px] text-center mb-20">Your Cart</h3>
            <div>
               <div>
                  {cart.map((item) => (
                     <div className="grid grid-cols-[150px_3fr_1fr_1fr] gap-[40px] border-t-[1px] border-black py-5 last:border-b-[1px] last:border-b-black">
                        <img className="h-[120px]" src={item.image} alt="" />
                        <div className="my-auto">
                           <p className="font-body text-[24px]">{item.name}</p>
                           <button className="font-menu text-[12px] uppercase " onClick={() => removeFromCart(item.id)}>
                              Remove
                           </button>
                        </div>
                        <div className="flex items-center font-body border-[1px] border-black focus-within:outline focus-within:outline-2 p-1 text-[12px]  justify-between h-[38px] my-auto w-[80px]">
                           <span>Qty.</span>
                           <input
                              type="number"
                              value={item.quantity}
                              name="quantity-input"
                              id="quantity-input"
                              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                              className="py-2 border-0 border-black focus:outline-none ml-3 text-[13px] w-[30px]"
                           />
                        </div>
                        <p className="my-auto ml-auto font-body text-[20px]">
                           ${(item.price * item.quantity).toFixed(2)}
                        </p>
                     </div>
                  ))}
               </div>
               <div className='w-1/2 ml-auto mt-[50px]'>
                  <div className="flex items-center justify-between mb-[30px]">
                     <p className="font-menu uppercase text-[13px]">Subtotal</p>
                     <p className="font-body text-[20px]">
                        ${cart.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}
                     </p>
                  </div>
                  <p className='font-menu text-xs'>
                     Taxes and shipping calculated at checkout. By proceeding with your order, you accept our Shipping &
                     Returns policies.
                  </p>
                  <div className='font-menu flex justify-between mt-[30px] mb-[200px]'>
                     <Link to="/shop" className='border-[1px] border-black uppercase text-[13px] py-1 w-[45%] text-center'>
                        Continue shopping
                     </Link>
                     <button className='bg-black text-white uppercase text-[13px] w-[45%] border-[1px] border-black'>
                        Checkout
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
