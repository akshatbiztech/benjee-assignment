import express from "express";
import { uploadFile, upload } from "../controllers/fileController";
import { analyzeFile } from "../controllers/analyzeController";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
router.get("/analyze",analyzeFile)

export default router;
