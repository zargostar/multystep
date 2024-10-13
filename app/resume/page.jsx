//
import { useResume } from "@/contexts/resumeContext";
import React from "react";
import ResumeForm from "./ResumeForm";

export default function ResumePage() {
  return (
    <div className="h-screen w-full   flex flex-col justify-center items-center ">
      <ResumeForm />
    </div>
  );
}
