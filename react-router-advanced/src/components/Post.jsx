import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  return <h2>Showing Post with ID: {postId}</h2>;
};

export default Post;
