"use client";
import React from "react";
import Image from "next/image";
import employeeData from "@/models/employees-data.json";
import { BsArrowLeft } from "react-icons/bs";
import EmployeeDataPopUp from "@/components/employee-popup/add-employee-popup";
import Link from "next/link";
import { Employee, AddEmployeePopup } from "@/app/interface/employee-interface";
export default function EmployeeDetail({ params }: any) {
  const [employee, setEmployee] = React.useState<Employee | null>(null);
  React.useEffect(() => {
    employeeData.forEach((employee) => {
      if (employee.id == params.employeeId) {
        setEmployee(employee);
      }
    });
  });

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
          <button className="py-2 px-5 bg-red-700 text-white rounded-md">
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
