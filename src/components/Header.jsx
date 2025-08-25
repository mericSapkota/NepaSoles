import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [sidebarOn, setSidebarOn] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState();

  const goToShopPage = () => {
    navigate("/shop");
  };
  const goToHomePage = () => {
    navigate("/");
  };
  const goToAboutUsPage = () => {
    navigate("/aboutus");
  };
  const goToContactPage = () => {
    navigate("/contact");
  };

  const displaySideBar = () => {
    setSidebarOn(!sidebarOn);
  };

  const searchFunction = (e) => {
    if (e.key === "Enter") {
      search();
      e.target.value = "";
    }
    setInput(e.target.value);
  };

  return (
    <div className="bg-black sticky z-10 top-0 px-5 flex items-center justify-between ">
      <Sidebar
        goToHomePage={goToHomePage}
        goToShopPage={goToShopPage}
        goToAboutUsPage={goToAboutUsPage}
        goToContactPage={goToContactPage}
        sidebarOn={sidebarOn}
        displaySideBar={displaySideBar}
      />
      <div className="flex items-center  w-1/2 md:justify-start md:w-max  gap-5">
        <Bars3Icon onClick={displaySideBar} className="text-white h-5 cursor-pointer md:hidden" />
        <img className="h-14" src="/nepasoleslogo.png" alt="Logo" />
      </div>

      <div className="text-white hidden md:flex gap-5">
        <a className="link" onClick={goToHomePage}>
          Home
        </a>
        <a className="link" onClick={goToShopPage}>
          Shop
        </a>
        <a className="link" onClick={goToAboutUsPage}>
          About
        </a>
        <a className="link" onClick={goToContactPage}>
          Contact
        </a>
      </div>

      <div className="flex  justify-end items-center gap-5 ">
        <div className="flex   group    items-center relative">
          <input
            type="text"
            onKeyDown={searchFunction}
            className="w-0 group-hover:w-[150px] focus:w-[150px] transition-all duration-300
               opacity-0 group-hover:opacity-100 focus:opacity-100
               focus:bg-white  foucs:md:w-[200px] bg-white outline-none rounded-full px-3 py-1"
          />
          <MagnifyingGlassIcon className="group-hover:text-black text-white z-10 visible h-5 cursor-pointer absolute right-0" />
        </div>
        <UserIcon className="h-5 text-white  cursor-pointer" />
        <ShoppingBagIcon className="text-white h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
