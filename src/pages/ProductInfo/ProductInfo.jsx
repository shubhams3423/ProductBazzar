import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { TiHeartFullOutline } from "react-icons/ti";

import Layout from "../../components/Layout/Layout";
const ProductInfo = () => {
  const [likedProduct, setLikedProduct] = useState(false);
  return (
    <Layout>
      <div className=" lg:w-3/5 md:w-4/5 w-11/12 mx-auto flex max-md:flex-col py-10 gap-x-3">
        <div className="max-md:mx-auto">
          <img src="https://dummyimage.com/400x400" alt="" />
        </div>
        <div className="max-md:mt-3">
          <div>
            <p className="text-gray-500 font-medium">Nike</p>
            <h1>
              Samsung Galaxy Watch4 Classic LTE (4.6cm, Silver, Compatible with
              Android only)
            </h1>
          </div>
          <div className="flex items-center gap-x-4  ">
            <div className="flex items-center gap-x-2">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <div>(4 Reviews)</div>
          </div>
          <p className="bg-gray-200 my-4 h-[1px] w-full"></p>
          <div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-2xl">$500.00 </p>
              <div className="flex items-center ">
                <button className="bg-blue-500 md:p-2 max-md:px-[9px] max-md:py-[7px] max-md:text-[14px] me-4 font-medium rounded text-white">
                  Add To Cart
                </button>
                <button className="bg-[#ffbd00] md:p-2 max-md:px-[9px] max-md:py-[7px] max-md:text-[14px] me-4 font-medium rounded text-white">
                  Buy Now
                </button>
                <div className=" rounded-full p-1 cursor-pointer border border-gray-200 bg-[#f4f2f2] ">
                  <TiHeartFullOutline
                    onClick={() =>
                      !likedProduct
                        ? setLikedProduct(true)
                        : setLikedProduct(false)
                    }
                    className={` w-[20px] h-[20px] ${
                      likedProduct ? "text-red-600" : "text-gray-400"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductInfo;
