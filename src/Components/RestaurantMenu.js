import { useParams } from "react-router-dom";
import { ITEM_IMG_CDN_URL } from "../../Constant";
import { ShimmerMenuCard } from "./ShimmerCard";
import  useRestaurentMenu  from "../utils/useRestaurentMenu";
import { useDispatch } from "react-redux";
import{ addToCart, removeFromCart, clearToCart } from "../utils/cartSlice";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurant, menuItems } = useRestaurentMenu(resId);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addToCart(item));

  };
  

   
  return !restaurant ? (
    <ShimmerMenuCard />
  ) : (
    <div className="flex justify-center">
      <div className="w-full md:w-1/2">
        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <img
            className="w-64 h-64 object-cover"
            src={ITEM_IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className="w-2/2 pl-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-center">{restaurant?.name}</h2>
            <p className="text-sm text-gray-500 text-center">
              {restaurant?.cuisines?.join(", ")}
            </p>
            <p className="text-lg font-semibold text-center">
              {restaurant?.avgRating}
            </p>
            <div className="text-sm text-gray-500 text-center">
              {restaurant?.sla?.slaString}
            </div>
            <div className="text-sm text-gray-500 text-center">
              {restaurant?.costForTwoMessage}
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-xl font-bold">Recommended</h3>
            <p className="text-sm text-gray-500">{menuItems.length} ITEMS</p>
          </div>
          <div>
            {menuItems.map((item) => (
              <div
                key={item?.id}
                className="flex flex-col md:flex-row items-center justify-between mb-4 bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="w-full md:w-2/3 p-4">
                  <h3 className="text-lg font-bold">{item?.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="text-sm text-gray-500">{item?.description}</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center">
                  {item?.imageId && (
                    <img
                      className="w-16 h-16 object-cover mr-4"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="px-4 py-2 bg-blue-500 text-white rounded self-center md:self-auto mt-4 md:mt-0" 
                   onClick={() => handleAddItems(item)}>
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
