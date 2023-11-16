import React, { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import { addFormData } from "../redux/formDataReducer";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

const SearchBar = ({ handleOnChange }) => {
  const { theme, status, keyWord } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFormData(keyWord));
  };

  const handleInvalid = (e) => {
    e.preventDefault();
    setErrors(true);
  };

  const handleInputChange = (e) => {
    setErrors(false);
    handleOnChange(e);
  };

  return (
    <section className="search-bar-container">
      <form onSubmit={handleSubmit} className="flex items-center relative">
        <input
          type="text"
          id="search-bar"
          className={`search-bar ${theme.darkMode ? "dark-search-bar" : ""} ${
            errors ? "searchbar-error" : ""
          }`}
          placeholder="Search for any word..."
          name="keyWord"
          value={keyWord}
          onChange={handleInputChange}
          disabled={status === "submitting"}
          required
          onInvalid={handleInvalid}
        />
        {errors && (
          <p className="required-error absolute top-9 right-3">
            Whoops, can´t be empty...
          </p>
        )}
        <button className="submit-btn" type="submit">
          <img src={searchIcon} alt="search-icon" className="search-icon" />
        </button>
      </form>
    </section>
  );
};

SearchBar.propTypes = {
  handleOnChange: PropTypes.func,
};

export default SearchBar;
