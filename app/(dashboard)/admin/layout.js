"use client";
import { FaHome} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ImExit } from "react-icons/im";
import Header from "@/app/components/(dashboard)/layout/header";
import Sidebar from "@/app/components/(dashboard)/layout/sidebar";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
         <div className="min-h-screen bg-gray-100">
            <>
            <div className="dashboard relative">
              <Sidebar title="Train Up Project" menu={menu} />
              <Header/>
              <div className="main-content relative">
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
 
 
];

