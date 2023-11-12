import React from "react";
import CreateTables from "@/components/CreateTables";
import CreateViews from "@/components/CreateViews";
import PopulateTables from "@/components/PopulateTables";
import DropTables from "@/components/DropTables";
import DropViews from "@/components/DropViews";
import Queries from "@/components/Queries";

const Admin = () => {
  return (
    <div className="flex flex-row border-4 border-black">
      {/* This div is for storing the buttons */}
      <div className="flex flex-col gap-3 justify-start">
        <CreateTables></CreateTables>
        <CreateViews></CreateViews>
        <DropTables></DropTables>
        <DropViews></DropViews>
        <PopulateTables></PopulateTables>
      </div>
      <div>
        <Queries></Queries>
      </div>
      {/* This div is for the queries and output elements */}
      <div className="">  
        <p id="output">

        </p>
      </div>

    </div>
  );
};

export default Admin;
