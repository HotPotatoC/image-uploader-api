import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as path from "path";
import { uploadImage } from "./modules/upload";
import upload from "./helpers/multer";
import { error } from "./helpers/httpError";

const app: express.Application = express();

app.use(cors());
app.use(morgan("combined"));

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.post("/upload", upload.single("image"), error, uploadImage);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server started on port 5000")
);
