const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = "../utils/validateMongodbId";

const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getBlog = await Blog.findById(id);
    const updateViews = await getBlog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    );
    res.json(getBlog, updateViews);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getBlog = await Blog.find();
    re.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

const delateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const delateBlog = await Blog.findByIdAndDelete(id);
      res.json(delateBlogBlog);
    } catch (error) {
      throw new Error(error);
    }
  });

module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, delateBlog, };
