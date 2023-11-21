import express from "express";
import { getStories } from "../controllers/stories.js";

const router = express.Router();

// http://localhost:5000/stories

router.get("/", getStories);

export default router;
