export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type OutletContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
};