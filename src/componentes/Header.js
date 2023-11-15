import React, { useEffect } from "react";
import appLogo from "../assets/images/logo.svg";
import moonIcon from "../assets/images/icon-moon.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeFontFamily, changeDarkMode } from "../redux/themeReducer";

// const Header = () => {
//   const theme = useSelector((state) => state.theme);
//   const dispatch = useDispatch();

//   const handleOnChange = (e) => {
//     const { value, type, checked } = e.target;
//     type === "checkbox"
//       ? dispatch(changeDarkMode(checked))
//       : dispatch(changeFontFamily(value));
//   };

//   useEffect(() => {
//     localStorage.setItem("darkMode", theme.darkMode);
//     localStorage.setItem("font", theme.font);
//     theme.darkMode
//       ? (document.body.className = "dark-theme")
//       : (document.body.className = "light-theme");
//     document.body.style.fontFamily = theme.font;
//   }, [theme]);

//   return (
//     <header className="app-header">
//       <img src={appLogo} alt="logo" className="logo" />
//       <div className="app-font-slider">
//         <div className="select-div"></div>
//         <hr className={`hr ${theme.darkMode ? "hr-dark" : ""}`}></hr>
//         <label className="switch">
//           <input
//             type="checkbox"
//             name="darkMode"
//             checked={theme.darkMode}
//             onChange={handleOnChange}
//           />
//           <span className="slider round"></span>
//         </label>
//         <img
//           src={moonIcon}
//           alt="moon-icon"
//           className={`moon-icon ${theme.darkMode ? "dark-moon-icon" : ""}`}
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;
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
    localStorage.setItem("darkMode", theme.darkMode);
    localStorage.setItem("font", theme.font);
    document.body.className = theme.darkMode ? "dark-theme" : "light-theme";
    document.body.style.fontFamily = theme.font;
  }, [theme]);

  return (
    <header className="app-header flex items-center">
      <img src={appLogo} alt="logo" className="logo w-8 h-9 mr-auto" />
      <div className="app-font-slider flex items-center gap-4">
        <div className="select-div"></div>
        <hr className={`hr ${theme.darkMode ? "hr-dark" : ""} w-24`}></hr>
        <label className="switch relative">
          <input
            type="checkbox"
            name="darkMode"
            checked={theme.darkMode}
            onChange={handleOnChange}
            className="hidden"
          />
          <span className="slider w-10 h-5 rounded-full bg-gray-400 absolute top-0 left-0"></span>
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
