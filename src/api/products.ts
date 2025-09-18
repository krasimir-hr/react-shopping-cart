export type Product = {
   id: number;
   title: string;
   description: string;
   image: string;
   price: number;
   category: string;
   rating: {
      rate: number;
      count: number;
   };
}

export async function getProducts() {
   const url = 'https://fakestoreapi.com/products';
   const response = await fetch(url);

   if (!response.ok) {
      throw new Error("Failed to fetch products.");
   }
   const data = await response.json();
   console.log(data);
   return data;
}

export async function getProductById(id: number) {
   const url = 'https://fakestoreapi.com/products/'
   const response = await fetch(url + id);
   if (!response.ok) {
      throw new Error("Failed to fetch product.");
   }
   const data = await response.json();
   return data;
}
