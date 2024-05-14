import PostsList from "../components/PostsList";
import MainHeader from "../components/MainHeader";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
