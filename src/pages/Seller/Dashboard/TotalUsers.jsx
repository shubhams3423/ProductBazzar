import React from "react";

const TotalUsers = () => {
  return (
    <div className="relative overflow-x-auto mb-10  px-4 md:px-0">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.No
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Pincode
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b  dark:border-gray-700 even:bg-gray-50 odd:bg-white">
            <td className="px-6 py-4 text-black ">1.</td>
            <td className="px-6 py-4 text-black ">Name</td>
            <td className="px-6 py-4 text-black ">Address</td>
            <td className="px-6 py-4 text-black ">181919</td>
            <td className="px-6 py-4 text-black ">1991818818</td>
            <td className="px-6 py-4 text-black ">kkk@gmail.com</td>
            <td className="px-6 py-4 text-black ">12 Aug 2019</td>
          </tr>
          <tr className="border-b  dark:border-gray-700 even:bg-gray-50 odd:bg-white">
            <td className="px-6 py-4 text-black ">1.</td>
            <td className="px-6 py-4 text-black ">Name</td>
            <td className="px-6 py-4 text-black ">Address</td>
            <td className="px-6 py-4 text-black ">181919</td>
            <td className="px-6 py-4 text-black ">1991818818</td>
            <td className="px-6 py-4 text-black ">kkk@gmail.com</td>
            <td className="px-6 py-4 text-black ">12 Aug 2019</td>
          </tr>
          <tr className="border-b  dark:border-gray-700 even:bg-gray-50 odd:bg-white">
            <td className="px-6 py-4 text-black ">1.</td>
            <td className="px-6 py-4 text-black ">Name</td>
            <td className="px-6 py-4 text-black ">Address</td>
            <td className="px-6 py-4 text-black ">181919</td>
            <td className="px-6 py-4 text-black ">1991818818</td>
            <td className="px-6 py-4 text-black ">kkk@gmail.com</td>
            <td className="px-6 py-4 text-black ">12 Aug 2019</td>
          </tr>
          <tr className="border-b  dark:border-gray-700 even:bg-gray-50 odd:bg-white">
            <td className="px-6 py-4 text-black ">1.</td>
            <td className="px-6 py-4 text-black ">Name</td>
            <td className="px-6 py-4 text-black ">Address</td>
            <td className="px-6 py-4 text-black ">181919</td>
            <td className="px-6 py-4 text-black ">1991818818</td>
            <td className="px-6 py-4 text-black ">kkk@gmail.com</td>
            <td className="px-6 py-4 text-black ">12 Aug 2019</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TotalUsers;
