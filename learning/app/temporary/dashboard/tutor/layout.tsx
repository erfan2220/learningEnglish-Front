import TutorDashboard from "@/components/TutorDashboard/TutorDashboard";
import React from "react";

const StudentDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <TutorDashboard>{children}</TutorDashboard>
    </div>
  );
};

export default StudentDashboardLayout;
