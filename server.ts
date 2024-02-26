import cors from "cors";
import express from "express";
import { db } from "./app/models";

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

// connect mongodb
db.mongoose
  .connect(db.url)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(`connection failed. ${err.message}`);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "hello world adsads",
  });
});

const PORT = process.env.PORT || "5000";
app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);
