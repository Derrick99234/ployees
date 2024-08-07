import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col">
        <div className="bg-[#1b1b1b] p-6 max-w-md">
          <h1 className="text-2xl font-semibold">Register</h1>
          <p>start by creating your employers details</p>
          <div className="flex items-center mt-3 justify-between gap-2">
            <div className="w-full">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="focus:outline-none border bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="focus:outline-none border  bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
              />
            </div>
          </div>
          <div className="flex items-center my-3 justify-between gap-2">
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="focus:outline-none border bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                className="focus:outline-none border  bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
              />
            </div>
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="focus:outline-none border bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
          />
          <button className="bg-blue-400 mt-4 w-full py-2">Register</button>
        </div>
        <p className="mt-3">
          Already have an account?{" "}
          <Link href={"/login"} className="text-blue-400">
            login
          </Link>
        </p>
      </div>
    </>
  );
}
