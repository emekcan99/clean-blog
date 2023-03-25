import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import { useBlogContext } from "../../contexts/blogContext";

function AddPost() {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");
  const {getData, setBlogData} = useBlogContext()

  // handle post process

  const submitHandler = async (e) => {
    e.preventDefault();
    setTitle("");
    setContent("");
    const { data } = await axios.post(
      "http://localhost:5000/post-newpost",
      {
        title: title,
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
    <div>
      <Form onSubmit={submitHandler}>
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
          <Label for="content">Content</Label>
          <Input
            type="textarea"
            id="content"
            className="content"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          >
          </Input>
        </FormGroup>
        <Button color="primary" type="submit">
          <AiOutlineSend></AiOutlineSend>
        </Button>
      </Form>
    </div>
  );
}

export default AddPost;
