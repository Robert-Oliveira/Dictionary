import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFormData } from "../redux/formDataReducer";
import { addKeyWord } from "../redux/keyWordReducer";
import PropTypes from "prop-types";

// const SpeechType = (props) => {
//   const { definitions, synonyms, partOfSpeech } = props;
//   const { theme } = useSelector((state) => state);
//   const dispatch = useDispatch();

//   const defintionEls = definitions.map((definition, idx) => {
//     return (
//       <React.Fragment key={idx}>
//         <li>{definition.definition}</li>
//         {definition.example && (
//           <p className="word-example">{`"${definition.example}"`}</p>
//         )}
//       </React.Fragment>
//     );
//   });

//   function handleSynonymClick(word) {
//     dispatch(addKeyWord(word));
//     dispatch(addFormData(word));
//   }

//   const synonymsEls = synonyms.map((synonym, idx) => (
//     <span
//       className="synonym-span"
//       key={idx}
//       onClick={() => handleSynonymClick(synonym)}
//     >
//       {(idx ? ", " : "") + synonym}
//     </span>
//   ));

//   return (
//     <div className="noun-container">
//       <h4 className={`noun ${theme.darkMode ? "noun-dark" : ""}`}>
//         {partOfSpeech}
//       </h4>
//       <p className="meaning">Meaning</p>
//       <ul className="list">{defintionEls}</ul>
//       {synonyms.length > 0 && (
//         <div className="synonym-container">
//           <p className="synonym">Synonyms</p>
//           <p className="synonym-description">{synonymsEls}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SpeechType;

// SpeechType.propTypes = {
//   definitions: PropTypes.object,
//   synonyms: PropTypes.object,
//   partOfSpeech: PropTypes.string,
// };
const SpeechType = (props) => {
  const { definitions, synonyms, partOfSpeech } = props;
  const { theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  const defintionEls = definitions.map((definition, idx) => {
    return (
      <React.Fragment key={idx}>
        <li>{definition.definition}</li>
        {definition.example && (
          <p className="word-example text-sm">{`"${definition.example}"`}</p>
        )}
      </React.Fragment>
    );
  });

  function handleSynonymClick(word) {
    dispatch(addKeyWord(word));
    dispatch(addFormData(word));
  }

  const synonymsEls = synonyms.map((synonym, idx) => (
    <span
      className="synonym-span cursor-pointer"
      key={idx}
      onClick={() => handleSynonymClick(synonym)}
    >
      {(idx ? ", " : "") + synonym}
    </span>
  ));

  return (
    <div className="noun-container">
      <h4 className={`noun ${theme.darkMode ? "text-white" : ""}`}>
        {partOfSpeech}
      </h4>
      <p className="meaning text-gray-600">Meaning</p>
      <ul className="list">{defintionEls}</ul>
      {synonyms.length > 0 && (
        <div className="synonym-container">
          <p className="synonym text-gray-600">Synonyms</p>
          <div className="synonym-description">{synonymsEls}</div>
        </div>
      )}
    </div>
  );
};

export default SpeechType;

SpeechType.propTypes = {
  definitions: PropTypes.array,
  synonyms: PropTypes.array,
  partOfSpeech: PropTypes.string,
};
