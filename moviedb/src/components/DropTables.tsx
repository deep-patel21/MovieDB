"use client";

import React from "react";
import droptables from "@/app/api/DropTables";

const DropTables = () => {
  const handler = async () => { 
    try {
      const response = await fetch('/api/droptables', { method: 'POST' });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

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
