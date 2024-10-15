//
import { useResume } from "@/contexts/resumeContext";
import React from "react";
import ResumeForm from "./ResumeForm";
import db from "@/utiles/db";

export default async function ResumePage() {
  await db();
  return (
    <div className="h-screen w-full   flex flex-col justify-center items-center ">
      <ResumeForm />
    </div>
  );
}
