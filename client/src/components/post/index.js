import React from "react";
import { useBlogContext } from "../../contexts/blogContext";
import { Link, redirect, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Container } from "reactstrap";
import "./styles.css"
function Post() {
  const { blogData } = useBlogContext();

  let { postId } = useParams();

  console.log(blogData);

  let currData = blogData.find((item) => item._id === postId);

  console.log(currData);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/posts/${postId}`);
  };

  return (
    <Container>
      <h1>{currData.title}</h1>
      <p>{currData.content}</p>
      <Button
        onClick={() =>
          window.confirm("are you sure?") ? handleDelete() : null
        }
      className="mx-2">
        Delete
      </Button>
      <Button>
        <Link to={`/posts/${postId}/update`} className="Link">Update</Link>
      </Button>
    </Container>
  );
}

export default Post;
