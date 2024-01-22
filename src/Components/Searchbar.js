import { useState } from "react";

const SearchBar = ({ setFilteredRestaurants, restaurant, filterData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center justify-center py-6">
      <input
        className="bg-white h-12 px-5 pr-16 rounded-full rounded-r-md text-sm focus:outline-none w-full max-w-lg border-2 border-blue-950 shadow-lg "
        type="search"
        name="search"
        placeholder="Search Restaurent or Food"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-blue-900 text-white h-12 rounded-full rounded-l-md px-4 py-2 w-24 border-2 border-blue-900 shadow-lg -ml-10"
        onClick={() => {
          const info = filterData(searchTerm, restaurant);
          setFilteredRestaurants(info);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
