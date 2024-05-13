import express from "express";
import cors from "cors";
import { getStoredPosts, storePosts } from "./data/posts.js";

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Enpoint for getting all posts
app.get("/posts", async (req, res) => {
  const storedPosts = await getStoredPosts();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json({ posts: storedPosts });
});

// Endpoint for creating new post
app.post("/posts", async (req, res) => {
  const existingPosts = await getStoredPosts();
  const postData = req.body;
  console.log(postData);
  const newPost = {
    ...postData,
    id: Math.random().toString(),
  };
  console.log(newPost);
  const updatedPosts = [newPost, ...existingPosts];
  await storePosts(updatedPosts);
  res.status(201).json({ message: "Stored new post.", post: newPost });
});

process.cwd();

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
