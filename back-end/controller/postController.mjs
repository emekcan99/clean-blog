import Post from "../modals/Post.mjs";

export const getPosts = async (req, res) => {
  const blog = await Post.find()
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
};

export const getOnePost = async (req, res) => {
  console.log(req.params.id);
  const post = await Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.json(err));
};

export const createPost = async (req, res) => {
  await Post.create(req.body);
  console.log(req.body);
  res.redirect("/");
};

export const updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.description = req.body.description;
  post.content = req.body.content;

  post.save();
  res.redirect("/");
};

export const deletePost = async (req, res) => {
  await Post.findOneAndDelete({ _id: req.params.id });
  res.redirect("/");
};
