import fs from "fs";

async function getStoredPosts() {
  const rawFileContent = await fs.promises.readFile("posts.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storedPosts = data.posts ?? [];
  return storedPosts;
}

async function storePosts(posts) {
  try {
    await fs.promises.writeFile(
      "posts.json",
      JSON.stringify({ posts: posts || [] })
    );
    console.log("Posts stored successfully.");
  } catch (error) {
    console.error("Error storing posts:", error);
  }
}

export { getStoredPosts, storePosts };
