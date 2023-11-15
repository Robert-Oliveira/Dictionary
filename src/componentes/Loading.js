import React from "react";
import { PuffLoader } from "react-spinners";

// const Loading = () => {
//   return (
//         <div className="loader-container">
//             <PuffLoader color={'#A445ED'} size={150} />
//         </div>
//   )
// }

// export default Loading
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-purple-500 h-24 w-24"></div>
    </div>
  );
};

export default Loading;
