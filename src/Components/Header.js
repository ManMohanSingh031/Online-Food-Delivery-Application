import React, { useState } from "react";
import Logo from "../assets/checkmate.png";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  XIcon,
  CheckIcon,
  ExclamationIcon,
} from "@heroicons/react/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import UserStatus from "./UserStatus";
import { useSelector } from "react-redux";


const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart?.items);
  console.log(cartItems);
  

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLoginClick = () => {
    setConfirmPopup(true);
  };

  const handleConfirm = () => {
    setConfirmPopup(false);
    setShowPopup(false);
    setIsLoggedIn(true);
    toast.success("Login successful!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleCancel = () => {
    setConfirmPopup(false);
    toast.error("Login Error!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("Logout successful!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <nav className="flex flex-col sm:flex-row items-center justify-between p-6 bg-blue-500">
        <div className="flex flex-col sm:flex-row items-center space-x-10">
          <img src={Logo} alt="Company Logo" className="w-8 h-8" />
          <div>
            <Link to="/" className="text-white">
              Home
            </Link>
          </div>
          <div>
            <Link to="/about" className="text-white">
              About
            </Link>
          </div>
          <div>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <UserStatus />
          </div>
        </div>
        <div className="flex items-center space-x-5 mt-4 sm:mt-0">
          <button className="flex items-center space-x-2 bg-white p-2 rounded relative">
            <ShoppingCartIcon className="w-5 h-5 text-blue-500" />
            <span>({cartItems?.length || 0}Items)</span>
          </button>
          <button
            className="flex items-center space-x-2 bg-white p-2 rounded"
            onClick={isLoggedIn ? handleLogout : handleLoginClick}
          >
            <UserCircleIcon className="w-5 h-5 text-blue-500" />
            <span>{isLoggedIn ? "Logout" : "Login"}</span>
          </button>
        </div>
      </nav>
      {confirmPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg relative">
            <h2 className="text-xl mb-4">Login Confirm?</h2>
            <button
              className="bg-green-500 text-white p-2 rounded mr-2"
              onClick={handleConfirm}
            >
              <CheckIcon className="w-5 h-5 mr-1 inline-block" /> Confirm
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={handleCancel}
            >
              <ExclamationIcon className="w-5 h-5 mr-1 inline-block" /> Not
              Confirm
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Header;
