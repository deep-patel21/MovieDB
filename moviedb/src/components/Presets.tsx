"use client";

import React from "react";

const Presets = () => {
  const handler = async () => {
    let request = await fetch("/app/api/Queries.js");
    const data = await request.json();
    console.log(data);
  };

  const testFunc1 = async () => {
    let content = document.getElementById("output");
    if (content) {
      content.setAttribute(
        "value",
        "SELECT f.title AS title, d.first_name || \' \' || d.last_name AS DIRECTOR_and_MOVIE FROM Film f JOIN Director d ON f.director_id = d.director_id ORDER BY first_name"
      );
    }
  };
  const testFunc2 = async () => {
    let content = document.getElementById("output");
    if (content) {
      content.setAttribute(
        "value", 
        "SELECT first_name, last_name FROM Actor"
        );
    }
  };
  const testFunc3 = async () => {
    let content = document.getElementById("output");
    if (content) {
      content.setAttribute(
        "value", 
        "SELECT first_name, last_name, username, password FROM TheUser ORDER BY password"
        );
    }
  };
  const testFunc4 = async () => {
    let content = document.getElementById("output");
    if (content) {
      content.setAttribute( 
        "value",
        "SELECT a.theName, a.presenter, a.year_of_win, r.theName FROM Awards a JOIN Receiver r ON a.receiver_id = r.receiver_id WHERE a.year_of_win > 2021"
      );
    }
  };

  return (
    <div className="flex flex-row text-2xl gap-1 2xl:gap-11 2xl:ml-0">
      <button
        className="hover:bg-green-500 hover:text-white"
        onClick={testFunc1}
        >
        {" "}
        | Preset 1 |{" "}
      </button>
      <button
        className="hover:bg-green-500 hover:text-white"
        onClick={testFunc2}
      >
        {" "}
        | Preset 2 |{" "}
      </button>
      <button
        className="hover:bg-green-500 hover:text-white"
        onClick={testFunc3}
      >
        {" "}
        | Preset 3 |{" "}
      </button>
      <button
        className="hover:bg-green-500 hover:text-white"
        onClick={testFunc4}
      >
        {" "}
        | Preset 4 |{" "}
      </button>
    </div>
  );
};

export default Presets;