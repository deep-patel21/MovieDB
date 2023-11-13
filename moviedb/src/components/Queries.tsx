import React from 'react'

const Queries = () => {

  const handler = async () => { 
    let request = await fetch('/api/Queries.js')
    const data = await request.json()
    console.log(data);
  }

  return (
    <div>Queries</div>
  )
}

export default Queries