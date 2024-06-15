import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "http://localhost:8080/api/auth/login",
    //     null,
    //     {
    //       params: {
    //         username,
    //         password
    //       }
    //     }
    //   );

    //   if (response.data === "Login successful") {
    //     navigate("/admin");
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     alert(error.response.data);
    //   } else {
    //     alert("An error occurred. Please try again.");
    //   }
    // }
  };


  console.log(username);
  console.log(password);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <label className="block text-gray-700 text-3xl font-bold mb-2">
          Login
        </label>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          <Link to={"/admin"}>Submit</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
