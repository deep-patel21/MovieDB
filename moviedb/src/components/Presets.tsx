"use client";

import React from "react";
import Queries from "./Queries";

const Presets = () => {
  // const testFunc1 = async () => {
  //   let querycontent = document.getElementById("input");
  //   let outputcontent = document.getElementById("output");
  //   if (querycontent && outputcontent) {
  //     querycontent.setAttribute(
  //       "value",
  //       "SELECT f.title AS title, d.first_name || \' \' || d.last_name AS DIRECTOR_and_MOVIE FROM Film f JOIN Director d ON f.director_id = d.director_id ORDER BY first_name"
  //     );
  //     outputcontent.textContent = "Hellllo this is the query one output coming to you live from the output box!";
  //   }
  // };
  // const testFunc2 = async () => {
  //   let querycontent = document.getElementById("input");
  //   let outputcontent = document.getElementById("output");
  //   if (querycontent && outputcontent) {
  //     querycontent.setAttribute(
  //       "value", 
  //       "SELECT first_name, last_name FROM Actor"
  //       );
  //     outputcontent.textContent = "AYOOOOO Dis is preset 2 output!";
  //   }
  // };
  // const testFunc3 = async () => {
  //   let querycontent = document.getElementById("input");
  //   let outputcontent = document.getElementById("output");
  //   if (querycontent && outputcontent) {
  //     querycontent.setAttribute(
  //       "value", 
  //       "SELECT first_name, last_name, username, password FROM TheUser ORDER BY password"
  //       );
  //     outputcontent.textContent = "hey Hey Hey. Preset 3 Coming to you in the output!";
  //   }
  // };
  // const testFunc4 = async () => {
  //   let querycontent = document.getElementById("input");
  //   let outputcontent = document.getElementById("output");
  //   if (querycontent && outputcontent) {
  //     querycontent.setAttribute( 
  //       "value",
  //       "SELECT a.theName, a.presenter, a.year_of_win, r.theName FROM Awards a JOIN Receiver r ON a.receiver_id = r.receiver_id WHERE a.year_of_win > 2021"
  //     );
  //     outputcontent.textContent = "Preset 4 output coming to you live!";
  //   }
  // };

  const getquery1 = async () => { 
    let querycontent = document.getElementById("input");
    let outputcontent = document.getElementById("output");
    try {
      const response = await fetch('http://localhost:3001/api/Query1', { method: 'GET' });
      const data = await response.json();
      if (outputcontent && querycontent) {
        querycontent.setAttribute( 
          "value",
          "SELECT f.title AS title, d.first_name || \' \' || d.last_name AS DIRECTOR_and_MOVIE FROM Film f JOIN Director d ON f.director_id = d.director_id ORDER BY first_name"
        );
        // outputcontent.textContent = "[ 'Harry Potter and The Prizoner of Azkaban', 'Alfonso Cuaron' ],\
        // [ 'Mission: Impossible - Ghost Protocol', 'Brad Bird' ],\
        // [ 'Oppenheimer', 'Christopher Nolan' ],\
        // [ 'Dunkirk', 'Christopher Nolan' ],\
        // [ 'Forrest Gump', 'Frank Darabont' ],\
        // [ 'Terminator 2: Judgement Day', 'James Cameron' ],\
        // [ 'Pulp Fiction', 'Quentin Tarantino' ],\
        // [ 'The Matrix', 'Robert Zemeckis' ],\
        // [ 'Jurassic Park', 'Steven Spielberg' ]";
        outputcontent.textContent = data;
      }
      console.log(data);
      //alert("Successfully queried data!");
    } catch (error) {
      console.error(error);
    }
  }

  const getquery2 = async () => { 
    let querycontent = document.getElementById("input");
    let outputcontent = document.getElementById("output");
    try {
      const response = await fetch('http://localhost:3001/api/Query2', { method: 'GET' });
      const data = await response.json();
      if (outputcontent && querycontent) {
        querycontent.setAttribute( 
          "value",
          "SELECT first_name, last_name FROM Actor"
        );
        outputcontent.textContent = data;
      }
      console.log(data);
      //alert("Successfully queried data!");
    } catch (error) {
      console.error(error);
    }
  }

  const getquery3 = async () => { 
    let querycontent = document.getElementById("input");
    let outputcontent = document.getElementById("output");
    try {
      const response = await fetch('http://localhost:3001/api/Query3', { method: 'GET' });
      const data = await response.json();
      if (outputcontent && querycontent) {
        querycontent.setAttribute( 
          "value",
          "SELECT first_name, last_name, username, password FROM TheUser ORDER BY password"
        );
        outputcontent.textContent = data;
      }
      console.log(data);
      //alert("Successfully queried data!");
    } catch (error) {
      console.error(error);
    }
  }

  const getquery4 = async () => { 
    let querycontent = document.getElementById("input");
    let outputcontent = document.getElementById("output");
    try {
      const response = await fetch('http://localhost:3001/api/Query4', { method: 'GET' });
      const data = await response.json();
      if (outputcontent && querycontent) {
        querycontent.setAttribute( 
          "value",
          "SELECT a.theName, a.presenter, a.year_of_win, r.theName FROM Awards a JOIN Receiver r ON a.receiver_id = r.receiver_id WHERE a.year_of_win > 2021"
        );
        outputcontent.textContent = data;
      }
      console.log(data);
      //alert("Successfully queried data!");
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="flex flex-row text-2xl gap-1 2xl:gap-11 2xl:ml-0">
      <button
        className="hover:bg-green-500 hover:text-white"
        onClick={getquery1}
        >
        {" "}
        | Preset 1 |{" "}
      </button>
      <button
        className="hover:bg-green-500 hover:text-white"
        onClick={getquery2}
      >
        {" "}
        | Preset 2 |{" "}
      </button>
      <button
        className="hover:bg-green-500 hover:text-white"
        onClick={getquery3}
      >
        {" "}
        | Preset 3 |{" "}
      </button>
      <button
        className="hover:bg-green-500 hover:text-white"
        onClick={getquery4}
      >
        {" "}
        | Preset 4 |{" "}
      </button>
    </div>
  );
};

export default Presets;