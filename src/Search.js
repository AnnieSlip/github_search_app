import { getSuggestedQuery } from "@testing-library/react";
import React, { useState, useEffect } from "react";
const URL = "https://api.github.com/users/";
const octocat = "octocat";

const Search = ({ userInfo, setUserInfo }) => {
  const [userName, setUserName] = useState("");

  const getUser = async (name) => {
    const response = await fetch(`${URL}${name}`);
    const user = await response.json();
    setUserInfo(user);
    console.log(user);
  };

  useEffect(() => {
    getUser(octocat);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    getUser(userName);
  };

  return (
    <div className="cards_container search_component">
      <img src="../assets/icon-search.svg" alt="search icon" id="search_icon" />
      <input
        type="text"
        className="search_input"
        name="github_user"
        placeholder="Search GitHub username..."
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button type="submit" className="search_button" onClick={submitHandler}>
        Search
      </button>
    </div>
  );
};

export default Search;
