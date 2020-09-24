import path from "path";
import crypto from "crypto";
import multer from "multer";
import { createHttpError } from "./httpError";

const storage = multer.diskStorage({
  destination: path.normalize(path.join(__dirname, "../../uploads")),
  filename: (req, file, callback) => {
    callback(
      null,
      `${crypto.randomBytes(12).toString("hex")}-${Date.now()}${path.extname(
        file.originalname
      )}`
    );
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 32 * 1024 * 1024 * 1024, // 32MB Max file size
  },
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
      return callback(
        createHttpError(422, "Only image files are allowed [jpg, jpeg, png]")
      );
    }

    callback(null, true);
  },
});

export default upload;
