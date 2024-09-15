import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const PreOrder = () => {

  const [mobileNumber, setMobileNumber] = useState('');
    const [nameAndQuantity, setNameAndQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPreOrder = {
            mobileNumber: mobileNumber,
            nameAndQuantity: nameAndQuantity,
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/order`, newPreOrder);
            console.log('Pre-order created:', response.data);
        } catch (error) {
            console.error('There was an error creating the pre-order!', error);
        }
    };







  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <label className="p-4 text-2xl font-bold text-gray-800">Pre-Order Now</label>
      <form onSubmit={handleSubmit} className="border border-gray-400 bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <label className="block mb-4 text-lg font-semibold text-gray-700">Form :</label>
        <input
         type="text"
         value={mobileNumber}
         onChange={(e) => setMobileNumber(e.target.value)}
          className="border-2 h-10 w-full mb-4 px-3 py-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          
          placeholder="Enter your mobile number"
        />
        <input
         type="text"
         value={nameAndQuantity}
         onChange={(e) => setNameAndQuantity(e.target.value)}
          className="border-2 h-10 w-full mb-4 px-3 py-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          
          placeholder="Name & Quantity in kg"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md w-full transition duration-300 ease-in-out">
          <Link to={'/'}>Submit</Link>
        </button>
      </form>
    </div>
  )
}

export default PreOrder
