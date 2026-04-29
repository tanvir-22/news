import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="py-4 space-y-1">
      <Image
        className="mx-auto"
        src={logo}
        width={350}
        height={70}
        alt="logo"
      />
      <p className="text-center text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-center">{format(new Date(), "EEEE, LLL dd, yyyy")}</p>
    </div>
  );
};

export default Header;
