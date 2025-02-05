export interface Product {
  image: string;
  _id: string;
  title: string;
  description: string;
  price: number 
   slug: { current: string };
  productImage: any;  // You can adjust the type based on your image handling
}

  