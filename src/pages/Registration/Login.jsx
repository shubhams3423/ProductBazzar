import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoEye } from "react-icons/io5";

import { IoEyeOffSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useProductContext } from "../../context/ContextProvider";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebaseConfig";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, setLoading } = useProductContext();

  const navigate = useNavigate("");
  const signInHandler = async () => {
    if (email === "" || password === "")
      return toast.error("All fields are required");
    try {
      setLoading(true);
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      console.log("user log :", userLogin);
      localStorage.setItem("user", JSON.stringify(userLogin));
      setLoading(true);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="">
      <div
        className={`${
          loading ? "bg-gray-200" : "bg-white"
        } h-screen flex items-center justify-center`}
      >
        <div
          className={`${
            loading ? "bg-gray-100" : "bg-white"
          } border-2 rounded-lg p-4`}
        >
          <div className="mb-12">
            <h1 className="font-semibold text-2xl">Login</h1>
          </div>
          <div className="">
            <div className="flex flex-col gap-y-6">
              <p className="border rounded-lg border-gray-700 p-2 flex items-center ">
                <input
                  type="text"
                  className={`outline-none ${
                    loading ? "bg-gray-100" : "bg-white"
                  } text-md md:w-72 w-64 placeholder-gray-400`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <MdEmail className="text-gray-400 text-xl" />
              </p>
              <p className="border rounded-lg border-gray-700 p-2 flex items-center ">
                <input
                  type={showPassword ? "password" : "text"}
                  className={`outline-none ${
                    loading ? "bg-gray-100" : "bg-white"
                  } text-md md:w-72 w-64 placeholder-gray-400`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />

                {showPassword ? (
                  <IoEyeOffSharp
                    onClick={() => setShowPassword(false)}
                    className="text-gray-400 text-xl"
                  />
                ) : (
                  <IoEye
                    onClick={() => setShowPassword(true)}
                    className="text-gray-400 text-xl"
                  />
                )}
              </p>
              <button
                className="rounded-lg p-2 bg-orange-500 w-full font-semibold text-xl text-white"
                onClick={signInHandler}
              >
                Login
              </button>
            </div>
            <p className="text-[15px] text-center mt-3">
              Don't have an account?{" "}
              <Link to="/signUp">
                <span className="text-orange-500 cursor-pointer font-semibold">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
