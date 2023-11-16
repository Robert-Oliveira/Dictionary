import React from "react";

import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PuffLoader color="#7e3af2" size={80} />
    </div>
  );
};

export default Loading;
