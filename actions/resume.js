"use server";
import Resume from "@/models/resume";
// import resume from "@/models/resume";
import db from "@/utiles/db";
import { currentUser } from "@clerk/nextjs/dist/types/server";
// import { currentUser } from "@clerk/nextjs/dist/types/server";
export async function saveResume(data) {
  try {
    db();
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0]?.emailAddress;
    const { _id, ...rest } = data;
    const resume = await Resume.create({ ...rest, userEmail });
    return JSON.parse(JSON.stringify(resume));
  } catch (err) {
    throw new Error(err);
  }
  // const email=await currentUser.name.
}
