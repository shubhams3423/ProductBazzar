import React from "react";
import BackArrow from "../../../components/BackArrow/BackArrow";

const AddProduct = () => {
  return (
    <div className="bg-[#f3f3f3] h-screen">
      <BackArrow />
      <div className=" flex justify-center items-center  ">
        <div className=" bg-white border-[5px] border-black px-8 py-7 rounded-xl ">
          <div className="">
            <h1 className="text-center text-black underline text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              className=" bg-[#E4E5E9] mb-4 px-2 py-2 w-[20rem] lg:w-[20em] rounded-lg text-black placeholder:text-gray-600  outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              className=" bg-[#E4E5E9] mb-4 px-2 py-2 w-[20rem] lg:w-[20em] rounded-lg text-black placeholder:text-gray-600  outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              className=" bg-[#E4E5E9] mb-4 px-2 py-2 w-[20rem] lg:w-[20em] rounded-lg text-black placeholder:text-gray-600  outline-none"
              placeholder="Product image url"
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              className=" bg-[#E4E5E9] mb-4 px-2 py-2 w-[20rem] lg:w-[20em] rounded-lg text-black placeholder:text-gray-600  outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="5"
              name="title"
              className=" bg-[#E4E5E9] mb-4 px-2 py-2 w-[20rem] lg:w-[20em] rounded-lg text-black placeholder:text-gray-600  outline-none"
              placeholder="Product title"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button className=" bg-yellow-500 w-[20rem] text-black font-bold  px-2 py-2 rounded-lg">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
