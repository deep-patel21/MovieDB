"use client";

import React from "react";
import droptables from "../app/api/DropTables"

const DropTables = () => {
  const Handler = async () => {
    await droptables();
  };

  return (
    <button
      className="border border-white hover:bg-green-500 hover:text-white"
      onClick={Handler}
    >
      DropTables
    </button>
  );
};

export default DropTables;
