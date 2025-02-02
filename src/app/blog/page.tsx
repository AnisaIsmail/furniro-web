import React from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import Header from "../../../public/shophero.png";
import { FaCalendar, FaUserLarge } from 'react-icons/fa6';
import { GiWoodenChair } from 'react-icons/gi';
import Page from '@/app/components/ourpage';
import Field from '@/app/components/feild';

function Blog() {
    return (
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
            {/* Banner Section */}
            <div className="relative">
                <div className="shopsect text-center p-4">
                    {/* Header Image */}
                    <Image
                        src={Header}
                        height={1000}
                        width={1440}
                        alt="header-image"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <h1 className="text-xl md:text-5xl font-semibold">Blog</h1>
                        <div className="mt-4 text-gray-700 text-xs md:text-xl flex items-center">
                            <Link href="/" className="font-bold hover:underline">
                                Home
                            </Link>
                            <span className="font-bold mx-2">{'>'}</span>
                            <Link href="/blog" className="hover:underline">
                                Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Blog Posts Section */}
                <div className="mt-8 lg:ml-4 w-full lg:w-3/4">
                    {/* Single Blog Post */}
                    {[{ image: "/p4.jpeg", title: "Going all-in with millennial design", category: "Crafts", date: "01 Jan 2023" },
                      { image: "/p3.jpeg", title: "Exploring new ways of decorating", category: "Design", date: "15 Mar 2023" },
                      { image: "/p6.jpeg", title: "Handmade pieces that took time to make", category: "Wood", date: "20 Sep 2023" }]
                        .map((post, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg transition-shadow mb-6">
                            <Image
                                src={post.image}
                                height={300}
                                width={500}
                                alt={`Image for ${post.title}`}
                                className="rounded-t-lg w-full"
                            />
                            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
                                <div className="flex items-center space-x-1">
                                    <FaUserLarge />
                                    <p>Admin</p>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <FaCalendar />
                                    <p>{post.date}</p>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <GiWoodenChair />
                                    <p>{post.category}</p>
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
                            <p className="mt-2 text-gray-700 line-clamp-4">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aperiam dolores modi non
                                quas cum nam aliquid molestias iste quod cumque optio tenetur doloribus dignissimos.
                            </p>
                            <Link href={"/"} className="mt-4 block text-primary underline underline-offset-4">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Sidebar Section */}
                <div className="mt-10 w-full lg:w-1/4 p-6 gap-6">
                    {/* Categories */}
                    <div className="p-6 rounded-lg mb-6">
                        <h3 className="text-xl font-bold mb-4">Categories</h3>
                        <ul className="space-y-8 text-gray-500">
                            {[{ name: 'Crafts', count: 2 },
                               { name: 'Design', count: 8 },
                               { name: 'Handmade', count: 7 },
                               { name: 'Interior', count: 1 },
                               { name: 'Wood', count: 6 }]
                                .map((category, index) => (
                                <li key={index} className="flex justify-between text-sm">
                                    <span>{category.name}</span>
                                    <span>{category.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div className="p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                        <div className="space-y-6">
                            {[{ image: '/p2.jpeg', title: 'Going all-in with millennial design', date: '03 Aug 2022' },
                               { image: '/p5.jpeg', title: 'Exploring new ways of decorating', date: '03 Aug 2022' },
                               { image: '/p6.jpeg', title: 'Handmade pieces that took time to make', date: '03 Aug 2022' },
                               { image: '/p1.jpeg', title: 'Modern home in Milan', date: '03 Aug 2022' },
                               { image: '/p7.jpeg', title: 'Colorful office redesign', date: '03 Aug 2022' }]
                                .map((post, index) => (
                                <div key={index} className="flex space-x-3">
                                    <Image src={post.image} height={100} width={100} alt="" />
                                    <div>
                                        <h4 className="text-lg font-semibold">{post.title}</h4>
                                        <p>{post.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="justify-center mx-auto text-center mt-8">
                <Page />
                <Field />
            </div>
        </div>
    );
}

export default Blog;

