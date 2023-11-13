import React from 'react'

const CreateTables = () => {

  const handler = async () => { 
    let request = await fetch('/api/createViews.js')
    const data = await request.json()
    console.log(data);
  }

  return (
    <button className='border border-white hover:bg-green-500 hover:text-white'>CreateTables</button>
  )
}

export default CreateTables