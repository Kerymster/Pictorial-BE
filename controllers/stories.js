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

export const createStory = async (req, res) => {
  const newStory = new Story(req.body);
  try {
    await newStory.save();
    res.status(201).end();
  } catch (error) {
    res.status(409).json({
      message: err.message,
    });
  }
};
