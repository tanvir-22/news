import Image from "next/image";
import Link from "next/link";
import React from "react";
import user from "../../../public/assets/user.png";
import NavLink from "./NavLink";
const Navbar = () => {
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
        <div className="absolute flex gap-3 right-1">
          <Image src={user} alt="user-logo" width={40} height={40} />
          <button className="px-4 py-1 bg-[#403F3F] text-white font-semibold">
            <Link href={`/login`}>Login</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
