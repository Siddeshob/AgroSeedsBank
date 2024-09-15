import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";

const Admin = () => {
  const [formData, setFormData] = useState({
    id: null, // Include the id for PUT requests
    imageLink: "",
    itemName: "",
    price: "",
    villageAddress: "",
  });

  const navigate = useNavigate();
  const { id } = useParams(); // Get the id from the URL if it's provided

  useEffect(() => {
    if (id) {
      // Fetch the existing item if an id is present
      fetchItemById(id);
    }
  }, [id]);

  const fetchItemById = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/cards/${id}`);
      const item = await response.json();
      setFormData(item); // Populate the form with the existing item's data
    } catch (error) {
      console.error("Error fetching item:", error);
      alert("Failed to fetch the item.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const url = formData.id
        ? `${process.env.REACT_APP_API_URL}/api/cards/${formData.id}` // PUT request URL
        : `${process.env.REACT_APP_API_URL}/api/cards`; // POST request URL

      const method = formData.id ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      console.log(json);
      console.log(response);

      if (response.status === 200 || response.status === 201) {
        alert(formData.id ? "Updated successfully" : "Created successfully");
        navigate("/adminHome"); // Navigate after successful creation or update
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating or updating item");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
          <label className="block text-gray-500 text-3xl font-bold mb-2">
            {formData.id ? "Update Item" : "Create new Item"}
          </label>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="img-link">
              Image Link
            </label>
            <input
              value={formData.imageLink}
              onChange={handleChange}
              type="text"
              name="imageLink"
              id="img-link"
              placeholder="Put Img-Link"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item-name">
              Item Name
            </label>
            <input
              value={formData.itemName}
              onChange={handleChange}
              name="itemName"
              type="text"
              id="item-name"
              placeholder="Enter Item Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              value={formData.price}
              onChange={handleChange}
              name="price"
              type="text"
              id="price"
              placeholder="Enter Price"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Village Address
            </label>
            <input
              value={formData.villageAddress}
              onChange={handleChange}
              name="villageAddress"
              type="text"
              id="address"
              placeholder="Village Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {formData.id ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
