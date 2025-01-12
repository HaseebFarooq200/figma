import React from "react";
import dummyLogo from "../assets/dummy logo.svg";
import { ChartPie, Settings, LogOut, BotMessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-[#683531] rounded-xl m-3 p-3">
      <div className="flex justify-center items-center space-x-3">
        <img src={dummyLogo} alt="" />
        <h1 className="text-[#FFFFFF] text-[30px] font-semibold  font-poppins">
          AI Agent
        </h1>
      </div>

      <Link to="/">
        <div className="flex justify-center items-center space-x-3 mt-8">
          <div className="w-[50%] flex justify-end">
            <ChartPie size={18} className="text-white" />
          </div>
          <p className="w-full text-[#FFFFFF] text-[18px] font-semibold cursor-pointer">
            Dashboard
          </p>
        </div>
      </Link>
      <Link to='/table'>
        <div className="flex justify-center items-center space-x-3 mt-4">
          <div className="w-[50%] flex justify-end">
            <BotMessageSquare size={18} className="text-white" />
          </div>
          <p className="w-full text-[#FFFFFF] text-[18px] font-semibold cursor-pointer">
            Agent
          </p>
        </div>
      </Link>
      <div className="flex justify-center items-center space-x-3 mt-4">
        <div className="w-[50%] flex justify-end">
          <Settings size={18} className="text-white" />
        </div>
        <p className="w-full text-[#FFFFFF] text-[18px] font-semibold cursor-pointer">
          Settings
        </p>
      </div>
      <div className="flex justify-center items-center space-x-3 mt-4">
        <div className="w-[50%] flex justify-end">
          <LogOut size={18} className="text-white" />
        </div>
        <p className="w-full text-[#FFFFFF] text-[18px] font-semibold cursor-pointer">
          Sign Out
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
