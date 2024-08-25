"use client";

import { FaUser } from "react-icons/fa6";

const MemberCard = ({image,name,role}) => {
  
  return (
    <div className="px-2 py-2 rounded-lg bg-[#f4f5f7] flex gap-2">
      <FaUser className="text-[35px]"
      />
      <p className="font-medium flex flex-col ">
        <span className="text-sm ">{name}</span>
        <span className="text-xs text-[#babbbd]">{role}</span>
      </p>
    </div>
  );
};

export default MemberCard;
