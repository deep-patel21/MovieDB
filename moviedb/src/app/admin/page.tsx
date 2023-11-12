import React from 'react'
import CreateTables from '@/components/CreateTables'
import CreateViews from '@/components/CreateViews'
import PopulateTables from '@/components/PopulateTables'
import DropTables from '@/components/DropTables'
import DropViews from '@/components/DropViews'
import Queries from '@/components/Queries'


const Admin = () => {
  return (
    <div>
        <CreateTables></CreateTables>
        <CreateViews></CreateViews>
        <PopulateTables></PopulateTables>
        <DropTables></DropTables>
        <DropViews></DropViews>
        <Queries></Queries>
    </div>
  )
}

export default Admin