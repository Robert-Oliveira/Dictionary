import React from "react";
import SpeechType from "./SpeechType";
import Loading from "./Loading";
import playIcon from "../assets/images/icon-play.svg";
import playIconHover from "../assets/images/icon-play-hover.svg";
import newWindow from "../assets/images/icon-new-window.svg";

import { useSelector } from "react-redux";

const Content = () => {
  const { theme, status, wordDetails } = useSelector((state) => state);

  if (!wordDetails) {
    return null; // Retorna nulo caso não haja wordDetails
  }

  const { word, phonetic, meanings } = wordDetails;

  const partOfSpeech = meanings?.map((speech, idx) => {
    return speech.partOfSpeech && <SpeechType key={idx} {...speech} />;
  });

  if (status === "submitting") {
    return <Loading />;
  }

  return (
    <section>
      <div className="flex items-center">
        <div className="flex items-center ml-auto">
          <h1 className="text-4xl font-semibold">{word}</h1>
          <p className="text-base font-normal">{phonetic}</p>
        </div>
      </div>
      {partOfSpeech}
      <div
        className={`source-container ${
          theme.darkMode ? "source-container-dark" : ""
        }`}
      >
        <p className="source text-sm underline">Source</p>
        <a
          id="source-link"
          className={`source-link ${
            theme.darkMode ? "dark-source-link" : ""
          } text-base`}
          target="_blank"
          rel="noreferrer"
          href={`https://en.wiktionary.org/wiki/${word}`}
        >
          {`https://en.wiktionary.org/wiki/${word}`}
        </a>
        <a
          href={`https://en.wiktionary.org/wiki/${word}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={newWindow} alt="" className="new-window" />
        </a>
      </div>
    </section>
  );
};

export default Content;
