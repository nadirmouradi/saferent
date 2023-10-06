import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GiAmpleDress } from "react-icons/gi";
import {
  faList,
  faTractor,
  faTruck,
  faMotorcycle,
  faCamera,
  faGuitar,
  faCarAlt,
  faPersonDress,
  faShip,
  faHome,
  faStore
  
  
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  
  
    
  return (
    <div className="bg-[#fdf9f8] h-screen px-[25px]">
      <div className="px-[15px] py-[25px] flex items-center justify-center border-b-[1px] border-[#EDEDLD]/[0.3] ">
        <p className={`pb-2 font-bold text-3xl `}>
          Safe<span className="text-[#f06d63] ">rent</span>
        </p>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-[#EDEDLD]/[0.3]">
        <FontAwesomeIcon icon={faList} />
        <p className="text-[14px] leading-[20px] font-bold text-black">
          Categories
        </p>
      </div>
      <div className="flex items-center gap-[15px] py-[5px] border-[#EDEDLD]/[0.3] ml-2">
        <FontAwesomeIcon color="gray" icon={faCarAlt} />
        <p className=" text-sm text-[#8d8484] ml-1">Cars</p>
      </div>
      <div className="flex items-center gap-[15px] py-[5px] border-[#EDEDLD]/[0.3] ml-2">
        <FontAwesomeIcon color="gray" icon={faTractor} />
        <p className=" text-sm text-[#8d8484]">Bulldozer</p>
      </div>
      <div className="flex items-center gap-[15px] py-[5px] border-[#EDEDLD]/[0.3] ml-2">
        <FontAwesomeIcon color="gray" icon={faTruck} />
        <p className=" text-sm text-[#8d8484]">Truck</p>
      </div>
      <div className="flex items-center gap-[15px] py-[5px] border-[#EDEDLD]/[0.3] ml-2">
        <FontAwesomeIcon color="gray" icon={faMotorcycle} />
        <p className=" text-sm text-[#8d8484]">Motors</p>
      </div>
      <div className="flex items-center gap-[15px] py-[5px] border-[#EDEDLD]/[0.3] ml-2">
        <FontAwesomeIcon color="gray" icon={faCamera} />
        <p className=" text-sm text-[#8d8484] ml-1">Camera</p>
      </div>
      <div className="flex items-center gap-[15px] py-[5px] border-[#EDEDLD]/[0.3] ml-2">
        <FontAwesomeIcon color="gray" icon={faGuitar} />
        <p className=" text-sm text-[#8d8484] ml-1">Musical</p>
      </div>
      <div className="flex items-center gap-[15px] py-[5px] border-[#EDEDLD]/[0.3] ml-2">
        <GiAmpleDress className="text-[#8d8484] "/>
        <p className=" text-sm text-[#8d8484] ml-1">Women's Fashion</p>
      </div>
      <div className="flex items-center gap-[15px] py-[5px] border-[#EDEDLD]/[0.3] ml-3">
      <FontAwesomeIcon color="gray" icon={faPersonDress} />
        <p className=" text-sm text-[#8d8484] ml-1">Men's Fashion</p>
      </div>
      <div className="flex items-center gap-[15px] py-[5px] border-[#EDEDLD]/[0.3] ml-2">
      <FontAwesomeIcon color="gray" icon={faShip} />
        <p className=" text-sm text-[#8d8484] ml-1">Boat</p>
      </div>
      <div className="flex items-center gap-[15px] py-[5px] border-[#EDEDLD]/[0.3] ml-2">
      <FontAwesomeIcon color="gray" icon={faHome} />
        <p className=" text-sm text-[#8d8484] ml-1">Home</p>
      </div>
      
      
      
    </div>
  );
};

export default Sidebar;
