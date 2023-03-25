import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// creating a context
const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  // creating state
  const [blogData, setBlogData] = useState(null);

  //send req to server
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => async () => {
      const data = await getData();
      setBlogData(data);
    },
    []
  );

  const values = {
    blogData,
    setBlogData,
    getData
  };

  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

const useBlogContext = () => useContext(BlogContext);

export { BlogContextProvider, useBlogContext };
