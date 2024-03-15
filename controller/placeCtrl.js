const Place = require("../models/placeModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createPlace = asyncHandler(async (req, res) => {
  try {
    const newPlace = await Place.create(req.body);
    res.json(newPlace);
  } catch (error) {
    throw new Error(error);
  }
});

const updatePlace = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatePlace = await Place.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatePlace);
  } catch (error) {
    throw new Error(error);
  }
});

const deletePlace = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletePlace = await Place.findByIdAndDelete(id);
    res.json(deletePlace);
  } catch (error) {
    throw new Error(error);
  }
});

const getPlace = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaPlace = await Place.findById(id);
    res.json(getaPlace);
  } catch (error) {
    throw new Error(error);
  }
});

const getallPlace = asyncHandler(async (req, res) => {
  try {
    const getallPlace = await Place.find();
    res.json(getallPlace);
  } catch (error) {
    throw new Error(error);
  }
});


module.exports = {
  createPlace,
  updatePlace,
  deletePlace,
  getPlace,
  getallPlace,
};
