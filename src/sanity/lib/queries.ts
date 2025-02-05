import {  groq } from "next-sanity";

export const allProducts = groq `*[_type == "product"]`; 
export const four = groq `*[_type == "product"][0..7]`

export const singleProduct = (id: string) => `
  *[_type == "product" && _id == "${id}"] {
    _id,
    title,
    description,
    price,
    productImage
  }
`;
