import React from 'react';
import { IMG_CDN_URL } from '../../Constant';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/solid';


const RestaurantCard = ({ name, costForTwo, cloudinaryImageId, cuisines, avgRatingString, sla, id, isPromoted }) => {
  const imageUrl = `${IMG_CDN_URL}/${cloudinaryImageId}`;

  return (
    <div className="flex flex-col w-80 p-4 m-4 bg-white shadow rounded transform transition duration-500 hover:scale-105 relative">
      {isPromoted && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold rounded-tr px-2 py-1">
          Promoted
        </div>
      )}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-50 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">{costForTwo}</p>
      <p className="text-sm text-gray-500">{cuisines.join(", ")}</p>
      <div className="flex items-center mb-2 text-gray-500">
      Rating:
        <p className="text-gray-800 ml-2">{avgRatingString}</p>
        <StarIcon className="h-5 w-5 text-yellow-500" />
      </div>
      <p className="text-sm text-gray-500">Delivery: {sla?.deliveryTime} Minute</p>
      <Link to={"/restaurant/" + id} className="mt-4 inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
        Click To Menu 
      </Link>
    </div>
  );
};

export default RestaurantCard;
