"use client";
import { FaHome, FaLanguage,FaWrench } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BiCategory } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { FaTrainSubway } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { BsListCheck } from "react-icons/bs";
import { FaUsers,FaUserTie} from "react-icons/fa";
import { FaMoneyBillTransfer,FaMoneyCheckDollar } from "react-icons/fa6";
import Header from "@/app/components/(site)/header";
import Sidebar from "@/app/components/(dashboard)/layout/sidebar";



const Layout = ({ children }) => {
  const router = useRouter();

 

  return (
    <div className="min-h-screen bg-gray-100">
  
        <>
            <div className="dashboard relative">
              <Sidebar title="Train Up Project" menu={menu} />
              {/* <div className="fixed top-0 h-16 z-10 w-full bg-white" /> */}
             

                <div className="main-content relative">
                <div className="absolute top-0 ">
              <Header />

              </div>
                  <div className="w-full p-5 z-0" style={{ minHeight: 400 }}>
                    {children}
                  </div>
                </div>
            </div>
        </>
  
    </div>
  );
};

export default Layout;

const menu = [
   {
    label: "Dashboard",
    href: "/admin",
    icon: <FaHome />,
    key: '1'
  },
  {
    label: "Live Site",
    href: "/",
    icon: <ImExit />,
    key: '2'
  },
  {
    label: 'Service Management',
    key: '3',
    icon: <GrServices />,
    child: [
      {
        label: 'Category',
        href: '/admin/service/category',
        icon: <TbCategory />,
        key: '11'
      },
      {
        label: 'Attribute',
        href: '/admin/service/attribute',
        icon: <BsListCheck />,
        key: '12'
      },
    ]
  },
  {
    label: 'Driver Management',
    key: '4',
    icon: <FaUsers />,
    child: [
     
      {
        label: 'Driver List',
        href: '/admin/driver-management/driver-list',
        icon: <FaUserTie  />,
        key: '1'
      },
    ]
  },
  {
    label: 'Withdraw Management',
    key: '5',
    icon: <FaMoneyBillTransfer />,
    child: [
     
      {
        label: 'Withdraw History',
        href: '/admin/withdraw-management/withdraw-history',
        icon: <FaMoneyCheckDollar />,
        key: '1'
      },
    ]
  }
 
];

