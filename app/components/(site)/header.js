"use client";

import { Button, Dropdown, Menu, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Header = () => {

  const user = true;
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-primary bg-opacity-25">
      <div
        className="w-full  rounded-[10px]  relative z-30 "
        style={{ filter: "drop-shadow(0px 4px 25px -1px rgba(0, 0, 0, 0.2))" }}
      >
        <div className="flex justify-between items-center ">
         <h1 className="text-4xl py-2">QuantaServe</h1>
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
              <FaRegUser className="text-base text-white" />
            ) : (
              <span className="text-white paragraph-6  hover:text-primary1 duration-150 transition-colors cursor-pointer">
                Login
              </span>
            )}
            {toggle ? (
              <IoMdClose
                className="paragraph-6 lg:hidden block"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            ) : (
              <FaBars
                className="paragraph-6 lg:hidden block"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            )}
       
          </div>
        </div>
        {/* {toggle && (
          <div className=" top-[77px] lg:hidden flex flex-col gap-6 absolute  z-40 h-auto left-0 bg-[#ebedf9] pt-2 w-full container ">
            <Dropdown overlay={menu} trigger={["hover"]} className="">
              <div className="flex items-center  text-white group">
                <span className="paragraph-6  group-hover:text-primary1 duration-150 transition-colors">
                  Home
                </span>
                <FaPlus className="!text-[10px] text-textdark group-hover:text-primary1 duration-150 transition-colors" />
              </div>
            </Dropdown>
            <Link
              href="/property"
              className="paragraph-6 text-textdark hover:text-primary1 duration-150 transition-colors"
            >
              Property
            </Link>
            <Link
              href="/pricing"
              className="paragraph-6 text-textdark hover:text-primary1 duration-150 transition-colors"
            >
              Pricing
            </Link>
            <Dropdown overlay={menu2} trigger={["hover"]}>
              <div className="flex items-center  text-textdark group ">
                <span className="paragraph-6  group-hover:text-primary1 duration-150 transition-colors">
                  Pages
                </span>
                <FaPlus className="!text-[10px] text-textdark group-hover:text-primary1 duration-150 transition-colors" />
              </div>
            </Dropdown>
            <Link
              href="/"
              className="paragraph-6 text-textdark  hover:text-primary1 duration-150 transition-colors"
            >
              Contact
            </Link>
            <button className="mb-6 w-full py-2 bg-primary1 text-white text-center rounded cursor-pointer">
              <span className="flex items-center justify-center  text-textdark group gap-2">
                <span className="paragraph-6 text-white">
                  Add Property
                </span>
                <FaPlus className="!text-[10px] text-white" />
              </span>
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
