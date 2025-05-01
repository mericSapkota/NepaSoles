import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import { useNavigate } from "react-router-dom";
import { calculateDiscount } from "../../components/util";

const HeroSection = () => {
  const [filter, setFilter] = useState(true);
  const [sort, setSort] = useState("featured");
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  console.log(filter);

  let shoesInfo = [
    {
      id: 1,
      name: "Air Jordan 1 Retro High OG ",
      status: "New Arrival",
      price: 200,
      brand: "Nike",
      numberofcolors: 3,
      image: "/AJ1.png",
      discount: 20,
    },
    {
      id: 2,
      name: "Air Jordan 1 Retro High OG 'Bred'",
      status: "New Arrival",
      price: 180,
      brand: "Nike",
      numberofcolors: 2,
      image: "/AJ2.jpg",
      discount: 0,
    },
    {
      id: 5,
      name: "Air Jordan 1 Retro High OG 'Royal'",
      price: 190,
      brand: "Reebook",
      status: "Best Seller",
      numberofcolors: 4,
      image: "/AJ1Brooklyn.png",
      discount: 10,
    },
    {
      id: 3,
      name: "Air Jordan 1 Retro High OG",
      price: 170,
      brand: "Adidas",
      status: "Best Seller",
      numberofcolors: 3,
      image: "/AJ1low.png",
      discount: 0,
    },
    {
      id: 4,
      name: "Air Jordan 1 Retro High OG 'Black and White'",
      price: 160,
      brand: "Puma",
      status: "Best Seller",
      numberofcolors: 5,
      image: "/AJ1methodofmake.png",
      discount: 15,
    },
  ];

  const [shoes, setShoes] = useState(shoesInfo);

  const fetchShoes = async (sortBy) => {
    const filteredRequest = shoesInfo
      .filter((shoe) => {
        if (sortBy === "bestseller") return shoe.status === "Best Seller";
        if (sortBy === "newest") return shoe.status === "New Arrival";
        if (sortBy === "priceHighToLow") return shoe.price >= 100;
        if (sortBy === "priceLowToHigh") return shoe.price <= 200;
        return true;
      })
      .filter((shoe) => {
        if (brands.length === 0) return true;
        return brands.includes(shoe.brand);
      });
    setShoes(filteredRequest);
    setFilter(false);
    // const response = await fetch("http://localhost:8080/shoes?sortBy=" + sortBy + "&brands=" + brands.join(","));
    // shoesInfo = response.json();
  };

  const goToShoePage = (id) => {
    navigate(`/shoe/${id}`);
  };

  useEffect(() => {
    fetchShoes(sort);
  }, [sort, brands]);
  return (
    <div className="relative">
      <div className="p-5 md:p-10">
        <div className="flex items-center justify-between pr-2">
          <p className="text-gray-500">Results found:{shoes.length}</p>
          <div
            onClick={() => {
              setFilter((prev) => !prev);
            }}
            className="outline-1 flex gap-5 w-max outline-gray-400 rounded-full items-center px-3 py-1"
          >
            <p className="font-semibold">{filter ? "Close" : " "} Filter</p>
            <AdjustmentsHorizontalIcon className="h-5 " />
          </div>
        </div>
        <div className="flex relative">
          <FilterSection
            onFilterChange={(sortBy, brands) => {
              setSort(sortBy);
              setBrands(brands);
            }}
            filter={filter}
            setFilter={setFilter}
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {shoes.map((info, index) => (
              <div key={index} className="relative cursor-pointer" onClick={() => goToShoePage(info.id)}>
                <img src={`/outlinkshoes/${info.image}`} className=" " />
                {info.discount != 0 && (
                  <div className="h-10 p-4 text-xs w-10 bg-red-400 text-white rounded-full absolute top-0 right-0 flex flex-col  items-center justify-center">
                    <p> {info.discount}%</p>
                    <p className="text-center">off</p>
                  </div>
                )}
                <div className="py-2 text-sm space-y-1 md:text-[16px]">
                  <p className="text-red-600">{info.status}</p>
                  <p>{info.name}</p>

                  <p className="text-gray-500">{info.brand}</p>
                  <p className="text-gray-500">Number of colors :{info.numberofcolors}</p>
                  <div className="font-semibold text-lg pt-4">
                    {(info.discount != 0 && calculateDiscount(info.price, info.discount)) || <div>${info.price}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
