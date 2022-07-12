import axios from "axios";

const API_LINK = "/api/cartitems/";

//function to add cart items to database
const addToCart = async (data, token) => {
  //set token in header
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  //send request
  const res = await axios.post(API_LINK, data, config);
  //   returning data
  return res.data;
};

//function to get cart item from database
const getCartItems = async (token) => {
  //set token in header
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  //send request
  const res = await axios.get(API_LINK, config);
  //   returning data
  return res.data;
};

const deleteItem = async (id, token) => {
  //set token in header
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  //send request
  const res = await axios.delete(API_LINK + id, config);
  //   returning data
  return res.data;
};

// delete all items of a user
const deleteAllItems = async (token) => {
  const API_LINK = "/api/cartitems/deleteall";
  //set token in header
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  //send request
  const res = await axios.delete(API_LINK, config);
  //   returning data
  return res.data;
};

//function to export
const cartItemService = {
  getCartItems,
  addToCart,
  deleteItem,
  deleteAllItems,
};

//exports
export default cartItemService;
