import React from 'react';
import HomeImage from "../assets/image 1.svg"
import "primereact/resources/themes/lara-light-cyan/theme.css";

const Home = () => {
    return (
        <div className="p-4">
            <p className='text-[26px] font-bold text-[#151D48]'>Welcome To AI Agent Site</p>
            <p className='text-[16px] text-[#7E7A7A] mt-1'>Create your own customized AI agent</p>
            <div className='inline-block bg-[#E5AB39] py-2 px-8 rounded-lg cursor-pointer mt-8'>
                <p className='text-[#FFFFFF] text-center font-medium text-[12px]'>Create Agent</p>
            </div>
            <div className='flex justify-center'>
                <img
                    src={HomeImage}
                    alt="Home"
                    className='h-[350px]'
                />
            </div>
        </div>
    );
}

export default Home;
