import cors from "cors";
import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import http from "http";
import router from "./router";
import { db } from "./config/database";

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use("/", router());

const server = http.createServer(app);

const PORT = process.env.PORT || "5000";
server.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);

// connect mongodb
db.mongoose
  .connect(db.url)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(`connection failed. ${err.message}`);
    process.exit();
  });
