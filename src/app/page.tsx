"use client";
import Header from "@/components/header/header";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import EmployeeDataPopUp from "@/components/employee-popup/add-employee-popup";
import employeeData from "@/models/employees-data.json";
import { BsPeople } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";

export default function Home() {
  interface Employee {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    jobTitle: string;
    startDate: string;
    employmentType: string;
    acctName: string;
    bankName: string;
    acctNumber: string;
    amount: string;
    picture: string;
  }

  const [addEmployee, setAddEmployee] = React.useState(false);
  const [employees, setEmployees] = React.useState<Employee[]>([]);

  function onAddemplyeeClose() {
    setAddEmployee(false);
  }

  React.useEffect(() => {
    setEmployees([...employeeData]);
    console.log(employees);
  }, []);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [employeesPerPage] = React.useState(6);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  // Next page
  const nextPage = () =>
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(employees.length / employeesPerPage))
    );

  // Previous page
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex justify-center items-center gap-5 my-4">
          <div className="w-52 justify-between p-4 flex gap-3 bg-[crimson] items-center rounded-lg">
            <div className="">
              <span>Employee</span>
              <span className="block text-4xl font-bold">
                {employees.length}
              </span>
            </div>
            <BsPeople className="text-5xl text-white" />
          </div>
          <div className="w-52 justify-between p-4 flex gap-3 bg-[dodgerblue] items-center rounded-lg">
            <div className="">
              <span>Leaves</span>
              <span className="block text-4xl font-bold">
                {employees.length}
              </span>
            </div>
            <IoExitOutline className="text-5xl text-white" />
          </div>
          <div className="w-52 justify-between p-4 flex gap-3 bg-[green] items-center rounded-lg">
            <div className="">
              <span>Salaries</span>
              <span className="block text-2xl font-bold">N40000</span>
            </div>
            <IoExitOutline className="text-5xl text-white" />
          </div>
        </div>
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
        {employees && employees.length > 0 ? (
          <div className="min-h-dvh">
            <div className="grid grid-cols-3 gap-8 mt-6">
              {currentEmployees.map((employee, index) => {
                return (
                  <div
                    className="rounded-xl h-52 bg-[#1b1b1b] p-3 flex flex-col text-center px-8"
                    key={index}
                  >
                    <Image
                      src={employee?.picture}
                      alt={`${employee?.firstName} profile picture`}
                      width={60}
                      height={60}
                      className="mx-auto rounded-full"
                    />
                    <h2 className="text-2xl font-semibold mt-2">
                      {employee?.firstName} {employee?.lastName}
                    </h2>
                    <p className="text-gray-200 text-xs">{employee.jobTitle}</p>
                    <p className="text-sm">{employee.email}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center my-5">
              <button
                className="text-blue-400 font-semibold text-xl disabled:text-gray-400"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <FaLongArrowAltLeft />
              </button>
              <div className="flex gap-3">
                {Array.from(
                  { length: Math.ceil(employees.length / employeesPerPage) },
                  (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={
                        currentPage === i + 1 ? "active text-blue-500" : ""
                      }
                    >
                      {i + 1}
                    </button>
                  )
                )}
              </div>
              <button
                onClick={nextPage}
                className="text-blue-400 font-semibold text-xl disabled:text-gray-400"
                disabled={
                  currentPage === Math.ceil(employees.length / employeesPerPage)
                }
              >
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col place-items-center">
            <Image
              src={
                "https://cdn.pixabay.com/photo/2017/08/31/11/43/man-2700445_640.png"
              }
              alt="Image of an employer standing"
              width={200}
              height={350}
            />
            <h2 className="text-2xl font-semibold my-3">Welcome to PLYEES</h2>
            <p>
              Start by creating your first employee data, click{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={() => {
                  setAddEmployee(true);
                  console.log("Clicked on the span!!");
                }}
              >
                here
              </span>{" "}
              to get started
            </p>
          </div>
        )}
      </main>
      {addEmployee && <EmployeeDataPopUp onClose={onAddemplyeeClose} />}
    </>
  );
}
