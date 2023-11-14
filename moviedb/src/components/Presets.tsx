'use client';

import React from 'react'

const Presets = () => {
    const handler = async () => { 
        let request = await fetch('/app/api/Queries.js')
        const data = await request.json()
        console.log(data);
      }

    const helloWorld = async () => {
        console.log("Hello. Test Successful.");
    }
    
      return (
        <div className='flex flex-row gap-11'>
            <button className="hover:bg-green-500 hover:text-white" onClick={helloWorld}> | Preset 1 | </button>
            <button className="hover:bg-green-500 hover:text-white"> | Preset 2 | </button>
            <button className="hover:bg-green-500 hover:text-white"> | Preset 3 | </button>
            <button className="hover:bg-green-500 hover:text-white"> | Preset 4 | </button>
        </div>    
      )
}

export default Presets