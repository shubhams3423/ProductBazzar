import React, { useState } from "react";
import { Link } from "react-router-dom";
import SellerHouse from "../../images/User-Store.png";
import githubIcon from "../../images/github-icon.png";
import linkedInIcon from "../../images/linkedIn-icon.png";
import logo from "../../images/logo.png";
import { CiShop } from "react-icons/ci";
import flag from "../../images/Indian-Flag.png";
import { TiHeartFullOutline } from "react-icons/ti";
const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#212121e8] body-font">
        <div className="lg:w-9/12 mx-auto max-md:mx-10 max-sm:mx-6 py-10 grid lg:grid-cols-4 md:grid-cols-3   grid-cols-2  lg:gap-x-32 md:gap-x-24 gap-x-12">
          <div className="">
            <h2 className="mb-1 text-[#b3b3b3] font-semibold ">
              ONLINE SHOPPING
            </h2>
            <ul className="flex flex-col md:gap-y-2 gap-y-1">
              <li className="text-[#e3e3e3] cursor-pointer hover:text-white hover:scale-105 duration-150">
                Men
              </li>
              <li className="text-[#e3e3e3] cursor-pointer hover:text-white hover:scale-105 duration-150">
                Women
              </li>
              <li className="text-[#e3e3e3] cursor-pointer hover:text-white hover:scale-105 duration-150">
                Home & Living
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-1 text-[#b3b3b3] font-semibold  ">ABOUT</h2>
            <ul className="flex flex-col md:gap-y-2 gap-y-1 ">
              <li className="text-[#e3e3e3] cursor-pointer hover:text-white hover:scale-105 duration-150">
                Contact Us
              </li>
              <li className="text-[#e3e3e3] cursor-pointer hover:text-white hover:scale-105 duration-150">
                About Us
              </li>
            </ul>
          </div>
          <div className="max-md:mt-4">
            <h2 className="text-[#b3b3b3] font-semibold mb-1">SERVICES</h2>
            <ul className="flex flex-col md:gap-y-2 gap-y-1">
              <li className="text-[#e3e3e3] cursor-pointer hover:text-white hover:scale-105 duration-150">
                Become a seller
              </li>
            </ul>
          </div>
          <div className="max-md:mt-4">
            <h2 className="text-[#b3b3b3] font-semibold mb-1">HELP</h2>
            <ul>
              <li className="text-[#e3e3e3] cursor-pointer hover:text-white hover:scale-105 duration-150">
                Privacy
              </li>
            </ul>
          </div>
          {/* <div className="flex items-end grow justify-end">
            <div className="flex items-center rounded border-[1px] border-[#51565c] px-[10px]">
              <span className="text-white">India</span>
              <div className="rounded  py-1 px-2">
                <img src={flag} className="my-auto w-10" alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-[#131A22] py-2">
        <div className="flex items-center justify-center">
          <div>
            <p className="text-white  ">
              Made with{" "}
              <TiHeartFullOutline className="text-red-600 w-5 h-5 inline" /> by{" "}
              <a
                href="https://www.linkedin.com/in/shubham-shinde-69b688297/"
                target="_blank"
                className="text-red-400"
              >
                Shubham
              </a>
            </p>
            <div className="flex items-center gap-x-2 justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/shubham-shinde-69b688297/"
                target="_blank"
              >
                <div className="bg-white w-5 h-5 rounded-full flex items-center justify-center">
                  <img src={githubIcon} alt="" className="h-full w-full" />
                </div>
              </a>
              <a href="https://github.com/shubhams3423" target="_blank">
                <div className="bg-white w-5 h-5 rounded">
                  <img src={linkedInIcon} alt="" className="h-full w-full" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
