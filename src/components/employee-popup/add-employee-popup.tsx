import React, { useEffect } from "react";
import { AddEmployeePopup, Employee } from "@/app/interface/employee-interface";
import { useCompany } from "@/context/CompanyContext";

interface EmployeeDataPopUpI {
  onClose: () => void;
  addEmployee: AddEmployeePopup;
}

export default function EmployeeDataPopUp({
  onClose,
  addEmployee,
}: EmployeeDataPopUpI) {
  const [formData, setFormData] = React.useState<Employee>({
    email: addEmployee.data?.email || "",
    firstName: addEmployee.data?.firstName || "",
    lastName: addEmployee.data?.lastName || "",
    address: addEmployee.data?.address || "",
    jobTitle: addEmployee.data?.jobTitle || "",
    startDate: addEmployee.data?.startDate || "",
    employmentType: addEmployee.data?.employmentType || "",
    accountName: addEmployee.data?.accountName || "",
    bankName: addEmployee.data?.bankName || "",
    accountNumber: addEmployee.data?.accountNumber || "",
    amount: addEmployee.data?.amount || "",
    picture: addEmployee.data?.picture || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:2024";
  const { companyData, loading} = useCompany()
  
    async function addEmployees(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      try {
        const response = await fetch(
          `${BASE_URL}/employee/add-employee`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({...formData, companyId: companyData._id, picture: "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"}),
          }
        );
        const data = await response.json();
        console.log(response)
        console.log(data)
        onClose(); 
      } catch (error) {
        console.error("Error adding employee:", error);
      }
    }
  
    async function updateEmployee(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      try {
        const response = await fetch(
          `${BASE_URL}/employee/update-employee/${addEmployee.data?._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({...formData})
          }
        );
        const data = await response.json();
        console.log(response)
        console.log(data)
        onClose(); 
      } catch (error) {
        console.error("Error adding employee:", error);
      }
    }
  if (loading) return <div className="w-10/12 ml-auto min-h-screen p-10">Loading...</div>;
  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-[100]"
        onClick={(e) => {
          e.target === e.currentTarget && onClose();
        }}
      >
        <form className="top-20 right-0 bottom-14 absolute bg-[#1b1b1b] overflow-x-auto max-w-xl w-full rounded-l-xl p-2" onSubmit={addEmployee.type === "edit" ? updateEmployee : addEmployees}>
          <div className="bg-black/60 p-4 rounded-xl">
            <h2 className="text-2xl font-semibold">Basic Details</h2>
            <div className="flex justify-center items-center gap-3 my-4">
              <div className="">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
                />
              </div>
              <div className="">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  placeholder="Last Name"
                  className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
                />
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
            />
          </div>
          <div className="bg-black/60 p-4 rounded-xl my-4">
            <h2 className="text-2xl font-semibold">Employment Details</h2>
            <div className="my-3">
              <label htmlFor="address">Home Address</label>
              <input
                type="text"
                placeholder="Address"
                id="address"
                onChange={handleChange}
                value={formData.address}
                className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
              />
            </div>
            <div className="my-3">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                onChange={handleChange}
                value={formData.jobTitle}
                placeholder="Job Title"
                className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
              />
            </div>
            <div className="my-3">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                onChange={handleChange}
                value={formData.startDate}
                placeholder="Start Date"
                className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
              />
            </div>
            <div className="my-3">
              <label htmlFor="employmentType">Employment Type</label>
              <select
                name="employmentType"
                id="employmentType"
                onChange={handleChange}
                value={formData.employmentType}
                className="w-full py-2 border focus:outline-none border-gray-300  bg-[#1b1b1b] px-4 rounded-lg"
              >
                <option value="freelancer">Freelancer</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
                <option value="gig">Gig (one time pay off)</option>
                <option value="fullTime">Full time</option>
              </select>
            </div>
          </div>
          <div className="bg-black/60 p-4 rounded-xl">
            <h2 className="text-2xl font-semibold">Salary Details</h2>
            <div className="flex justify-center items-center gap-3 my-4">
              <div className="">
                <label htmlFor="accountName">Account Name</label>
                <input
                  type="text"
                  placeholder="Account Name"
                  id="accountName"
                  onChange={handleChange}
                  value={formData.accountName}
                  className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
                />
              </div>
              <div className="">
                <label htmlFor="bankName">Bank Name</label>
                <input
                  type="text"
                  id="bankName"
                  onChange={handleChange}
                  value={formData.bankName}
                  placeholder="Bank Name"
                  className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="number"
                placeholder="Account Number"
                id="accountNumber"
                onChange={handleChange}
                value={formData.accountNumber}
                className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
                minLength={10}
                maxLength={10}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                onChange={handleChange}
                value={formData.amount}
                placeholder="Amount"
                className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
              />
            </div>
            <button className="bg-blue-900 w-full py-2 mt-5" type="submit">
              {addEmployee.type == "edit" ? "Update employee" : "Add employee"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
