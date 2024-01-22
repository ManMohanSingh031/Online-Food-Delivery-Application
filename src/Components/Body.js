// Desc: This file contains the Body component which is the main component of the app.
import React from 'react';
import RestaurantCard from './RestaurantCard';
import SearchBar from './Searchbar';
import { ShimmerCards } from './ShimmerCard';
import { filterData } from '../utils/Helper';
import useRestaurant from '../utils/useRestaurant';

const Body = () => {
  const { restaurant, filteredRestaurants, setFilteredRestaurants } = useRestaurant();

  return (
    <>
     <div className="bg-gray-200">
      <SearchBar
        setFilteredRestaurants={setFilteredRestaurants}
        restaurant={restaurant}
        filterData={filterData}
      />
      {restaurant?.length === 0 ? (
        <ShimmerCards />
      ) : (
        <div className="flex flex-wrap justify-around">
          {filteredRestaurants.map((restaurant) => {
            if (restaurant.info) {
              return (
                <RestaurantCard {...restaurant.info} key={restaurant.info.id} isPromoted={restaurant.info.avgRatingString > 4.5} />
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
      </div>
    </>
  );
};

export default Body;

