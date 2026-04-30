import React from "react";
import Marquee from "react-fast-marquee";
import { getNewsByCategory } from "../../lib/data";

const Marq = async () => {
  const data = await getNewsByCategory("01");
  const arr = data?.data;
  console.log(arr, "arr");
  return (
    <div className="flex gap-3 w-[1140px] mx-auto bg-[#F3F3F3] mt-2 p-3">
      <button className="px-3 py-2 bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true}>
        {arr.map((item) => (
          <span className="mx-2">{item.title}.</span>
        ))}
      </Marquee>
    </div>
  );
};

export default Marq;
