import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useResume } from "@/contexts/resumeContext";
// name: "",
// job: "",
// address: "",
// phone: "",
// email: "",
// themeColor: "",
export default function Stepone() {
  const { resumeItems, step, dispatch } = useResume();
  const { handleSubmit, register } = useForm({
    defaultValues: resumeItems,
  });
  function handlePersonInfo(data) {
    dispatch({ payload: data, type: "next" });
  }
  return (
    <form onSubmit={handleSubmit(handlePersonInfo)}>
      <div
        className="shadow-lg py-3 space-y-2 
      px-3 rounded-md "
      >
        <h1 className="">Personal Information</h1>
        <Input
          {...register("name")}
          className="text-right"
          placeholder="نام ونام خانوادگی"
          autoFocus
        />
        <Input {...register("job")} className="text-right" placeholder="شغل" />
        <Input
          {...register("phone")}
          className="text-right"
          placeholder="تلفن"
        />
        <Input
          {...register("address")}
          className="text-right"
          placeholder="ادرس"
        />
        <Input
          {...register("email")}
          className="text-right"
          placeholder="ایمیل"
        />
        <Button type="submit" className="  ">
          Next
        </Button>
      </div>
    </form>
  );
}
