"use client";
import Header from "@/components/header/header";
import Image from "next/image";
import React from "react";
import EmployeeDataPopUp from "@/components/employee-popup/add-employee-popup";
import employeeData from "@/models/employees-data.json";

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
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
        {employees && employees.length > 0 ? (
          <div className="flex gap-5 flex-wrap min-h-dvh">
            {employees.map((employee) => {
              return (
                <>
                  <div className="w-60 h-52 bg-[#1b1b1b] p-3">
                    <h2>
                      {employee?.firstName} {employee?.lastName}
                    </h2>
                  </div>
                </>
              );
            })}
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
