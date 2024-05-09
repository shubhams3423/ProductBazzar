import React from "react";
import Layout from "../../../components/Layout/Layout";
import { FaUserTie } from "react-icons/fa";
import DashboardTable from "./DashboardTable";
import { MdEventNote } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 text-center justify-center">
            <div className="p-4 md:w-1/4  w-[50%]">
              <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl">
                <div
                  className="text-purple-500 md:w-12 w-10 md:h-12 h-10 md:mb-3 mb-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaCartShopping className="md:text-6xl text-5xl" />
                </div>
                <h2 className="title-font font-medium text-3xl text-black  ">
                  10
                </h2>
                <p className=" text-purple-500  font-bold">Total Products</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 w-[50%]">
              <div className=" border-2 hover:shadow-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl">
                <div
                  className="text-pink-500 md:w-12 w-10 md:h-12 h-10 md:mb-3 mb-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <MdEventNote className="md:text-6xl text-5xl" />
                </div>
                <h2 className="title-font font-medium text-3xl text-black  ">
                  10
                </h2>
                <p className=" text-pink-500  font-bold">Total Orders</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4  w-[65%]">
              <div className=" border-2 hover:shadow-green-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl">
                <div
                  className="text-green-500 md:w-12 w-10 md:h-12 h-10 md:mb-3 mb-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie className="md:text-6xl text-5xl" />
                </div>
                <h2 className="title-font font-medium text-3xl text-black  ">
                  20
                </h2>
                <p className=" text-green-500  font-bold">Total Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DashboardTable />
    </Layout>
  );
};

export default Dashboard;
