import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Card from "../Card";
import useCardFetch from "../../CustomHooks/useCardFetch";
import Header from "../Header";

const Admin = ({}) => {

 

  const [formData, setFormData] = useState({
    imageLink: "",
    itemName: "",
    price: "",
    villageAddress: "",
  });

  //const history=useHistory()

  // const changeImageLinkHandler = (e) => {
  //   const{imageLink,value}= e.target;
  //   setFormData({
  //     ...formData,
  //     [imageLink]:value,
  //   }
  //   )
  // };

  // const changeItemNameHandle = (e) => {
  //   const{itemName,value} = e.target;
  //   setFormData({
  //     ...formData,
  //     [itemName]:value,
  //   })
  // };

  // const changePriceHandle = (e) => {
  //   const{price,value} = e.target;
  //   setFormData({
  //     ...formData,
  //     [price]:value,
  //   })
  // };

  // const ChangleVillageAddressHandle = (e) => {
  //   const{villageAddress,value} = e.target;
  //   setFormData({
  //     ...formData,
  //     [villageAddress]:value,
  //     })
  // };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData)
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response= await fetch('http://localhost:8080/api/cards',
                      {
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify(formData),
                      }
                    )
      const json= await response.json();
      console.log(json)
      console.log(response)
      if(response.status==200)
      {
        alert('created')
      }

    } catch (error) {
      console.error('Error:', error);
      alert(error);
    }
  };

  return (
    <div>
      <Header/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
        <label className="block text-gray-500 text-3xl font-bold mb-2">
          Create new Item
        </label>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="img-link"
          >
            Image Link
          </label>
          <input
            //onChange={handleChange}
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="item-name"
          >
            Item Name
          </label>
          <input
            // onChange={handleChange}
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            //onChange={handleChange}
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Village Address
          </label>
          <input
            //onChange={handleChange}
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
          {/* submit */}
          <Link to={"/adminHome"}>Create</Link>
        </button>
      </form>
    </div>
    </div>
  );
};

export default Admin;
