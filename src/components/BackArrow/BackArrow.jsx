import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <div className="px-8 py-4 bg-[#424242] mb-5 ">
      <IoArrowBack
        className="text-white text-xl cursor-pointer"
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export default BackArrow;
