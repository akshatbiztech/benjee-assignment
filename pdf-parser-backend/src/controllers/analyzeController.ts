import { Request, Response } from "express";
import { analyze } from "../analyze";
import fs from "fs";
import path from "path";

export const analyzeFile = async (req: Request, res: Response) => {
  try {
    const filePath = "./src/pdf/1.pdf";
    if (!fs.existsSync(filePath)) {
      return res
        .status(400)
        .json({ error: "File does not exist. Please upload again." });
    }

    const analysisResult = await analyze(filePath);
    res.json({
      message: "File analyzed successfully!",
      result: analysisResult,
    });
  } catch (err) {
    console.error("Error during file analysis:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};
