import { CircleStackIcon } from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="p-8 bg-black text-gray-400 text-sm lg:text-md flex flex-col gap-5 ">
      <div className="flex flex-col md:flex-row md:justify-between gap-5">
        <div className="flex flex-col gap-5">
          <p className="font-semibold uppercas text-white">Information</p>
          <p className="link">FAQ</p>
          <p className="link">Contact Us</p>
          <p className="link">Privacy Policy</p>
          <p className="link">Terms & Conditions</p>
        </div>
        <div className="flex flex-col gap-5 w-max">
          <p className="font-semibold upper text-white">Contact Us</p>
          <p className="link">NepaSoles Store Location : Kalimati, Lalitpur </p>
          <p>Email : nepasoles@gmail.com</p>
          <p>+977 984-1234567</p>
          <p>+977 123-4567</p>
        </div>
        <div className="flex flex-col gap-5 w-1/2 md:w-1/3 ">
          <p className="font-semibold uppercase text-white">About NepaSoles</p>
          <p>NepaSoles is one of the leading shoes dealer company with 1000+ satisfied customers</p>
        </div>
      </div>
      <div className="flex items-center gap-5 ">
        <svg
          className=" cursor-pointer text-white bg-white h-5 w-5 rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
        </svg>
        <svg
          className="cursor-pointer text-white bg-white h-5 w-5 rounded"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 30 30"
        >
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
        </svg>

        <svg className="cursor-pointer h-5 w-5 rounded bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
        </svg>
      </div>
      <div className="self-center text-white">&copy; 2025 NepaSoles. All rights reserved.</div>
    </div>
  );
};

export default Footer;
