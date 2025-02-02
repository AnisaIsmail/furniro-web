'use client'
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { allProducts } from "@/sanity/lib/queries";
import AddToCartButton from "@/app/components/AddToCartButton";
import WishlistButton from "@/app/components/wishlistbutton";
import { Product } from "../../../types/products";
import Pagination from "@/app/components/pagination";
import Field from "@/app/components/feild";
import ShopHeader from "@/app/components/shopheader";
import ShopBlow from "@/app/components/shopblow";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Shop = () => {
    const [product, setProduct] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts: Product[] = await client.fetch(allProducts);
            setProduct(fetchedProducts);
        }
        fetchProducts();
    }, []);

    // Calculate which products to display based on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <ShopHeader />
            <ShopBlow />
            <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                    <div key={product._id} className="border rounded-lg shadow-md py-4 hover:shadow-lg transition duration-200">
                        <Link href={`/products/${product.slug.current}`}>
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

                        <div className="ml-14 mt-2 flex flex-col"> {/* Column Layout */}
                            {/* Add to Cart Button and Cart Icon */}
                            <div className="flex items-center mb-2">
                                <AddToCartButton productId={product._id} title={product.title} price={product.price} />
                                <a href="/cart">
                                    <FaShoppingCart className="ml-14" />
                                </a>
                            </div>

                            {/* Wishlist Button and Heart Icon */}
                            <div className="flex items-center">
                                <WishlistButton productId={product._id} productTitle={product.title} />
                                <a href="/wishlist" className="ml-2">
                                    <FaRegHeart className="ml-8" />
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="mb-14">
                {/* Pagination */}
                <Pagination
                    totalProducts={product.length}
                    productsPerPage={productsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
            <div className="mt-14 mb-14 text-center">
                <Field />
            </div>
        </div>
    );
};

export default Shop;