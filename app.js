import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/todos.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todoRoutes);

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
