import React, { useEffect } from "react";
import appLogo from "../assets/images/logo.svg";
import moonIcon from "../assets/images/icon-moon.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeFontFamily, changeDarkMode } from "../redux/themeReducer";

const Header = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value, type, checked } = e.target;
    type === "checkbox"
      ? dispatch(changeDarkMode(checked))
      : dispatch(changeFontFamily(value));
  };

  useEffect(() => {
    const { darkMode, font } = theme;

    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("font", font);

    document.body.className = darkMode ? "dark-theme" : "light-theme";
    document.body.style.fontFamily = font;
  }, [theme]);

  return (
    <header className="flex items-center select-none">
      <img src={appLogo} alt="logo" className="w-8 h-9 mr-auto" />
      <div className="flex items-center gap-4">
        <div className="select-div"></div>
        <hr className={`hr ${theme.darkMode ? "hr-dark" : ""} w-24`} />
        <label className="switch relative">
          <input
            type="checkbox"
            name="darkMode"
            checked={theme.darkMode}
            onChange={handleOnChange}
            className="hidden"
          />
          <span className="slider round"></span>
        </label>
        <img
          src={moonIcon}
          alt="moon-icon"
          className={`moon-icon ${theme.darkMode ? "dark-moon-icon" : ""} h-5`}
        />
      </div>
    </header>
  );
};

export default Header;
