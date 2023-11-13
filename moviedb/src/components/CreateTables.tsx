import React from 'react'

const CreateTables = () => {

<<<<<<< HEAD
  const handler = async () =>
  {
    let request = await fetch('/api/CreateTables.js')
    const response = await request.json();
    console.log(response);
  } 
=======
  const handler = async () => { 
    let request = await fetch('/api/createViews.js')
    const data = await request.json()
    console.log(data);
  }
>>>>>>> f42fd4b5cf09b16970596324f4954d70593854ac

  return (
    <button className='border border-white hover:bg-green-500 hover:text-white'>CreateTables</button>
  )
}

export default CreateTables