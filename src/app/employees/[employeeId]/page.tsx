"use client";
import React from "react";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation"
import EmployeeDataPopUp from "@/components/employee-popup/add-employee-popup";
import Link from "next/link";
import { Employee, AddEmployeePopup } from "@/app/interface/employee-interface";
import { useEmployee } from "@/context/EmployeeContext";
export default function EmployeeDetail({ params }: any) {
  const [employee, setEmployee] = React.useState<Employee | null>(null);
  const { employees} = useEmployee()
  React.useEffect(() => {
    employees?.forEach((employee) => {
      if (employee._id == params.employeeId) {
        setEmployee(employee);
      }
    });
  });

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:2024";

  const router = useRouter()
  const handleDelete = async() => {
  
    try {
      const response = await fetch(
        `${BASE_URL}/employee/delete-employee/${employee?._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
          
        }
      );
      const data = await response.json();
      console.log(response)
      router.push("/")
      console.log(data)
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  }

  const [addEmployee, setAddEmployee] = React.useState<AddEmployeePopup>({
    isShown: false,
    type: "add",
    data: null,
  });
  function closeEmployeePopup() {
    setAddEmployee({ isShown: false, type: "add", data: null });
  }
  return (
    <div className="flex min-h-screen justify-center items-center gap-4 flex-wrap">
      <div className="p-5 bg-[#1b1b1b] h-[65dvh] max-w-xl w-full">
        {employee && (
          <>
            <Image
              src={employee.picture}
              alt={`${employee.firstName} profile picture`}
              width={60}
              height={60}
              className="w-full h-3/4 rounded-md"
            />
            <h2 className="mt-3 font-semibold text-3xl">
              {employee.firstName} {employee.lastName}
            </h2>
            <p className="text-gray-300 text-sm my-2">
              {employee.jobTitle} - {employee.employmentType}
            </p>
            <span className="">{employee.email}</span>
          </>
        )}
      </div>
      {addEmployee.isShown && (
        <EmployeeDataPopUp
          onClose={closeEmployeePopup}
          addEmployee={addEmployee}
        />
      )}
      <div className="p-5 bg-[#1b1b1b] h-[65dvh] max-w-xl w-full relative">
        <h2 className="text-2xl font-semibold">Account details</h2>
        <p className="mt-6 flex justify-between items-center">
          Bank name: <span className="">{employee?.bankName}</span>
        </p>
        <p className="mt-1 flex justify-between items-center">
          Account number: <span className="">{employee?.accountNumber}</span>
        </p>
        <p className="mt-1 flex justify-between items-center">
          Account name: <span className="">{employee?.accountName}</span>
        </p>
        <h2 className="text-2xl font-semibold my-6">Other details</h2>
        <p className="flex justify-between items-center">
          joined date: <span className="">{employee?.startDate}</span>
        </p>
        <p className="mt-1 flex justify-between items-center">
          Address: <span className="">{employee?.address}</span>
        </p>
        <div className="flex items-center gap-4 absolute bottom-3 right-3">
          <button
            className="py-2 px-5 bg-blue-700 text-white rounded-md"
            onClick={() =>
              setAddEmployee({ isShown: true, type: "edit", data: employee })
            }
          >
            Edit
          </button>
          <button className="py-2 px-5 bg-red-700 text-white rounded-md" onClick={handleDelete}>
            Delete Employee
          </button>
        </div>
      </div>
      <Link href={`/`} passHref>
        <BsArrowLeft className="text-3xl absolute text-white top-4 right-8 cursor-pointer" />
      </Link>
    </div>
  );
}
