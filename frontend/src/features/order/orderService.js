import axios from "axios";

const API_LINK = "/api/orders/";

//create order
const createOrder = async (data, token) => {
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
const getOrders = async (token) => {
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

//function to export
const orderService = {
  createOrder,
  getOrders,
};

//exports
export default orderService;
