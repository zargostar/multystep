"use client";
import StepFive from "@/components/resume/StepFive";
import StepFour from "@/components/resume/StepFour";
import Stepone from "@/components/resume/Stepone";
import StepTwo from "@/components/resume/StepTwo";
import StepThree from "@/components/resume/StepThree";
import { useResume } from "@/contexts/resumeContext";
import React from "react";
import Steper from "@/components/resume/Steper";

export default function ResumeForm() {
  const { step, resumeItems } = useResume();
  return (
    <div className="w-full sm:w-1/3 ">
      {/* {step === 1 && <Stepone />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
      {step === 5 && <StepFive />} */}
      <Steper />
      {step === 1 ? (
        <Stepone />
      ) : step === 2 ? (
        <StepTwo />
      ) : step === 3 ? (
        <StepThree />
      ) : step === 1 ? (
        <StepFour />
      ) : (
        <StepFive />
      )}
    </div>
  );
}
