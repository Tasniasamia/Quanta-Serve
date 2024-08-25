"use client";
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiZcash } from "react-icons/si";
import { Card, Progress, Select } from "antd";
import { FcServices } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { BiCycling } from "react-icons/bi";
import { FcManager } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { PiHandWithdrawFill } from "react-icons/pi";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import dynamic from "next/dynamic";
import { useState } from "react";
import MemberCard from "@/app/components/(dashboard)/home/membarcard";
const RevenueChart = dynamic(() => import('@/app/components/(dashboard)/home/chart'), {
  ssr: false
});

const page = () => {
  const [selectedYear, setSelectedYear] = useState("this");

  return (
    <div  className="dashboard_Scroll">
        {/* list of title coin */}
        <Marquee className=" p-[10px] flex  xl:justify-between  bg-white text-[#898989]">
          <div className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <FcBusinessman />
            <span>Total Service Provider</span>
            <span>50</span>
          </div>
          <div className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <BiCycling/>
            <span>Total Delivery Man</span>
            <span>34</span>
          </div>
          <div className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <FcManager />
            <span>Total Employee</span>
            <span>50</span>
          </div>
          <div className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <FcServices className="text-[#70c481]" />
            <span>Total Service</span>
            <span>100</span>
          </div>
          <div className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <FaUser className="text-[#6371de]" />
            <span>Total User</span>
            <span>1000</span>
          </div>
          <div className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <FaWallet className="text-[#fd7c28]" />
            <span>Wallet</span>
            <span>$1190.05</span>
          </div>
          <div className="flex gap-2 items-center !text-sm my-[10px] px-[10px] border-r border-r-[#898989] ">
            <PiHandWithdrawFill className="text-[#4e8de7]" />
            <span>Withdraw</span>
            <span>$690.05</span>
          </div>
        
        </Marquee>
        {/* card */}
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px] mt-[20px]">
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
        <div className="mt-[20px] grid lg:grid-cols-3 gap-[20px] ">
        
        <Card className="lg:col-span-2 col-span-1">
        <div className="flex flex-wrap gap-2 justify-between mb-[20px]">
        <h2 className="!text-[24px] !font-medium text-[#898989]">Revenue Chart</h2>
        <Select
        className="!font-medium text-[#898989]"
        options={[
          { value: "this", label:"This Year" },
          { value: "pre", label:"Previous Year" }
        ]}
        value={selectedYear}
        onChange={(e) => setSelectedYear(e)}
       />
        </div>        
        <RevenueChart/>
        </Card>
        <Card className="col-span-1 text-[#898989]">
          <div className="flex justify-between ">
          <h1 className="text-xl text-[#898989] font-semibold  sticky top-0 bg-white pb-4">
            Active Member
          </h1>
          <span className="underline cursor-pointer">View All</span>
          </div>
           <div className=" flex flex-col gap-2 overflow-y-scroll h-[290px]">
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
            <MemberCard name="Mahid Ahamed" role="Project Manager" />
          </div>
        </Card>
        </div>
      </div>
  );
};

export default page;
