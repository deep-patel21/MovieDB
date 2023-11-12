import React from "react";
import Admin from "../admin/page";
import User from "../user/page";

const Login = () => {
  const admin = true;

  return (
    <div className="flex flex-row justify-center items-center font-mono text-green-500">
      <div className="w-3/4 h-screen p-28">
        <form className="border-2 border-green-500 w-full h-full flex flex-col gap-16 pt-3">

          <h1 className="text-7xl text-center pt-5 font-mono">Login</h1>

          <div className="flex justify-around">
            <input
              className="bg-black text-white placeholder-white border-2 border-green-500 outline-none p-2"
              placeholder="Username..."
            ></input>
            <input
              className="bg-black text-white placeholder-white border-2 border-green-500 outline-none p-2"
              placeholder="Password..."
            ></input>
          </div>

          <div className="h-full text-center">
            <button className="text-white w-1/2 border-2 border-green-500 outline-none p-2 hover:bg-green-500">
              login
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
