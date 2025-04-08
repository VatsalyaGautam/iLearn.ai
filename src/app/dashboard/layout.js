import React from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";
function DashboardLayout({ children }) {
  return (
<div className="h-auto bg-slate-50">
    <div className="md:w-64 hidden md:block ">
        <Sidebar />
    </div>
    <div className="md:ml-64">
      <Header/> 
      <div className="py-8 px-6">
        {children}
        </div>
    </div>
</div>
  );
}
export default DashboardLayout;
