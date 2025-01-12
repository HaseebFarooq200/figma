import React from "react";
import { Input, Select } from "antd";
import { Bell } from "lucide-react";
import ProfilePic from "../assets/avatar_2.jpeg"
const { Search } = Input;

const Navbar = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="flex flex-row justify-between items-center bg-[#FFFFFF] shadow-lg p-4 rounded-lg">
      <p className="text-[18px] font-semibold text-[#151D48]">Dashboard</p>
      <Search
        placeholder="search here"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <Select
        defaultValue="English"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'english',
            label: 'English',
          }
        ]}
      />
      <div className="flex space-x-4" >
        <div className="flex items-center bg-[#FFFAF1] rounded-lg px-3">
          <Bell className="text-[#FFA412]" />
        </div>
        <div className="flex space-x-4">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full  shadow-lg"
          />
          <div className="">
            <p className="text-[12px] font-medium text-[#151D48]">Musfiq</p>
            <p className="text-[#737791] text-[12px]">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
