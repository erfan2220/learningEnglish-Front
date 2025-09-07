import DashboardStudentMessagesSent from "@/components/StudentDashboardComponents/messages/DashboardStudentMessagesSent";
import { studentDetail } from "@/mock/studentMockData";
import { tutorMockDetail } from "@/mock/tutorMockData";
import React from "react";

const DashboardStudentMessagesSentPage = () => {
  return (
    <div>
      <DashboardStudentMessagesSent
        mainData={studentDetail}
        secondData={tutorMockDetail}
      />
    </div>
  );
};

export default DashboardStudentMessagesSentPage;
