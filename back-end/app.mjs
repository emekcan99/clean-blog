import express from "express";
import mongoose from "mongoose";
import Post from "./modals/Post.mjs";
import cors from "cors";
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
app.get("/", async (req, res) => {
  const blog = await Post.find()
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
});

app.get("/posts/:id", async (req, res) => {
  console.log(req.params.id);
  const post = await Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.json(err));
});

app.post("/post-newpost", async (req, res) => {
  await Post.create(req.body);
  console.log(req.body);
  res.redirect("/");
});

const port = 5000;

app.listen(port, () => {
  console.log(`server is up on port: ${port}`);
});
