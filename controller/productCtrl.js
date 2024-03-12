const { default: slugify } = require("slugify");
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");


const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.doby.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const updatePoduct = asyncHandler(async (req, res) => {
  const id = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updatePoduct = await Product.findOneAndUpdate({ id }, req.body, {
      new: true,
    });
    res.json(updatePoduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const getallProducts = await Product.find();
    res.json(getallProducts);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createProduct, getaProduct, getAllProduct, updatePoduct };
