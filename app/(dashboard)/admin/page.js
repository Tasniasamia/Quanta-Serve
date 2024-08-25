"use client";
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiZcash } from "react-icons/si";
import { Card, Progress } from "antd";
import { FcServices } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { BiCycling } from "react-icons/bi";
import { FcManager } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { PiHandWithdrawFill } from "react-icons/pi";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";

const page = () => {
  return (
    <div className="bg-[#f0f0f8]">
      <div className="container p-[20px] bg-[#f0f0f8]">
        {/* list of title coin */}
        <ul className="list-none p-[10px] flex flex-wrap xl:justify-between  bg-white text-[#898989]">
          <li className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <FcBusinessman />
            <span>Total Service Provider</span>
            <span>50</span>
          </li>
          <li className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <BiCycling/>
            <span>Total Delivery Man</span>
            <span>34</span>
          </li>
          <li className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <FcManager />
            <span>Total Employee</span>
            <span>50</span>
          </li>
          <li className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <FcServices className="text-[#70c481]" />
            <span>Total Service</span>
            <span>100</span>
          </li>
          <li className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <FaUser className="text-[#6371de]" />
            <span>Total User</span>
            <span>1000</span>
          </li>
          <li className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <FaWallet className="text-[#fd7c28]" />
            <span>Wallet</span>
            <span>$1190.05</span>
          </li>
          <li className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <PiHandWithdrawFill className="text-[#4e8de7]" />
            <span>Withdraw</span>
            <span>$690.05</span>
          </li>
        
        </ul>
        {/* card */}
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-[24px] mt-[20px]">
          <Card className="bg-orange-300 ">
            <div className="flex flex-wrap justify-between gap-[20px] items-center  text-white">
                  <div>
                    <h3 className="font-bold text-xl">Total Service</h3>
                    <p className=" text-[28px]">1000</p>
                  </div>
                  <MdMiscellaneousServices className="text-[50px] text-white " />
                 </div>
          </Card>
          <Card className="bg-sky-400">
            <div className="flex flex-wrap  justify-between gap-[20px] items-center  text-white">
                  <div>
                    <h3 className="font-bold text-xl">Total Employee</h3>
                    <p className="  text-[28px]">400</p>
                  </div>
                  <FaUserTie className="text-[50px] text-white " />
                 </div>
          </Card>
          <Card className="bg-green-300">
            <div className="flex flex-wrap justify-between gap-[20px] items-center  text-white">
                  <div>
                    <h3 className="font-bold  text-xl">Total User</h3>
                    <p className="  text-[28px]">200</p>
                  </div>
                  <FaUser className="text-[50px] text-white " />
                 </div>
          </Card>
          <Card className=" bg-yellow-700">
            <div className="flex flex-wrap  justify-between gap-[20px] items-center  text-white">
                  <div>
                    <h3 className="font-bold  text-xl">Wallet</h3>
                    <p className="text-[28px]">$2000.00</p>
                  </div>
                  <FaWallet className="text-[50px] text-white " />
                 </div>
          </Card>
          <Card className="bg-red-300 ">
            <div className="flex flex-wrap justify-between gap-[20px] items-center  text-white">
                  <div>
                    <h3 className="font-bold text-xl">Withdraw</h3>
                    <p className="  text-[28px]">$200.00</p>
                  </div>
                  <PiHandWithdrawFill className="text-[50px] text-white " />
                 </div>
          </Card>
        </div>
        <div className="mt-[20px] grid lg:grid-cols-3 gap-[20px]">
       
        </div>
      </div>
    </div>
  );
};

export default page;
