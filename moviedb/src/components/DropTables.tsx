"use client";

import React from "react";

const DropTables = () => {
  const handler = async () => {
    try {
      let request = await fetch("/app/api/DropTables");
      const data = await request.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
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
