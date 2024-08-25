"use client";
import { Select } from "antd";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";

const Header = () => {
  const user = true;
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#fbfbfb] header px-5 py-3">
      <div
        className="w-full  rounded-[10px]  relative z-30 "
        style={{ filter: "drop-shadow(0px 4px 25px -1px rgba(0, 0, 0, 0.2))" }}
      >
        <div className="flex justify-between items-center h-full">
         <h1 className="text-xl font-bold">Logo</h1>
          <div className="flex items-center gap-[22.14px] ">
            <Select
              variant="borderless"
              className="w-fit "
              options={[
                { label: "EN", value: "en" },
                { label: "BN", value: "bn" },
              ]}
              value="EN"
            />
            {user ? (
              <FaRegUser className="text-base text-[#909090]" />
            ) : (
              <span className="text-white paragraph-6  hover:text-primary1 duration-150 transition-colors cursor-pointer">
                Login
              </span>
            )}
            <div className="w-[42px] h-[42px] bg-primary cursor-pointer rounded-full flex justify-center items-center">
            <MdOutlineDashboard className="text-white "role="button" onClick={() => {
            document.querySelector('.dashboard')?.classList.toggle(window.innerWidth > 1024 ? 'mini' : 'mobile')
          }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
