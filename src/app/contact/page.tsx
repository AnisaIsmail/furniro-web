// import React from "react";
// import Image from "next/image";
// import Header from "../../../public/shophero.png";
// import Link from "next/link";
// import { IoLocationSharp } from 'react-icons/io5';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { BsFillClockFill } from 'react-icons/bs';

// export default function Contact() {
//     return (
//         <div>
//             <div className="relative">
//                 {/* Header Image */}
//                 <div className="shopsect text-center p-4 relative">
//                     <Image
//                         src={Header}
//                         height={1000}
//                         width={1440}
//                         alt="header-image"
//                         className="w-full h-auto object-cover"
//                     />
//                     <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
//                         <h1 className="text-2xl md:text-5xl font-semibold text-black">Contact</h1>
//                         {/* Breadcrumb Section */}
//                         <div className="mt-14">
//                             <h2 className="text-gray-700 text-xs md:text-xl flex items-center">
//                                 <Link href="/" className="font-bold hover:underline text-gray-700">Home</Link>
//                                 <span className="font-bold mx-2 text-black">{'>'}</span>
//                                 <Link href="/shop" className="hover:underline text-black">Contact</Link>
//                             </h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Contact Info Section */}
//             <section className="mt-16 text-center px-4 md:px-32">
//                 <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
//                 <p className="mt-4 text-lg text-gray-600">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora libero aut, reiciendis, harum laboriosam quis minus quas maxime delectus sint dolores repudiandae, voluptate rerum nemo non corporis esse aspernatur?
//                 </p>
//             </section>

//             <div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-16">
//                 {/* Contact Details */}
//                 <div className="flex flex-col mt-16 ml-44 gap-8">
//                     <div className="flex items-center space-x-4 my-6">
//                         <div>
//                             <span className="flex">
//                                 <IoLocationSharp size={25} className="text-4xl text-primary" />
//                                 <h3 className="font-semibold text-xl ml-4">Address</h3>
//                             </span>
//                             <p className="ml-10">
//                                 238 5<sup>th</sup> SE Avenue,
//                                 <br /> New York NY10000,
//                                 <br /> United States
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex items-center space-x-4 my-6">
//                         <div>
//                             <span className="flex">
//                                 <FaPhoneAlt size={25} className="text-4xl text-primary" />
//                                 <h3 className="font-semibold ml-4 text-lg">Phone</h3>
//                             </span>
//                             <p className="ml-10">Mobile : +(84)546-6789</p>
//                             <p className="ml-10">Hotline : +(84)546-6789</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center space-x-4 my-6">
//                         <div>
//                             <span className="flex">
//                                 <BsFillClockFill size={25} className="text-4xl text-primary" />
//                                 <h3 className="ml-4 font-semibold text-lg">Working Time</h3>
//                             </span>
//                             <p className="ml-10">Monday-Friday: 9:00 - <br />22:00</p>
//                             <p className="ml-10">Saturday-Sunday: 9:00 - <br />21:00</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Contact Form Section */}
//                 <div className="mt-16 bg-white mr-9 rounded-lg p-8 md:w-1/2">
//                     <form className="space-y-4">
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
//                             <input type="text" id="name" placeholder="Abc" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email Address</label>
//                             <input type="email" id="email" placeholder="Abc@def.com" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
//                         </div>
//                         <div>
//                             <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
//                             <input type="text" id="subject" placeholder="This is optional" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
//                             <textarea id="message" placeholder="Hi, I would like to ask about..." rows={4} className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
//                         </div>
//                     </form>
//                     <button type="submit" className="py-3 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 md:px-6 md:py-3 text-sm md:text-base border border-black rounded-xl mt-8">
//                         Submit
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from "react";
import Image from "next/image";
import Header from "../../../public/shophero.png";
import Link from "next/link";
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';
import Field from "../components/feild";

export default function Contact() {
    return (
        <div>
            <div className="relative">
                {/* Header Image */}
                <div className="shopsect text-center p-4 relative">
                    <Image
                        src={Header}
                        alt="header-image"
                        layout="responsive"
                        height={400} // Maintain aspect ratio
                        width={1440}
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">Contact</h1>
                        {/* Breadcrumb Section */}
                        <div className="mt-4 md:mt-14 text-sm sm:text-base text-gray-700">
                            <Link href="/" className="font-bold hover:underline">Home</Link>
                            <span className="font-bold mx-2 text-black">{'>'}</span>
                            <Link href="/shop" className="hover:underline text-black">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <section className="mt-16 text-center px-4 md:px-32">
                <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora libero aut, reiciendis, harum laboriosam quis minus quas maxime delectus sint dolores repudiandae, voluptate rerum nemo non corporis esse aspernatur?
                </p>
            </section>

            <div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-16 px-4">
                {/* Contact Details */}
                <div className="flex flex-col mt-8 md:mt-16 ml-0 md:ml-12 gap-8 md:w-1/2">
                    <div className="flex items-center space-x-4 my-6">
                        <div>
                            <span className="flex items-center">
                                <IoLocationSharp size={25} className="text-4xl text-primary" />
                                <h3 className="font-semibold text-xl ml-4">Address</h3>
                            </span>
                            <p className="ml-10 text-sm sm:text-base">
                                238 5<sup>th</sup> SE Avenue,<br /> 
                                New York NY10000,<br /> 
                                United States
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 my-6">
                        <div>
                            <span className="flex items-center">
                                <FaPhoneAlt size={25} className="text-4xl text-primary" />
                                <h3 className="font-semibold ml-4 text-lg">Phone</h3>
                            </span>
                            <p className="ml-10 text-sm sm:text-base">Mobile: +(84)546-6789</p>
                            <p className="ml-10 text-sm sm:text-base">Hotline: +(84)546-6789</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 my-6">
                        <div>
                            <span className="flex items-center">
                                <BsFillClockFill size={25} className="text-4xl text-primary" />
                                <h3 className="ml-4 font-semibold text-lg">Working Time</h3>
                            </span>
                            <p className="ml-10 text-sm sm:text-base">Monday-Friday: 9:00 - 22:00</p>
                            <p className="ml-10 text-sm sm:text-base">Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="mt-16 bg-white mr-9 rounded-lg p-8 md:w-1/2">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input type="text" id="name" placeholder="Abc" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" placeholder="Abc@def.com" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input type="text" id="subject" placeholder="This is optional" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea id="message" placeholder="Hi, I would like to ask about..." rows={4} className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                        </div>
                    </form>
                    <button type="submit" className="py-3 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 md:px-6 md:py-3 text-sm md:text-base border border-black rounded-xl mt-8 w-full sm:w-auto">
                        Submit
                    </button>
                </div>          
            </div>
            <Field/>
        </div>
    );
}

