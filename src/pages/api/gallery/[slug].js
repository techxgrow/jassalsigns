import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { slug } = req.query;

  // map slug to folder name
  const slugToFolder = {
    vehiclewraps: "vehicle-wraps",
    channelletters: "channel-sales",
    printmedia: "printing",
    pylonsigns: "pylon",
    indoorsigns: "indoor",
    outdoorsigns: "outdoor",
  };

  const folderName = slugToFolder[slug];

  if (!folderName) {
    // If slug doesn't match predefined mappings, we could fallback to the slug itself or return empty.
    return res.status(200).json([]);
  }

  const directoryPath = path.join(
    process.cwd(),
    "public",
    "gallery",
    "services",
    folderName,
  );

  try {
    if (fs.existsSync(directoryPath)) {
      const files = fs.readdirSync(directoryPath);
      // Filter out non-image files (like .DS_Store)
      const imageFiles = files.filter((file) =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file),
      );

      const images = imageFiles.map((file) => ({
        src: `/gallery/services/${folderName}/${file}`,
      }));

      res.status(200).json(images);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error reading directory", error: error.message });
  }
}
