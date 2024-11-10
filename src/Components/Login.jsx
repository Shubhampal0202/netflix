import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="relative">
      <img
        src="
          https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_medium.jpg"
        alt=""
      />
      <img
        className="w-[200px] absolute top-0 left-20 z-10"
        src="
       https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />

      <div className="absolute top-[100px] flex justify-center w-full">
        <div className="bg-black w-[25%] bg-opacity-75 py-14 px-6 rounded-lg">
          <div>
            <h1 className="text-white text-3xl font-bold">Sign In</h1>
            <form className="flex flex-col gap-8 mt-6 ">
              <input
                type="email"
                placeholder="Email"
                className="p-[10px] outline-0 rounded-[4px]  placeholder-gray text-white text-[16px] bg-bgInputColor"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-[10px] rounded-[4px] outline-0  placeholder-gray text-white text-[16px] bg-bgInputColor"
              />

              <button className="bg-bgButtonColor text-white p-[10px] rounded-[4px]">
                Sign In
              </button>
            </form>
            <p className="text-blue-100 mt-8">
              New to Netflix?{" "}
              <Link
                to={"/signup"}
                className="transition duration-1000 hover:underline"
              >
                Sign Up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
