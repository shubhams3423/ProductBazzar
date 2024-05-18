import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useProductContext } from "../../context/ContextProvider";

const UserAddress = () => {
  const { showAddressModal, setShowAddressModal } = useProductContext();
  return (
    <div className=" flex justify-center h-screen w-screen items-center fixed ">
      <div className="md:w-[27rem] w-[90%] h-fit flex items-start ">
        <div className="border-2  bg-white md:p-7 p-5 rounded-lg w-full">
          <form className="flex flex-col gap-y-4" action="#">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter Full Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter Full Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="pincode"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter Pincode
              </label>
              <input
                type="text"
                name="pincode"
                id="pincode"
                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mobileNumber"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter Mobile Number
              </label>
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                required
              />
            </div>
            <button
              type="button"
              className="focus:outline-none w-full text-white bg-violet-600  hover:bg-violet-800  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Order Now
            </button>
          </form>
        </div>
        <div className="-mt-5 ml-1">
          <RxCross2
            className="text-white text-xl cursor-pointer"
            onClick={() => setShowAddressModal(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserAddress;
