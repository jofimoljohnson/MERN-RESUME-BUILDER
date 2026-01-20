import express from "express";
import {
    createResume,
    deleteResume,
    getResumeById,
    getPublicResumeById,
    updateResume,
} from "../controller/resumeController.js";

import protect from "../middleware/authMiddleware.js";
import upload from "../db/multer.js";

const router = express.Router();
router.post("/create", protect, createResume);
router.put("/update", upload.single("image"), protect, updateResume);
router.delete("/delete/:resumeId", protect, deleteResume);
router.get("/get/:resumeId", protect, getResumeById);
router.get("/public/:resumeId", getPublicResumeById);

export default router;
