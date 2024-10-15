import mongoose, { model, Schema } from "mongoose";
import { Mongoose } from "mongoose";
const skillSchema = new Schema(
  {
    name: String,
    level: String,
  },
  { timestamps: true }
);
const educationSchema = new Schema({
  name: String,
  year: String,
  address: String,
  qualification: String,
});
const exprienceSchima = new Schema({
  company: String,
  address: String,
  startDate: String,
  endDate: String,
  title: String,
  description: String,
});
const skillSchima = new Schema({
  name: String,
  level: String,
});
const ResumeSchima = new Schema({
  userEmail: {
    type: String,
    require: true,
  },
  title: String,
  name: String,
  job: String,
  address: String,
  themeColor: String,
  summary: String,
  expriences: [exprienceSchima],
  skills: [skillSchima],
  educations: [educationSchema],
});
export default Resume = mongoose.model.resume || model("Resume", ResumeSchima);
