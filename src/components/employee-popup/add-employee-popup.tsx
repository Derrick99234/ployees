import React from "react";

interface EmployeeDataPopUpI {
  onClose: () => void;
}

export default function EmployeeDataPopUp({ onClose }: EmployeeDataPopUpI) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/30"
        onClick={(e) => {
          e.target === e.currentTarget && onClose();
        }}
      >
        <div className="top-20 right-0 bottom-14 absolute bg-[#1b1b1b] overflow-x-auto max-w-xl w-full rounded-l-xl p-2">
          <div className="bg-black/60 p-4 rounded-xl">
            <h2 className="text-2xl font-semibold">Basic Details</h2>
            <div className="flex justify-center items-center gap-3 my-4">
              <div className="">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
                />
              </div>
              <div className="">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
                />
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
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
                className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
              />
            </div>
            <div className="my-3">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                placeholder="Job Title"
                className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
              />
            </div>
            <div className="my-3">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                placeholder="Start Date"
                className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
              />
            </div>
            <div className="my-3">
              <label htmlFor="employmentType">Employment Type</label>
              <select
                name="employmentType"
                id="employmentType"
                className="w-full py-2 border focus:outline-none border-gray-300  bg-[#1b1b1b] px-4 rounded-lg"
              >
                <option value="freelancer">Freelancer</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
                <option value="gig">Gig (one time pay off)</option>
                <option value="joinTheTeam">Join the team</option>
              </select>
            </div>
          </div>
          <div className="bg-black/60 p-4 rounded-xl">
            <h2 className="text-2xl font-semibold">Salary Details</h2>
            <div className="flex justify-center items-center gap-3 my-4">
              <div className="">
                <label htmlFor="acctName">Account Name</label>
                <input
                  type="text"
                  placeholder="Account Name"
                  className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
                />
              </div>
              <div className="">
                <label htmlFor="bankName">Bank Name</label>
                <input
                  type="text"
                  placeholder="Bank Name"
                  className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="acctNumber">Account Number</label>
              <input
                type="number"
                placeholder="Account Number"
                className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
                minLength={10}
                maxLength={10}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                placeholder="Amount"
                className="w-full py-2 border focus:outline-none border-gray-300 bg-transparent px-4 rounded-lg"
              />
            </div>
            <button className="bg-blue-900 w-full py-2 mt-5">
              Add employee
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
