import {  groq } from "next-sanity";

export const allProducts = groq `*[_type == "product"]`; 
export const four = groq `*[_type == "product"][0..7]`

export const singleProduct = (slug: string) => `
  *[_type == "product" && slug.current == "${slug}"] {
    _id,
    title,
    description,
    price,
    slug,
    productImage
  }
`;
