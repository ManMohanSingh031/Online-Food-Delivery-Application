// Description: This file contains the Error component.
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/error.png";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/error", { replace: true });
  }, [navigate]);

  const handleButtonClick = () => {
    navigate("/ ");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 mt-6">
      <h1 className="mb-4 text-2xl font-bold text-red-600">Oops! Something went wrong.</h1>
      <img className="w-64 h-64 mb-4" src={image} alt="Error" />
      <p className="mb-4 text-lg text-gray-700">Sorry, we couldn't find the page you were looking for.</p>
      <button onClick={handleButtonClick} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Go to Home Page</button>
    </div>
  );
};

export default Error;
