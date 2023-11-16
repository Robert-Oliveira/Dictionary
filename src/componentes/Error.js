import React from "react";
import { useSelector } from "react-redux";

const Error = () => {
  const { title, message, resolution } = useSelector((state) => state.error);

  if (!title && !message && !resolution) {
    return null; // Retorna nulo se não houver informações de erro
  }

  return (
    <div className="flex flex-col items-center mt-32">
      <span className="text-3xl mb-4">😕</span>
      {title && <h2 className="text-lg mb-2">{title}</h2>}
      {message && resolution && (
        <p className="text-base text-gray-600">
          {message} {resolution}
        </p>
      )}
    </div>
  );
};

export default Error;
