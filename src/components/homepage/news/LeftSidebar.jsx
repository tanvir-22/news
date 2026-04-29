import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h1 className="font-bold py-2">All Category</h1>
      {categories.map((item) => {
        return (
          <Link className="block p-3" href={`/category/${item.category_id}`}>
            <li
              className={`  list-none
            text-center
                p-3
         
            rounded-md 
            ${activeId === item.category_id && "bg-slate-200"}`}
              key={item.category_id}
            >
              {item.category_name}
            </li>
          </Link>
        );
      })}
    </div>
  );
};

export default LeftSidebar;
