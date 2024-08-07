import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1b1b1b] flex justify-around items-center py-3">
      <h1 className="font-bold text-2xl text-blue-500 uppercase">ployees</h1>
      <input
        type="text"
        className="max-w-xl w-full py-1 rounded-lg px-3 border border-gray-300 focus:outline-none bg-transparent"
        placeholder="Search for employees"
      />
      <div className="flex items-center justify-center">
        <span>Sleeky Programmers</span>
      </div>
    </header>
  );
}
