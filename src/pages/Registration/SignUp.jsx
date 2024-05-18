import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDb } from "../../firebase/firebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useProductContext } from "../../context/ContextProvider";
import Loader from "../../components/loader/Loader";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const { loading, setLoading } = useProductContext();
  const signUpHandler = async () => {
    if (email === "" || name === "" || password === "")
      return toast.error("All fields are required");

    try {
      setLoading(true);
      const userDet = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = {
        name: name,
        email: email,
        uid: userDet.user.uid,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDb, "user");
      console.log("user Ref :", userRef);
      await addDoc(userRef, user);
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="">
      {loading && <Loader />}
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
            <h1 className="font-semibold text-2xl">Sign Up</h1>
          </div>
          <div className="">
            <div className="flex flex-col gap-y-6">
              <p className="border rounded-lg border-gray-700 p-2 flex items-center ">
                <input
                  type="text"
                  className={`outline-none ${
                    loading ? "bg-gray-100" : "bg-white"
                  } text-md md:w-72 w-64 placeholder-gray-400`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </p>
              <p className="border rounded-lg border-gray-700 p-2 flex items-center ">
                <input
                  type="email"
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
                className="rounded-lg p-2 bg-blue-500 w-full font-semibold text-xl text-white text-center"
                onClick={signUpHandler}
              >
                Sign Up
              </button>
            </div>
            <p className="text-[15px] text-center mt-3">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-blue-500 cursor-pointer font-semibold">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
