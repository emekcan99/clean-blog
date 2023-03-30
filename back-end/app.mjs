import express from "express";
import mongoose from "mongoose";
import Post from "./modals/Post.mjs";
import cors from "cors";
import {
  getPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
} from "./controller/postController.mjs";

const app = express();

//db connection

mongoose.connect("mongodb://localhost/clean-blog-test-db");

//Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // İzin verilen kaynak adresi
    methods: "GET,POST,PUT,DELETE", // İzin verilen HTTP metotları
    optionsSuccessStatus: 200, // Başarılı CORS isteklerinin durum kodu
  })
);

//Routes
app.get("/", getPosts);
app.get("/posts/:id", getOnePost);
app.post("/post-newpost", createPost);
app.put("/posts/:id", updatePost);
app.delete("/posts/:id", deletePost);

const port = 5000;

app.listen(port, () => {
  console.log(`server is up on port: ${port}`);
});
