// Desc: This is the Cart component. It is used to display the items in the cart and also to remove the items from the cart.
import React from 'react'
import { ITEM_IMG_CDN_URL } from "../../Constant";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearToCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearToCart());
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold my-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-xl">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between mb-4 bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-2/3 p-4">
            <div className="w-full md:w-2/3 p-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {item.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency", 
                      currency: "INR",
                    }).format(item.price / 100)
                  : " "}
              </p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center">
              {item.imageId && (
                <img
                  className="w-16 h-16 object-cover mr-4"
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item.name}
                />
              )}
              <button className="px-4 py-2 bg-red-500 text-white rounded self-center md:self-auto mt-4 md:mt-0" 
               onClick={() => handleRemoveItem(item)}>
                REMOVE
              </button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button className="px-4 py-2 bg-red-500 text-white rounded self-center md:self-auto mt-4 md:mt-0" 
         onClick={handleClearCart}>
          CLEAR CART
        </button>
      )}
    </div>
  ) 
}

export default Cart;

