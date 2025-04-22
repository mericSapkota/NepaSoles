import { UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Sidebar = ({
  goToHomePage,
  goToShopPage,
  goToAboutUsPage,
  goToContactPage,
  displaySideBar,
  sidebarOn,
}) => {
  return (
    <div
      className={`w-1/2 duration-300 transition-transform ${
        sidebarOn ? " translate-x-0" : "visible -translate-x-full"
      } top-0 p-2 px-4 absolute left-0 bg-black text-white h-screen flex flex-col`}
    >
      <XMarkIcon onClick={displaySideBar} className={`h-5 ml-auto cursor-pointer`} />
      <div className="flex flex-col gap-5 mt-5 divide-y divide-gray-500 text-sm">
        <a className="link pb-3" onClick={goToHomePage}>
          HOME
        </a>
        <a className="link pb-3" onClick={goToShopPage}>
          SHOP
        </a>
        <a className="link pb-3" onClick={goToAboutUsPage}>
          ABOUT US
        </a>
        <a className="link pb-3" onClick={goToContactPage}>
          CONTACT
        </a>
      </div>
      <div className="flex items-center gap-2 mt-auto pb-2 cursor-pointer ">
        <UserIcon className="h-5" />
        <div>Login</div>
      </div>
      <div className=" h-[1px] w-full mb-10 bg-gray-500"></div>
    </div>
  );
};
