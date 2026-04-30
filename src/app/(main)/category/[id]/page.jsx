import React from "react";
import Marq from "@/components/shared/Marq";
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getNewsByCategory, getCategories } from "@/lib/data";
import NewsCard from "@/components/homepage/news/NewsCard";

const NewsByCategorypage = async ({ params }) => {
  const { id } = await params; //getting id from link parameter

  const data = await getCategories();
  const categories = data?.data?.news_category;

  const categorical_data = await getNewsByCategory(id);
  const news = categorical_data?.data;
  console.log(news);

  return (
    <div>
      <main>
        <Marq />

        <div className="grid grid-cols-12 w-285 mx-auto py-4 gap-3">
          <div className=" col-span-3">
            <LeftSidebar categories={categories} activeId={id} />
          </div>
          <div className=" col-span-6 h-screen overflow-y-scroll">
            <p className="font-bold py-2">Dragon news home</p>
            {news.length > 0 ? (
              news.map((item) => {
                return <NewsCard item={item} key={item.id} />;
              })
            ) : (
              <p>Not found news in this category</p>
            )}
          </div>
          <div className=" col-span-3">
            <RightSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsByCategorypage;
