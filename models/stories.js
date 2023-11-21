import mongoose from "mongoose";

const storySchema = mongoose.Schema({
  title: String,
  href: String,
  description: String,
  imageUrl: String,
  category: {
    name: String,
    href: String,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  author: {
    name: String,
    href: String,
    imageUrl: String,
  },
});

const Story = mongoose.model("Story", storySchema);

export default Story;
