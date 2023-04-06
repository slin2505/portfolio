import path from "path";
import multer from "multer";

const maxSize = 1 * 1024 * 1024;

// types de fichier image
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./images");
  },

  // create filename
  filename: (req, file, callback) => {
    const name = path
      .basename(file.originalname, path.extname(file.originalname))
      .split(" ")
      .join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

const multerMiddleware = multer({
  storage,
  limits: { fileSize: maxSize },
}).single("image");

export default multerMiddleware;
