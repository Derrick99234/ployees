import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1b1b1b] flex justify-around items-center py-3 text-white">
      <h1 className="font-bold text-2xl text-blue-500 uppercase">ployees</h1>
      <div className="relative max-w-xl w-full">
        <input
          type="text"
          className="max-w-xl w-full py-1 rounded-lg px-3 border border-gray-300 focus:outline-none bg-transparent"
          placeholder="Search for employees"
        />
        <CiSearch className="absolute top-1 right-4 text-white text-2xl" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <span>Sleeky Programmers</span>
        <CgProfile className="text-2xl text-white" />
      </div>
    </header>
  );
}
