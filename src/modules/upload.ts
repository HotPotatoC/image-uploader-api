import { RequestHandler } from "express";
import { createHttpError } from "../helpers/httpError";

export const uploadImage: RequestHandler = (req, res) => {
  if (!req.file) {
    return createHttpError(422, "Missing image");
  }

  const filename = req.file.filename;

  res.json({
    message: "Successfully uploaded image",
    filename,
    url: `${req.protocol}://${req.get("host")}/uploads/${filename}`,
  });
};
