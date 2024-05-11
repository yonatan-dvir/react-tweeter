import { readFile, writeFile } from "node:fs/promises";

async function getStoredPosts() {
  const rawFileContent = await fs.readFile("posts.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedPosts = data.posts ?? [];
  return storedPosts;
}

function storePosts(posts) {
  return fs.writeFile("posts.json", JSON.stringify({ posts: posts || [] }));
}

export { getStoredPosts, storePosts };
