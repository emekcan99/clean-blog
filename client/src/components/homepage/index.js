import React, { useEffect, useState } from "react";
import { useBlogContext } from "../../contexts/blogContext";
import { Link } from "react-router-dom";

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
            <div key={item._id}>
              {item.title}
              <Link to={`/posts/${item._id}`}>
                <button>details</button>
              </Link>
            </div>
          ))
        : null}
    </div>
  );
}

export default Homepage;
