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

const delatePoduct = asyncHandler(async (req, res) => {
  const id = req.params;
  try {
    const delatePoduct = await Product.findOneAndDelete(id);
    res.json(delatePoduct);
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
    //Filering
    const queryObj = { ...req.query };
    const excluideFields = ["page", "sort", "limit", "fields"];
    excluideFields.forEach((el) => delete queryObj[el]);
    console.log(queryObj);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    //Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //Limiting the filds

    if (req.query.fields) {
      const filds = req.query.filds.split(",").join(" ");
      query = query.select(filds);
    } else {
      query = query.select("-__v");
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getaProduct,
  getAllProduct,
  updatePoduct,
  delatePoduct,
};
