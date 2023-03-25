import React, { useEffect, useState } from "react";
import { useBlogContext } from "../../contexts/blogContext";

function Homepage() {
  const { blogData,setBlogData,getData } = useBlogContext();

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
      {blogData ? blogData.map((item) => (<div key={item._id}>{item.title}</div>)):null}
    </div>
  );
}

export default Homepage;
