import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { AiOutlineSend } from "react-icons/ai";
import { useBlogContext } from "../../contexts/blogContext";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdatePost() {
  let { blogData } = useBlogContext();
  let { postId } = useParams();

  let currData = blogData.find((item) => item._id === postId);

  const [title, setTitle] = useState(currData.title);
  const [description, setDescription] = useState(currData.description);
  const [content, setContent] = useState(currData.content);

  console.log(currData);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(
      `http://localhost:5000/posts/${postId}`,
      {
        title: title,
        description: description,
        content: content,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  };
  return (
    <Container>
      {" "}
      <Form onSubmit={handleUpdate}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            className="title"
            id="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="desciription">Title</Label>
          <Input
            className="description"
            id="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="content">Content</Label>
          <Input
            type="textarea"
            id="content"
            className="content"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Input>
        </FormGroup>
        <Button color="primary" type="submit">
          <AiOutlineSend></AiOutlineSend>
        </Button>
      </Form>
    </Container>
  );
}

export default UpdatePost;
