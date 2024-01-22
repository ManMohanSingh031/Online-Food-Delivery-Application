//ShimmerCard.js
import React from 'react';
import { numberOfShimmerCards } from '../../Constant';

const ShimmerCard = () => {
  return (
    <div className="flex flex-col w-80 p-4 m-4 bg-gray-300 rounded animate-pulse">
      <div className="w-full h-50 bg-gray-400 mb-4 rounded"></div>
      <div className="h-10 mb-2 bg-gray-400 rounded w-3/4"></div>
      <div className="h-10 mb-2 bg-gray-400 rounded w-1/2"></div>
      <div className="h-10 mb-2 bg-gray-400 rounded w-1/4"></div>
      <div className="h-10 mb-2 bg-gray-400 rounded w-3/4"></div>
      <div className="h-10 mt-4 bg-blue-700 rounded"></div>
    </div>
  );
};

const ShimmerMenuCard = () => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center justify-center bg-gray-400 shadow-lg rounded-lg overflow-hidden p-4">
        <div className="w-64 h-64 bg-gray-300"></div>
        <div className="w-2/2 pl-4 flex flex-col justify-center">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4 bg-gray-400 shadow-lg rounded-lg overflow-hidden">
            <div className="w-2/3 p-4 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
            <div className="w-1/3 flex items-center">
              <div className="w-16 h-16 bg-gray-300 mr-4"></div>
              <div className="px-4 py-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShimmerCards = () => {
  return (
    <>
    <div className="flex flex-wrap justify-around">
      {Array(numberOfShimmerCards).fill().map((_, i) => <ShimmerCard key={i} />)};
    </div>  
    </>
  );
};

export { ShimmerCard, ShimmerCards, ShimmerMenuCard };
