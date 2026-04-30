"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import userimg from "../../../public/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
const Navbar = () => {
  const { data: session, isPending } = authClient.useSession(); // const x = authClient.useSession() //session = x.data
  const user = session?.user;
  console.log(user);
  return (
    <>
      <div className="relative flex py-3 justify-between items-center w-285 mx-auto">
        <ul className="  flex w-full justify-center gap-3 font-semibold text-[gray]">
          <li>
            <NavLink href={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink href={`/about`}>About</NavLink>
          </li>
          <li>
            <NavLink href={`/career`}>Career</NavLink>
          </li>
        </ul>
        {isPending ? (
          "Loading..."
        ) : user ? (
          <div className="absolute flex gap-3 items-center right-1">
            <p>Hello, {user.name}!</p>
            <Image
              className="rounded-full w-10 h-10 object-cover"
              src={user.image || userimg}
              alt="user-logo"
              width={50}
              height={50}
            />

            <button
              onClick={async () => {
                await authClient.signOut();
              }}
              className="px-4 py-1 bg-[#403F3F] text-white font-semibold"
            >
              <Link href={`/login`}>Logout</Link>
            </button>
          </div>
        ) : (
          <div className="absolute flex gap-3 items-center right-1">
            <Image
              className="rounded-full w-10 h-10 object-cover"
              src={userimg}
              alt="user-logo"
              width={50}
              height={50}
            />
            <button className="px-4 py-1 bg-[#403F3F] text-white font-semibold">
              <Link href={`/login`}>Login</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
