import Story from "../models/stories.js";

export const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};
