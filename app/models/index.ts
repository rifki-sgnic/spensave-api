import mongoose from "mongoose";
import { dbConfig } from "../config/database";
import { User } from "./user.model";

export const db = {
  mongoose,
  url: dbConfig.url,
  user: User(mongoose),
};
