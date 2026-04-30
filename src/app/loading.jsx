import React from "react";
import { Spinner } from "@heroui/react";
const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center gap-4">
      <Spinner />
    </div>
  );
};

export default Loading;
