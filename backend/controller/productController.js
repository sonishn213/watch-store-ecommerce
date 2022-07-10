const asyncHandler = require("express-async-handler");
const { findById } = require("../models/productModel");
const Product = require("../models/productModel");
// @desc  get Products
// @route POST api/products/
// @access private
const getProducts = asyncHandler(async (req, res) => {
  let filterString = {};
  let sortString = { createdAt: -1 };
  //check if filter exists
  if (req.body.filter) {
    console.log(JSON.parse(req.body.filter));
    filterString = makeFilterString(JSON.parse(req.body.filter));
  }
  if (req.sort && req.sort === 1) {
    sortString.createdAt = 1;
  }
  try {
    const products = await Product.find(filterString).sort(sortString);
    res.status(200).json(products);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }

  /* 
  {
    $and:[{$or:[{gender:"male"},{gender:"female"}]},
    {$or:[{occation:"sports"}]},]
  }
*/
});

// @desc  set Products
// @route POST api/products/add
// @access private
const setProducts = asyncHandler(async (req, res) => {
  if (!req.body.p_name) {
    res.status(400);
    throw new Error("Please add a p_name field");
  }
  const products = await Product.create({
    p_name: req.body.p_name,
    description: req.body.description,
    details: req.body.details,
    price: req.body.price,
    mainimg: req.body.mainimg,
    images: req.body.images,
    gender: req.body.gender,
    occation: req.body.occation,
    strapmaterial: req.body.strapmaterial,
    display: req.body.display,
  });
  res.status(200).json(products);
});

// @desc  get Single Product
// @route GET api/products/id
// @access public
const getSingleProduct = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Please provide id");
  }
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
});

//function to generate filer string to pass to find()
const makeFilterString = (reqfilter) => {
  let strings = [];

  //names of fields used for filter ...can add more
  const filterTypes = ["gender", "occation", "strapmaterial", "display"];

  //loop to create the query string
  for (let property of filterTypes) {
    if (reqfilter.hasOwnProperty(property)) {
      let orObj = {
        $or: reqfilter[property],
      };
      strings.push(orObj);
    }
  }
  return {
    $and: strings,
  };
};
//exports
module.exports = { getProducts, setProducts, getSingleProduct };
