//sas
//sas

import axios from "axios";

const API_LINK = "/api/products";
const getProducts = async (filters) => {
  const res = await axios.post(API_LINK, filters);
  return res.data;
};

const getSingle = async (id) => {
  const res = await axios.get(API_LINK + "/" + id);
  return res.data;
};

const productService = {
  getProducts,
  getSingle,
};
export default productService;
