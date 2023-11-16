import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
import LandingPage from "./LandingPage";
import Content from "./Content";
import Error from "./Error";
import getWord from "../api";
import { errorAction } from "../redux/errorReducer";
import { setIdleStatus, setSubmittingStatus } from "../redux/statusReducer";
import { addWordDetails } from "../redux/wordDetailsReducer";
import { addKeyWord } from "../redux/keyWordReducer";

const Main = () => {
  const { error, formData } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(addKeyWord(e.target.value));
  };

  const clearData = () => {
    dispatch(errorAction(null));
    dispatch(addWordDetails(null));
  };

  const fetchData = async () => {
    try {
      const data = await getWord(formData.search);
      dispatch(addWordDetails(data[0]));
    } catch (err) {
      dispatch(errorAction(err));
    } finally {
      dispatch(setIdleStatus());
    }
  };

  useEffect(() => {
    if (formData.search) {
      dispatch(setSubmittingStatus());
      clearData();
      fetchData();
    }
  }, [formData.search, dispatch]);

  const showContent = formData.search && !error;
  const showLanding = !formData.search;
  const showError = formData.search && error;

  return (
    <>
      <SearchBar handleOnChange={handleOnChange} />

      {showContent && <Content />}
      {showLanding && <LandingPage />}
      {showError && <Error />}
    </>
  );
};

export default Main;
