import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="text-center px-6">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
        Oops! Page not found
      </h2>

      <p className="text-gray-500 mt-2">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-block font-semibold mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
