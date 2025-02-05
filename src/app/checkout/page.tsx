'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from "@/app/redux/cartslice";

const CheckoutForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    paymentMethod: '', // Can be 'cash' or 'online'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // 'cash' or 'online' based on radio selection
    }));
  };

  const handleProceedToPayment = () => {
    // Assuming payment success
    alert("Payment Successful! Your Order is Confirm~");
    // Clear the cart from redux
    dispatch(removeFromCart({}));
    // Clear cart from local storage
    localStorage.removeItem('cart');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-xl mt-10">
      <h1 className='font-bold text-3xl text-center'>CheckOut</h1>
      <h1 className="font-semibold text-center mt-4 mb-6">Order Delivery detail</h1>
      
      <form>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Address Field */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
        </div>

        {/* Payment Method Radio Buttons */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Select Payment Method</label>
          
          {/* Cash Payment Option */}
          <div className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={formData.paymentMethod === 'cash'}
              onChange={handleChange}
              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label className="ml-2 text-lg font-medium">Cash Payment</label>
          </div>
          
          {/* Online Payment Option */}
          <div className="flex items-center mt-4">
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={formData.paymentMethod === 'online'}
              onChange={handleChange}
              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label className="ml-2 text-lg font-medium">Online Payment</label>
          </div>
        </div>

        {/* Proceed to Payment Button */}
        <div className="flex justify-center py-4">
          <button
            type="button"
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;