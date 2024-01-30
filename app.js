import express from "express";
import userRouter from "./src/routers/user.router.js";
const app = express();
app.use(express.json());

app.use("/api/v1", userRouter);
export default app;
