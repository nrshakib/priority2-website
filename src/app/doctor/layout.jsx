"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      <Navbar isDoctor={true} />
      <div>{children}</div>
      {pathname !== "/doctor/dashboard" && <Footer />}
    </div>
  );
};

export default Layout;
