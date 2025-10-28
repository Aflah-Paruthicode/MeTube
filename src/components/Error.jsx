import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-screen bg-[#f1f1f1] flex justify-center items-center flex-col">
      <img src="/404.png" alt="" />
      <p className="text-center py-3 leading-5">
        This page isn't available. Sorry about that. <br /> 
        Try searching for something else. 
      </p>  
      <Link className="font-bold border border-white p-2 rounded-lg flex items-center gap-2" to={'/'}> <span className="bg-red-500 text-white p-1 rounded-lg">Go</span>  To Home</Link>
    </div>
  );
};

export default Error;
