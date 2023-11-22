import express from "express";
import { getStories, createStory } from "../controllers/stories.js";

const router = express.Router();

// http://localhost:5000/stories

router.get("/", getStories);
router.post("/", createStory);

export default router;
