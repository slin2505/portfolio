import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import db from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import projectLikeRoutes from "./routes/projectLikeRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import association from "./models/index.js";

dotenv.config();
// connect to database
db.sync()
  .then(console.log("Connected to database"))
  .catch((err) => console.log(err));
association();
const app = express();
app.use(express.json());

// cors policy for security
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    methods: "GET, PUT, POST, DELETE",
    preflightContinue: false,
  })
);

// Routes
app.use("/user", userRoutes);
app.use("/project", projectRoutes);
app.use("/project_like", projectLikeRoutes);
app.use("/tag", tagRoutes);
app.use("/comment", commentRoutes);

// Start server on chosen name & port
app.listen(process.env.APP_PORT, () => {
  console.log(
    `App listening at http://${process.env.APP_HOSTNAME}:${process.env.APP_PORT}`
  );
});
