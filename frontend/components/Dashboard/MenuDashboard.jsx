import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEnvelope,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import emptyPic from "../../public/assets/emptypic.png";

const MenuDashboard = ({ user, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <div className="flex bg-[#fff8f6] items-center justify-between h-[70px] shadow-lg px-[25px]">
      <div className="flex items-center rounded-[5px]">
        <input
          type="text"
          className="bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
          placeholder="Search for ..."
        />
        <div className="bg-[#f06d63] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <FontAwesomeIcon color="white" icon={faSearch} />
        </div>
      </div>
      <div className="flex items-center gap-[15px] relative">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
          <FontAwesomeIcon icon={faEnvelope} />
          <Link href="/Dashboard/shoppingcart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
        </div>
        <div className="flex items center gap-[15px] relative">
          <p className="mt-2">{user?.firstNameUser} {user?.lastNameUser}</p>
          <div
            className="h-[40px] w-[40px] cursor-pointer flex items-center justify-center relative"
            onClick={handleMenuClick}
          >
            <img
              src="/assets/cristiano.jpg"
              
              alt=""
              className="h-full w-full rounded-full"
            />
            {isMenuOpen && (
              <div className="bg-[#fbf8f7] p-2 w-52 shadow-lg absolute right-[0%] top-[150%] rounded">
                <ul>
                  <Link href="/Dashboard/profile">
                    <li className="px-4 py-2 cursor-pointer rounded hover:bg-[#fae9e4]">
                      Profile
                    </li>
                  </Link>
                  {user?.is_Renter === 1 && (
                    <Link href="/Dashboard/createGig">
                      <li className="px-4 py-2 cursor-pointer rounded hover:bg-[#fae9e4]">
                        Create Gig
                      </li>
                    </Link>
                  )}
                  <li className="px-4 py-2 cursor-pointer rounded hover:bg-[#fae9e4]">
                    Orders
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer rounded hover:bg-[#fae9e4] border-t-[1px]"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDashboard;
