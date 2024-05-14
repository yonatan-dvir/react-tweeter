import PostList from "../components/PostsList";
import MainHeader from "../components/MainHeader";
import { useState } from "react";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  function showModalHandler(event) {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default Posts;
