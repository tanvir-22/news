import React from "react";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";
import { getNewsById } from "@/lib/data";
import Link from "next/link";

export const generateMetadata = async ({ params, searchParams }) => {
  const { id } = await params;
  const news = await getNewsById(id);
  const data = news?.data[0];
  console.log(data);
  return {
    title: data.title,
    description: data.details,
  };
};

const Detailspage = async ({ params }) => {
  const { id } = await params;

  const data = await getNewsById(id);

  const news = data?.data;

  return (
    <div className="grid grid-cols-12 w-285 mx-auto py-4 gap-3">
      <div className=" col-span-9">
        <p className="font-bold py-2">Dragon news home</p>
        <Image
          src={news[0].image_url}
          alt="big image "
          width={750}
          height={550}
        ></Image>
        <p className="py-4">{news[0].details}</p>
        <Link href={`/category/${news[0].category_id}`}>
          <button className="px-4 py-2 rounded-md  bg-red-500 text-white">
            See other news of this category
          </button>
        </Link>
      </div>
      <div className=" col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Detailspage;
