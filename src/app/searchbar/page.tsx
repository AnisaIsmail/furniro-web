'use client'
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../../types/products";
import SearchBar from "@/app/components/searchbar";

const SProduct = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProducts);
      setFilteredProducts(fetchedProducts); 
    }
    fetchProducts();
  }, []);

  // Handle search
  const handleSearch = (query: string) => {
    if (!query) {
      // If the search query is empty, show all products
      setFilteredProducts(product);
    } else {
      const filtered = product.filter((prod) =>
        prod.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="max-w-61 mx-auto px-4 py-8 ml-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Search Product here</h1>

      {/* SearchBar component */}
      <SearchBar onSearch={handleSearch} />

      {/* Product Grid */}
      <h1 className="font-bold text-center text-3xl mb-10">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="border rounded-lg shadow-md py-4 hover:shadow-lg transition duration-200">
              <Link href={`/products/${product._id}`}>
                {product.productImage && (
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-md bg-opacity-50 opacity-100 hover:opacity-50 transition-opacity duration-300"
                  />
                )}
                <h2 className="text-lg font-semibold ml-2 mt-4">{product.title}</h2>
                <p className="text-gray-500 font-bold ml-2 mt-2">{product.price ? `$${product.price}` : "Price not available"}</p>
              </Link>
              
            
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SProduct;