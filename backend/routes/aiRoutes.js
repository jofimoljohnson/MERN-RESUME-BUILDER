import express from "express";
import { enhanceJobDescription,enhanceProfessionalSummary,uploadResume } from "../controller/aiController.js";
import protect from "../middleware/authMiddleware.js";
import upload from "../db/multer.js";

const router = express.Router();
router.post('/enhance-pro-sum',protect,enhanceProfessionalSummary)
router.post('/enhance-job-desc',protect,enhanceJobDescription)
router.post('/upload-resume',protect,uploadResume)

export default router;
