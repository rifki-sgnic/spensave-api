import mongoose from "mongoose";

export const db = {
  url: "mongodb://localhost:27017/spensave_api",
  mongoose: mongoose,
};
