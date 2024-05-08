import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import indianFlag from "../../images/Indian-Flag.png";
import UserAddressModal from "../../components/UserAddress/UserAddress";
import { useProductContext } from "../../context/ContextProvider";
const Cart = () => {
  const [totalAmt, setTotalAmt] = useState(200);
  const [cartCount, setCartCount] = useState(1);
  const { showAddressModal, setShowAddressModal } = useProductContext();
  let item = 1;
  const UserAddressHandler = () => {
    showAddressModal ? setShowAddressModal(false) : setShowAddressModal(true);
  };
  return (
    <>
      <Layout>
        <div className="  bg-gray-100 pt-5 ">
          <h1 className="md:mb-10 mb-5 text-center text-2xl font-bold">
            Cart Items
          </h1>
          <div className="mx-auto max-w-5xl justify-center  flex max-md:flex-col max-md:px-5 md:space-x-6 xl:px-0 relative">
            <div className="flex flex-col max-sm:h-[56vh] max-sm:overflow-y-scroll md:w-[70%] ">
              <div className="rounded-lg border mb-4  drop-shadow-xl bg-white md:p-6 p-4  ">
                <div className="flex gap-x-3">
                  <div className="flex items-start gap-x-5 grow">
                    <img
                      src="https://dummyimage.com/400x400"
                      alt="product-image"
                      className="  rounded-lg sm:w-40 w-20"
                    />
                    <div className=" flex flex-col justify-between h-full">
                      <p className="md:text-lg text-base font-semibold text-gray-800">
                        ortronics My Buddy K11 Metal Laptop Stand with 360°
                        Rotation
                      </p>
                      <div className="mt-4 sm:mt-5 flex flex-col  sm:justify-between">
                        <div className="flex items-center justify-between  ">
                          <div className="flex items-center gap-x-1">
                            {item === 0 ? (
                              <MdOutlineDeleteOutline />
                            ) : (
                              <FiMinus className="text-md text-gray-700 cursor-pointer" />
                            )}
                            <p className="border px-2 py-[2px] rounded bg-gray-300">
                              1
                            </p>
                            <GoPlus className="text-md text-gray-700 cursor-pointer" />
                          </div>
                          <p className="mt-1 text-lg font-bold text-gray-800 ">
                            ₹100.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-md:hidden  cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mt-6  rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 h-fit mb-4 ${
                scrollY > 143 ? "fixed top-0 right-0 " : ""
              }`}
            >
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700f ">
                  Subtotal{" "}
                  <span className="text-black font-semibold">
                    {" "}
                    (
                    {cartCount > 1 && cartCount > 0
                      ? `${cartCount} items`
                      : `${cartCount} item`}
                    )
                  </span>
                </p>
                <p className="text-gray-900">₹100.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Delivery Charges</p>
                <p
                  className={` ${
                    totalAmt > 400 ? "text-green-500" : "text-gray-900"
                  }`}
                >
                  {totalAmt > 400 ? "Free" : "35"}
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mb-3">
                <p className="text-lg font-bold">Total</p>
                <div className>
                  <p className="mb-1 text-lg font-bold">₹200.00</p>
                </div>
              </div>
              <button
                onClick={UserAddressHandler}
                type="button"
                className="w-full  bg-orange-500 py-2 text-center rounded-lg text-white font-bold  "
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Layout>
      <div
        className={`${
          showAddressModal &&
          "bg-[#8080808a] absolute w-screen h-screen top-0 right-0 left-0 "
        }`}
      >
        {showAddressModal && <UserAddressModal />}
      </div>
    </>
  );
};

export default Cart;
