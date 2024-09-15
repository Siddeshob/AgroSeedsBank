import React, { useEffect, useState } from 'react'
import Header from '../Header';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ForPUTreq = () => {

    const {id}=useParams()
    const navigate=useNavigate()

    const [formData, setFormData] = useState({
        imageLink: "",
        itemName: "",
        price: "",
        villageAddress: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        console.log(formData)
      };

      
  useEffect(()=>{
    const fetchCards=async()=>{
      try{
        const response=await fetch(`${process.env.REACT_APP_API_URL}/api/cards/${id}`)
        const data=await response.json()
        setFormData(data)

      }catch(e){
        console.log('from update - - ',e)

      }
    }
    fetchCards()
  },[id])

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
        const response=await fetch(`${process.env.REACT_APP_API_URL}/api/cards/${id}`,{
            method:'PATCH',
            Headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData)
        })
        const data=await response.json()
        setFormData(data)
        navigate('/')

      }catch(e){
        console.log('from update - - ',e)

      }
  }

    
        


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
          <Link to={"/"}>Submit</Link>
        </button>
      </form>
    </div>
    </div>
  )
}

export default ForPUTreq