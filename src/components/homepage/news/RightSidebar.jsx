import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const RightSidebar = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold py-2">Login With</h1>
        <div className="space-y-2 flex flex-col justify-center items-center">
          <button className="flex gap-2  items-center border-2 border-blue-600 text-blue-600 rounded-md px-5 py-1.5">
            <AiFillGoogleCircle />
            Login with Google
          </button>
          <button className="flex gap-2 items-center rounded-md border-2 px-5 py-1.5">
            <AiFillGithub />
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
