import DashboardStudentMessagesInbox from "@/components/StudentDashboardComponents/messages/DashboardStudentMessagesInbox";
import { studentDetail } from "@/mock/studentMockData";
import { tutorMockDetail } from "@/mock/tutorMockData";
import React from "react";

const DashboardStudentMessagesInboxPage = () => {
  return (
    <div>
      <DashboardStudentMessagesInbox
        mainData={studentDetail}
        secondData={tutorMockDetail}
      />
    </div>
  );
};

export default DashboardStudentMessagesInboxPage;
