import React, { useEffect, useState } from "react";
import { useBlogContext } from "../../contexts/blogContext";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Row,
  Col,
  Container,
  Button,
} from "reactstrap";
import "./styles.css";

function Homepage() {
  const { blogData, setBlogData, getData } = useBlogContext();

  console.log(blogData);
  useEffect(
    () => async () => {
      const data = await getData();
      setBlogData(data);
    },
    []
  );

  return (
    <div>
      {blogData
        ? blogData.map((item) => (
            <Container >
              <Card className="mt-2">
                <CardBody className="Card ">
                  <CardTitle className="mb-3" tag="h4">
                    {item.title}
                  </CardTitle>
                  <CardSubtitle className="mb-3 text-muted">
                    {item.description}
                  </CardSubtitle>
                  <Link to={`/posts/${item._id}`}>
                    <Button>details</Button>
                  </Link>
                </CardBody>
              </Card>
            </Container>
          ))
        : null}
    </div>
  );
}

export default Homepage;
