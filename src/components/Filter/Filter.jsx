import React from "react";
import { useProductContext } from "../../context/ContextProvider";
import { IoIosSearch } from "react-icons/io";

const Filter = () => {
  const { theme } = useProductContext();
  return (
    <div className="container rounded border-2 bg-gray-100 m-auto p-4 mt-5 ">
      <div className="relative">
        <div className="absolute flex items-center ml-2 h-full">
          <IoIosSearch className={`${theme === "light" ? "" : "text-white"}`} />
        </div>
        <input
          type="text"
          name="searchkey"
          id="searchkey"
          placeholder="Search here"
          className={`px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm ${
            theme === "light"
              ? "bg-white text-red-400"
              : "bg-[#404246] text-white placeholder-white"
          }`}
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="font-medium">Filters</p>
        <button className="px-4 py-2 bg-gray-50hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
          Reset Filter
        </button>
      </div>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <select className="px-4 cursor-pointer py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="jacket">Jacket</option>
            <option value="shirt">shirt</option>
            <option value="mobile">mobile</option>
            <option value="jacket">Jacket</option>
          </select>
          <select className="px-4  cursor-pointer py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
