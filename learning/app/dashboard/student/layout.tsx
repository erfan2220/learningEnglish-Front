
import StudentDashboard from "@/components/Student/StudentDashboard/StudentDashboard";
import React from "react";

const StudentDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <StudentDashboard>{children}</StudentDashboard>
    </div>
  );
};

export default StudentDashboardLayout;
