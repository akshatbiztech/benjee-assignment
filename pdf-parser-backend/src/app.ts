import express, { Request, Response } from "express";
import cors from "cors";
import fileRoutes from "./routes/fileRoutes";
import { analyze } from "./analyze";

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const PORT = 3001;

app.use("/api", fileRoutes);
analyze

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
