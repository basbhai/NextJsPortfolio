import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const folderPath = path.join(process.cwd(), "public", "photos"); // Replace "your-folder-path" with the path to your folder

  try {
    const files = fs.readdirSync(folderPath);
    res.status(200).json({ files });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to read folder" });
  }
}
