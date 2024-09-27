"use client";
import { CompanyDataT } from "@/app/interface/company-interface";
import React, { createContext, Dispatch, useContext, useState, } from "react";

interface CompanyContextType {
  companyData: any;
  loading: boolean;
  setCompanyData: Dispatch<any>
  setLoading: Dispatch<any>
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const CompanyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [companyData, setCompanyData] = useState<CompanyDataT | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <CompanyContext.Provider value={{ companyData, loading,  setCompanyData, setLoading }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => {
  const context = useContext(CompanyContext);

  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }

  return context;
};
