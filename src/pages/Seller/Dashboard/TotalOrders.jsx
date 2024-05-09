import React from "react";

const TotalOrders = () => {
  return (
    <div className="relative overflow-x-auto mb-10  px-4 md:px-0">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Pay. Id
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Category
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
          <tr className="even:bg-gray-50 odd:bg-white border-b  dark:border-gray-700">
            <td className="px-6 py-4 text-black ">3393939</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-black whitespace-nowrap"
            >
              <img
                className="w-16"
                src="https://dummyimage.com/720x400"
                alt="img"
              />
            </th>
            <td className="px-6 py-4 text-black ">Title</td>
            <td className="px-6 py-4 text-black ">₹100</td>
            <td className="px-6 py-4 text-black ">pots</td>
            <td className="px-6 py-4 text-black ">name</td>
            <td className="px-6 py-4 text-black ">india</td>
            <td className="px-6 py-4 text-black ">82828</td>
            <td className="px-6 py-4 text-black ">929929929929</td>
            <td className="px-6 py-4 text-black ">kkakka@gmail.com</td>
            <td className="px-6 py-4 text-black ">12 Aug 2019</td>
          </tr>
          <tr className="even:bg-gray-50 odd:bg-white border-b  dark:border-gray-700">
            <td className="px-6 py-4 text-black ">3393939</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-black whitespace-nowrap"
            >
              <img
                className="w-16"
                src="https://dummyimage.com/720x400"
                alt="img"
              />
            </th>
            <td className="px-6 py-4 text-black ">Title</td>
            <td className="px-6 py-4 text-black ">₹100</td>
            <td className="px-6 py-4 text-black ">pots</td>
            <td className="px-6 py-4 text-black ">name</td>
            <td className="px-6 py-4 text-black ">india</td>
            <td className="px-6 py-4 text-black ">82828</td>
            <td className="px-6 py-4 text-black ">929929929929</td>
            <td className="px-6 py-4 text-black ">kkakka@gmail.com</td>
            <td className="px-6 py-4 text-black ">12 Aug 2019</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TotalOrders;
