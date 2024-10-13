import { useResume } from "@/contexts/resumeContext";
import React from "react";

export default function StepTwo() {
  const { resumeItems } = useResume();
  console.log("step 2", resumeItems);
  return <div>SteponeTwo</div>;
}
