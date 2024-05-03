import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList() {
  return (
    <ul className={classes.posts}>
      <Post name="Yonatan Dvir" body="Hello! I'm Learning React!" />
      <Post name="Yonatan" body="Hello!!" />
    </ul>
  );
}

export default PostList;
