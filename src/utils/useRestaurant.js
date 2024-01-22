import { useState , useEffect } from "react";
import { Swiggy_API_URL } from "../../Constant";

const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const response = await fetch(Swiggy_API_URL);
      const json = await response.json();
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(json);
      setRestaurant(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }
  return { restaurant, filteredRestaurants, setFilteredRestaurants };
};

export default useRestaurant;

