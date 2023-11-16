'use client';

import React from 'react'

const Queries = () => {
  const handler = async () => { 
      try {
        const response = await fetch('http://localhost:3001/api/Queries', { method: 'GET' });
        const data = await response.json();
        console.log(data);
        alert("Successfully queried data!");
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <button
      className="hover:bg-green-500 hover:text-white"
      onClick={handler}
    >
      Query
    </button>
  )
}

export default Queries