import React from 'react'

const PreOrder = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <label className="p-4 text-2xl font-bold text-gray-800">Pre-Order Now</label>
      <form className="border border-gray-400 bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <label className="block mb-4 text-lg font-semibold text-gray-700">Form :</label>
        <input
          className="border-2 h-10 w-full mb-4 px-3 py-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your mobile number"
        />
        <input
          className="border-2 h-10 w-full mb-4 px-3 py-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Quantity in kg"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md w-full transition duration-300 ease-in-out">
          Submit
        </button>
      </form>
    </div>
  )
}

export default PreOrder
