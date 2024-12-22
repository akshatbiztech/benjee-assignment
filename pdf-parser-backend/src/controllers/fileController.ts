import { Request, Response } from "express";
import multer, { StorageEngine } from "multer";
import path from "path";
import { analyze } from "../analyze";
import fs from "fs";
import { promisify } from "util";

const rm = promisify(fs.rm);
const mkdir = promisify(fs.mkdir);

const storage: StorageEngine = multer.diskStorage({
  destination: async (req, file, cb) => {
    const directoryPath = "./src/pdf";
    await clearAndCreateDirectory(directoryPath);
    cb(null, directoryPath);
  },
  filename: (req, file, cb) => {
    cb(null, "1.pdf");
  },
});

export const upload = multer({ storage });

export const uploadFile = async (req: Request, res: Response) => {
  try {
    if (req.file) {
      return res
        .status(200)
        .json({ message: "File uploaded and analyzed successfully!"});
    }
    res.status(400).json({ error: "No file uploaded." });
  } catch (err) {
    console.error("Error during file upload:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Function to clear and create the directory
async function clearAndCreateDirectory(dirPath: string) {
  try {
    // Remove the directory if it exists
    if (fs.existsSync(dirPath)) {
      await rm(dirPath, { recursive: true, force: true });
    }
    // Create the new directory
    await mkdir(dirPath, { recursive: true });
  } catch (err) {
    console.error(`Error clearing and creating directory ${dirPath}:`, err);
    throw err;
  }
}
