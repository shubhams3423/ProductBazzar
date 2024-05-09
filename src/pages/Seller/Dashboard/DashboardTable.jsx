import React, { useState } from "react";
import { AiFillShopping } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardTable = () => {
  const [activeLink, setActiveLink] = useState(1);
  return (
    <div className=" ">
      <div className="flex items-center md:gap-x-4 gap-x-3 justify-center border-t-2 py-4">
        <Link
          to="totalProducts"
          onClick={() => setActiveLink(1)}
          className={` font-medium rounded-lg md:text-xl text-lg md:px-5 px-4 md:py-1.5 py-1 text-center bg-[#605d5d12] hover:shadow-purple-700
          ${
            activeLink === 1
              ? "border-b-2 border-purple-500 text-purple-500 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"
              : "text-[#00000099] border-2"
          }`}
        >
          <div className="flex md:gap-2 gap-1 items-center">
            <MdOutlineProductionQuantityLimits />
            Products
          </div>
        </Link>
        <Link
          onClick={() => setActiveLink(2)}
          to="totalOrders"
          className={` font-medium rounded-lg md:text-xl text-lg md:px-5 px-4 md:py-1.5 py-1 text-center bg-[#605d5d12] hover:shadow-pink-700
          ${
            activeLink === 2
              ? "border-b-2 border-pink-500 text-pink-500 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"
              : "text-[#00000099] border-2"
          }`}
        >
          <div className="flex md:gap-2 gap-1 items-center">
            <AiFillShopping /> Orders
          </div>
        </Link>
        <Link
          onClick={() => setActiveLink(3)}
          to="totalUsers"
          className={`
          font-medium rounded-lg md:text-xl text-lg md:px-5 px-4 md:py-1.5 py-1 text-center bg-[#605d5d12] hover:shadow-green-700  
            ${
              activeLink === 3
                ? "border-b-2 border-green-500 text-green-500 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   "
                : "text-[#00000099] border-2"
            } 
          `}
        >
          <div className="flex md:gap-2 gap-1 items-center">
            <FaUser /> Users
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardTable;
