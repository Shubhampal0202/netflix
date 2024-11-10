import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-bgColor">
      <div className="flex items-center justify-between ">
        <img
          className="w-[200px] ml-9"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <div className="mr-16">
          <Link to="/signin">
            <button className="bg-white px-4 py-[6px] rounded-2xl text-[14px] font-medium transition duration-400 hover:bg-gray-400">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center pb-8 ">
        <img
          className="w-[95%] border-t-[3px] border-l-[3px] border-white rounded-2xl opacity-40"
          src="
        https://assets.nflxext.com/ffe/siteui/vlv3/61b94313-a53b-4a73-b973-7632aafc9d8f/web_tall_panel/IN-en-20241104-TRIFECTA-perspective_5e478a9d-0baf-4a93-8987-7a8ebf6f7fe8_large.jpg"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default Home;
