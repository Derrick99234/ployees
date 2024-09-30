"use client";

import { Employee } from "@/app/interface/employee-interface";
import React, { createContext, Dispatch, useContext, useState, } from "react";

interface EmployeeContextType {
  employees: Employee[] | null;
  loading: boolean;
  setEmployees: Dispatch<any>
  setLoading: Dispatch<any>
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[] | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <EmployeeContext.Provider value={{ employees, loading, setEmployees, setLoading }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error("useEmployee must be used within a EmployeeProvider");
  }

  return context;
};
