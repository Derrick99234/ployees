import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CompanyProvider } from "@/context/CompanyContext";
import { EmployeeProvider } from "@/context/EmployeeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CompanyProvider>
          <EmployeeProvider>
            {children}
          </EmployeeProvider>
        </CompanyProvider>
      </body>
    </html>
  );
}
