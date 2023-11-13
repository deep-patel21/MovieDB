"use client";

import React from "react";

const DropTables = () => {

  const handler = async () => {
<<<<<<< HEAD
    try{
      let request = await fetch("/api/DropTables");
      const data = await request.json();
      console.log(data);
    }catch(err){
      console.log(err)
    }
=======
    let request = await fetch("/api/DropTables");
    const data = await request.json();
    console.log(data);
>>>>>>> 5394bd8bc0926cad92fa2283316494dd61dd48ae
  };

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
