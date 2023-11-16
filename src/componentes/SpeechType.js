import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFormData } from "../redux/formDataReducer";
import { addKeyWord } from "../redux/keyWordReducer";
import PropTypes from "prop-types";

const SpeechType = (props) => {
  const { definitions = [], synonyms = [], partOfSpeech } = props;
  const { theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  const definitionElements = definitions.map((definition, idx) => (
    <React.Fragment key={idx}>
      <li>{definition.definition}</li>
      {definition.example && (
        <p className="word-example text-sm">{`"${definition.example}"`}</p>
      )}
    </React.Fragment>
  ));

  const handleSynonymClick = (word) => {
    dispatch(addKeyWord(word));
    dispatch(addFormData(word));
  };

  const synonymElements = synonyms.map((synonym, idx) => (
    <span
      className="synonym-span cursor-pointer"
      key={idx}
      onClick={() => handleSynonymClick(synonym)}
    >
      {idx === 0 ? synonym : `, ${synonym}`}
    </span>
  ));

  return (
    <div className="noun-container">
      <h4 className={`noun ${theme.darkMode ? "text-white" : ""}`}>
        {partOfSpeech}
      </h4>
      <p className="meaning text-gray-600">Meaning</p>
      <ul className="list">{definitionElements}</ul>
      {synonyms.length > 0 && (
        <div className="synonym-container">
          <p className="synonym text-gray-600">Synonyms</p>
          <div className="synonym-description">{synonymElements}</div>
        </div>
      )}
    </div>
  );
};

SpeechType.propTypes = {
  definitions: PropTypes.array,
  synonyms: PropTypes.array,
  partOfSpeech: PropTypes.string,
};

export default SpeechType;
