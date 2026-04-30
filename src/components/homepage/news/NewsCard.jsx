import React from "react";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
const NewsCard = ({ item }) => {
  return (
    <div className="py-3 ">
      <div className="flex justify-between bg-[#F3F3F3] p-3 items-center rounded-md my-2 ">
        <div className="flex gap-2 ">
          <Image
            src={item.author.img}
            width={60}
            height={60}
            alt="author image"
          />
          <div>
            <p>{item.author.name}</p>
            <p>{item.author.published_date}</p>
          </div>
        </div>
        <div className="flex ">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>

      <div>
        <h1 className="py-2 font-semibold">{item.title}</h1>

        <Image
          className="mx-auto"
          src={item.image_url}
          alt="image thumbnail"
          width={550}
          height={200}
        ></Image>
        <p className="line-clamp-3">{item.details}</p>
        <Link className="text-orange-500" href={`/news/${item?._id}`}>
          {" "}
          Read more
        </Link>
      </div>

      <div className="pt-4 flex justify-between">
        <p>rating: {item.rating.number}</p>

        <div className="flex items-center gap-3">
          <FaEye />
          <p>{item.total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
