import express from 'express'
import { registerUser,loginUser,getUseById,getUserResumes } from '../controller/userController.js'
import protect from '../middleware/authMiddleware.js'

const router=express.Router()
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/data',protect,getUseById)
router.get('/resumes',protect,getUserResumes)

export default router
