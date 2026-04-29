import React from "react";
import Marquee from "react-fast-marquee";
const Marq = () => {
  return (
    <div className="flex gap-3 w-[1140px] mx-auto bg-[#F3F3F3] p-3">
      <button className="px-3 py-2 bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default Marq;
