"use client";

import React from "react";

const DropTables = () => {
<<<<<<< HEAD
  
  const handler = async () => {
    let request = await fetch("/api/DropTables.js");
    const data = await request.json();
    console.log(data);
  };
=======

  const handler = async () => { 
    let request = await fetch('/api/createViews.js')
    const data = await request.json()
    console.log(data);
  }

  return (
    <button className='border border-white hover:bg-green-500 hover:text-white'>DropTables</button>
  )
}
>>>>>>> f42fd4b5cf09b16970596324f4954d70593854ac

  return (
    <button
      className="border border-white hover:bg-green-500 hover:text-white"
      onClick={handler}
    >
      DropTables
    </button>
  );
};

export default DropTables;
