import express from 'express';
import { addPost, deletePost, getPost, getPostById, updatePost } from '../controllers/posts.js';
const router = express.Router();



router.get("/",getPost)
router.get("/:id",getPostById)
router.delete("/:id",deletePost)
router.post("/",addPost)
router.put("/:id",updatePost)

export  default router;