import { XMarkIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FilterSection = ({ onFilterChange, filter, setFilter }) => {
  const [selected, setSelected] = useState(); // selected sort
  const [selectedBrands, setSelectedBrands] = useState([]);

  const brands = ["Nike", "Adidas", "Puma", "Reebok"];
  const sortOptions = [
    { value: "bestseller", label: "Best Seller" },
    { value: "newest", label: "Newest" },
    { value: "priceHighToLow", label: "Price: High to Low" },
    { value: "priceLowToHigh", label: "Price: Low to High" },
  ];

  const clearSearch = () => {
    setSelected(null);
    setSelectedBrands([]);
    onFilterChange(null, []);
  };

  const search = () => {
    // Implement search functionality here
    onFilterChange(selected, selectedBrands);
    console.log("Search button clicked");
  };
  const toggleBrand = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updatedBrands);
  };

  return (
    <div
      className={` duration-200 ease-in absolute -top-10 z-10 h-screen w-[102%]  md:w-[400px] md:static bg-white p-5 md:p-2 ${
        filter ? "visible translate-y-0" : "invisible md:hidden translate-y-full "
      }`}
    >
      <div className="flex justify-between items-center">
        <p>Filter</p>
        <div className="flex items-center gap-2">
          <div className=" text-sm px-2 py-1 link" onClick={clearSearch}>
            {" "}
            Clear
          </div>
          <XMarkIcon
            className="h-5 cursor-pointer"
            onClick={() => {
              setFilter((prev) => !prev);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-5">
        <p className="font-semibold">Sort By</p>
        {sortOptions.map((option, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value={option.value}
              checked={selected === option.value}
              onChange={() => setSelected(option.value)}
              className="accent-pink-500"
            />
            {option.label}
          </label>
        ))}
        <div className="h-[1px] w-full bg-gray-300"></div>

        <p>Brands</p>
        {brands.map((brand, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="accent-pink-500"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />
            {brand}
          </label>
        ))}

        <div className="h-[1px] w-full bg-gray-300"></div>
        <button
          onClick={search}
          className="bg-black mx-auto text-white px-4 py-2 rounded-md hover:bg-gray-500 cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
