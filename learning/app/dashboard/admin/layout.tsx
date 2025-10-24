import AdminDashboard from "@/components/Admin/AdminDashboard/AdminDashbard";
import React from "react";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminDashboard>{children}</AdminDashboard>
    </div>
  );
};

export default AdminDashboardLayout;
