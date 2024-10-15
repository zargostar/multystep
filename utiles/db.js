//create connexion
import mongoose from "mongoose";
export default async function db() {
  if (mongoose.connection.readyState >= 1) {
    console.log("cnn", mongoose.connection.readyState);
    return;
  }
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("success");
  } catch (e) {
    console.log(e);
    console.log("errorr");
  }
}
