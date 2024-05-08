import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FiSun } from "react-icons/fi";
import { useProductContext } from "../../context/ContextProvider";
import { LuMoon } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { theme, toggleTheme } = useProductContext();
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  return (
    <div
      className={`border-b-3  ${
        theme === "light" ? "bg-white" : "bg-[#193351]"
      } shadow-md px-5 py-3 transition ease-in-out delay-150 relative ${
        menu ? "h-[40vh] rounded-b-md items-start" : "h-14"
      } flex  justify-between `}
    >
      <div className="flex h-fit items-center ">
        <div className="md:hidden mx-1">
          {!menu ? (
            <RiMenu2Fill
              onClick={menuHandler}
              className={`text-xl ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            />
          ) : (
            <RxCross2
              onClick={menuHandler}
              className={`text-xl ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            />
          )}
        </div>
        <img src={logo} alt="" className="w-7 h-7  mx-1 " />
        <h2
          className={`font-semibold   mx-1 ${
            theme === "light" ? "text-black" : "text-[#e2e8f0]"
          }`}
        >
          Product Bazzar
        </h2>
      </div>
      <div className="flex justify-end h-fit">
        <ul
          className={`flex md:items-center md:block ${
            menu ? "block flex-col absolute gap-y-6 left-8 top-16" : "hidden"
          } `}
        >
          <Link
            to={"/"}
            className={`font-medium ${
              theme === "light" ? "text-black" : "text-[#e2e8f0]"
            } px-4`}
          >
            All Products
          </Link>
          <Link
            to={"/order"}
            className={`font-medium ${
              theme === "light" ? "text-black" : "text-[#e2e8f0]"
            } px-4`}
          >
            Order
          </Link>
          <Link
            to="/login"
            className={`font-medium ${
              theme === "light" ? "text-black" : "text-[#e2e8f0]"
            } px-4`}
          >
            Login
          </Link>
        </ul>
        <div className="flex items-center ms-4">
          <Link className="rounded-full p-1 bg-purple-300 border-2 border-gray-500">
            <FaRegUser className="text-black" />
          </Link>
          <Link to="/cart" className=" ms-[13px]">
            <HiOutlineShoppingCart
              className={`text-xl ${
                theme === "light" ? "text-black" : "text-[#e2e8f0]"
              }`}
            />
          </Link>
          <div className=" ms-[13px]">
            {theme === "light" ? (
              <FiSun
                onClick={toggleTheme}
                className="cursor-pointer text-xl "
              />
            ) : (
              <LuMoon
                onClick={toggleTheme}
                className="cursor-pointer text-xl text-[#e2e8f0]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
