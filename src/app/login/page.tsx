import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col">
        <div className="bg-[#1b1b1b] p-6 max-w-md">
          <h1 className="text-2xl font-semibold">Login</h1>
          <p>welcome back, start making some changes</p>
          <div className="w-full my-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="focus:outline-none border bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
            />
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="focus:outline-none border bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
          />
          <button className="bg-blue-400 mt-4 w-full py-2">Login</button>
        </div>
        <p className="mt-3">
          Dont have an account?{" "}
          <Link href={"/register"} className="text-blue-400">
            register
          </Link>
        </p>
      </div>
    </>
  );
}
