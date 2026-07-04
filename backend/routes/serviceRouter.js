import express from "express";
import multer from "multer";
// Added .js extension to the local controller import path
import { createService, deleteService, getServiceById, getservices, updateService } from "../controllers/serviceController.js";

const upload = multer({ dest: "/tmp" });

const serviceRouter = express.Router();

serviceRouter.get("/", getservices);
serviceRouter.post("/", upload.single("image"), createService);
serviceRouter.get("/:id", getServiceById);
serviceRouter.put("/:id", upload.single("image"), updateService);
serviceRouter.delete("/:id", deleteService);

export default serviceRouter;