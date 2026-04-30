"use client";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { authClient } from "@/lib/auth-client";
import swim from "../../../../public/assets/swimming.png";
import classroom from "../../../../public/assets/class.png";
import playground from "../../../../public/assets/playground.png";
import Image from "next/image";
const RightSidebar = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div>
      <div>
        <h1 className="font-bold py-2">Login With</h1>
        <div className="space-y-2 flex flex-col justify-center items-center">
          <button
            onClick={handleGoogleSignIn}
            className="flex gap-2  items-center border-2 border-blue-600 text-blue-600 rounded-md px-5 py-1.5"
          >
            <AiFillGoogleCircle />
            Login with Google
          </button>
          <button className="flex gap-2 items-center rounded-md border-2 px-5 py-1.5">
            <AiFillGithub />
            Login with Github
          </button>
        </div>
      </div>
      <div className="mt-5 w-full flex flex-col justify-center items-center bg-white rounded-md">
        <h1 className=" font-bold">Q-Zone</h1>
        <Image src={swim} alt="swimming child" width={200} height={300}></Image>
        <Image
          src={classroom}
          alt="swimming child"
          width={200}
          height={300}
        ></Image>
        <Image
          src={playground}
          alt="swimming child"
          width={200}
          height={300}
        ></Image>
      </div>
    </div>
  );
};

export default RightSidebar;
