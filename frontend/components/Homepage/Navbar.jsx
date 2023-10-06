import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderThemeChange = () => {
    const icon =
      theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      );

    return (
      <button
        className="leading-9 text-xl rounded-full text-[#4882bc]"
        onClick={toggleTheme}
      >
        {icon}
      </button>
    );
  };

  return (
    <div>
      <div className="container mx-auto flex-col  ">
        <div className="flex justify-between items-center mt-6">
          <p className={`pb-2 font-bold text-3xl `}>
            Safe<span className="text-[#f06d63] ">rent</span>
          </p>
          <div className="flex pb-1 items-center gap-10">
            <Link href="/">Home</Link>
            <Link href="/Footer">About</Link>
            <Link href="/Values">Values</Link>
          </div>
          {renderThemeChange()}
          <div>
            <a
              className=" text-center hover:text-[#f06d63]"
              href="/login"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
