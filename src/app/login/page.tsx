"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setMessage("")
    }, 3000)
  }, [message])

  const router = useRouter()

  const validateInputField = () => {
    setMessage("")

    if (!email) {
      return "Please enter your email"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email"
    }
    if (!password) {
      return "Please enter your password"
    } else if (password.length < 8) {
      
      return "Password must be at least 8 characters long"
    }
    return null // No validation errors found
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
  
    const error = validateInputField();
    if (error) {
      setMessage(error); 
      setLoading(false); 
      return; 
    }

    try {
      const response = await axios.post("http://localhost:2024/auth/login", {
        email,
        password,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data: any = response.data;
      if (!data.error) {
        alert("Login successful!")
        router.push("/")
      } 
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col text-white bg-gray-800">
        <form onSubmit={handleSubmit} className="bg-[#1b1b1b] p-6 max-w-md">
          <h1 className="text-2xl font-semibold">Login</h1>
          <p>welcome back, start making some changes</p>
          <div className="w-full my-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:outline-none border bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
            />
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="focus:outline-none border bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
          />
          <button className="bg-blue-900 mt-4 w-full py-2">{loading ? "loading..." : "Login"}</button>
        </form>
        <p className="mt-3">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-blue-400">
            register
          </Link>
        </p>
      </div>
    </>
  );
}
