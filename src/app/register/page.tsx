"use client"
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [companyName, setCompanyName] = useState("")
  const [errors, setErrors] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setErrors("")
    }, 3000)
  }, [errors])

  const router = useRouter()

  const validateInputField = () => {
    setErrors("")
    if (!firstName) {
      setErrors("Please enter your first name")
      return
    }
    if (!lastName) {
      setErrors("Please enter your last name")
      return
    }

    if (!email) {
      setErrors("Please enter your email")
      return
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors("Please enter a valid email")
      return
    }
    if (!password) {
      setErrors("Please enter a password")
      return
    } else if (password.length < 8) {
      setErrors("Password must be at least 8 characters long")
      return
    }
    if (!companyName) {
      setErrors("Please enter your company name")
      return
    }
    return null // No validation errors found
  }


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    validateInputField()

    const error = validateInputField();
    if (error) {
        setLoading(false);
        return; // Exit early if there are validation errors
    }

    try {
      const response = await axios.post("http://localhost:2024/auth/register", {
        firstName,
        lastName,
        email,
        password,
        companyName,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      }
      )
      if (!response.error) {
        alert("Registration successful!")
        router.push("/login")
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
          <h1 className="text-2xl font-semibold">Register</h1>
          <p>start by creating your employers details</p>
          <div className="flex items-center mt-3 justify-between gap-2">
            <div className="w-full">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                className="focus:outline-none border bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                className="focus:outline-none border  bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
              />
            </div>
          </div>
          <div className="flex items-center my-3 justify-between gap-2">
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="focus:outline-none border bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
                className="focus:outline-none border  bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
              />
            </div>
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="focus:outline-none border bg-transparent rounded-md border-gray-300 focus:border-gray-600 py-2 px-4 w-full"
          />
          <p className="text-red-500 text-sm">{errors && errors}</p>
          <button className="bg-blue-900 mt-4 w-full py-2">{loading ? "registering..." : "Register"}</button>
        </form>
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
