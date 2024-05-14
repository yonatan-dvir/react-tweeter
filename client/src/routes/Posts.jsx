import PostList from "../components/PostsList";
import MainHeader from "../components/MainHeader";
import { useState } from "react";
import NewPost from "./NewPost";

function Posts() {
  return (
    <>
      <NewPost />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;
