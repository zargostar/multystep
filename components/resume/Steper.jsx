import { useResume } from "@/contexts/resumeContext";
import React from "react";

export default function Steper() {
  const { step } = useResume();
  console.log("stepper", step);
  return (
    <div className="flex flex-row justify-evenly">
      <div
        className={`m-2 h-10 w-10 text-primary-foreground bg-primary rounded-full flex justify-center items-center `}
      >
        1
      </div>

      <div
        className={`m-2 h-10 w-10  ${
          step >= 2 ? "text-primary-foreground bg-primary" : "bg-slate-400"
        } rounded-full flex justify-center items-center `}
      >
        2
      </div>
      <div
        className={`m-2 h-10 w-10  ${
          step >= 3 ? "text-primary-foreground bg-primary" : "bg-slate-400"
        } rounded-full flex justify-center items-center `}
      >
        3
      </div>
      <div
        className={`m-2 h-10 w-10  ${
          step >= 4 ? "text-primary-foreground bg-primary" : "bg-slate-400"
        } rounded-full flex justify-center items-center `}
      >
        4
      </div>
      <div
        className={`m-2 h-10 w-10  ${
          step >= 5 ? "text-primary-foreground bg-primary" : "bg-slate-400"
        } rounded-full flex justify-center items-center `}
      >
        5
      </div>
    </div>
  );
}
