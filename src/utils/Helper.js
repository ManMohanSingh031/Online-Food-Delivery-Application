export function filterData(searchTerm, restaurant) {
    const filterData = restaurant.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filterData;
  };
  