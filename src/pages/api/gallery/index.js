import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "vehiclewraps", folder: "vehicle-wraps", name: "Vehicle Wraps" },
    { id: "channelletters", folder: "channel-sales", name: "Channel Letters" },
    { id: "printmedia", folder: "printing", name: "Print Media" },
    { id: "pylonsigns", folder: "pylon", name: "Pylon Signs" },
    { id: "indoorsigns", folder: "indoor", name: "Indoor Signs" },
    { id: "outdoorsigns", folder: "outdoor", name: "Outdoor Signs" },
  ];

  const images = [];

  categories.forEach((category) => {
    if (category.id === "all") return;

    const directoryPath = path.join(
      process.cwd(),
      "public",
      "gallery",
      "services",
      category.folder,
    );
    try {
      if (fs.existsSync(directoryPath)) {
        const files = fs.readdirSync(directoryPath);
        const imageFiles = files.filter((file) =>
          /\.(jpg|jpeg|png|gif|webp)$/i.test(file),
        );

        imageFiles.forEach((file) => {
          images.push({
            src: `/gallery/services/${category.folder}/${file}`,
            category: category.id,
            categoryName: category.name,
          });
        });
      }
    } catch (error) {
      console.error(`Error reading directory ${category.folder}`, error);
    }
  });

  res.status(200).json({ categories, images });
}
