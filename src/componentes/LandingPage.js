import React from "react";
import { useDispatch } from "react-redux";
import { addKeyWord } from "../redux/keyWordReducer";
import { addFormData } from "../redux/formDataReducer";

const LandingPage = () => {
  const dispatch = useDispatch();

  const handleAmazingClick = (word) => {
    dispatch(addKeyWord(word));
    dispatch(addFormData(word));
  };

  const introText = (
    <>
      <h2 className="text-3xl font-bold mb-4">
        Welcome to the Dictionary App!
      </h2>
      <p className="text-lg mb-4">
        Type a word in the input above to begin the search!
      </p>
    </>
  );

  return (
    <div className="text-center py-24">
      {introText}
      <p className="text-lg">
        You can start your search with the word{" "}
        <span
          className="text-purple-500 cursor-pointer"
          onClick={() => handleAmazingClick("amazing")}
        >
          amazing
        </span>{" "}
        because you are an amazing person for using my app!
      </p>
    </div>
  );
};

export default LandingPage;
