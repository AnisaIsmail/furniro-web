'use client'
import React, { useEffect, useState } from 'react';
import { sanityFatch } from '@/sanity/lib/fatch';  // Import the sanityFatch function
import { singleProduct } from '@/sanity/lib/queries'; 
import { Product } from '../../../../types/products'; 
import Image from 'next/image'; 
import { urlFor } from '@/sanity/lib/image'; 
import AddToCartButton from '@/app/components/AddToCartButton';
import { FaStar } from 'react-icons/fa';
import QuantityControl from '@/app/components/quantity';
import { useParams } from 'next/navigation'; // Import useParams

const ProductDetail = () => {
  const { id } = useParams(); // Use useParams to get the route parameter

  const [product, setProduct] = useState<Product | null>(null); // State to hold product data
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading

  // Fetch product data when the id changes
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const productData: Product[] = await sanityFatch({
          query: singleProduct(id), // Use the singleProduct query with the id as a parameter
          params: { id },
        });

        if (productData && productData.length > 0) {
          setProduct(productData[0]);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Re-fetch when the `id` changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={500}
              height={500}
              className="h-80 w-full object-cover rounded-lg shadow-md"
            />
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600 mt-4">Product Id: {product._id}</p>
          <p className="text-xl font-semibold text-gray-700 mt-6">
            Price: {product.price ? `$${product.price}` : 'Price not available'}
          </p>

          {/* Rating */}
          <div className="flex items-center mt-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                style={{
                  color: 'yellow',
                  fontSize: '30px',
                  marginRight: '5px',
                }}
              />
            ))}
            <h2 className="ml-2">| Customer Rating</h2>
          </div>

          {/* Size Selector */}
          <div className="mt-6">
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
            <select
              id="size"
              className="mt-2 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {['S', 'M', 'L', 'XL'].map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* Quantity Selector */}
          <QuantityControl />

          {/* Add to Cart & Wishlist Buttons */}
          <div className="mt-6">
            <AddToCartButton 
              productId={product._id} 
              title={product.title} 
              price={product.price} 
            />     
           <a href="/cart" className='bg-green-700 text-white font-semibold ml-12 px-4 py-2 mt-4 rounded-md'> Buy Now</a>
          </div>

          {/* Product Description */}
          <p className="mt-4 font-extralight text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
