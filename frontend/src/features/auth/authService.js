import axios from "axios";
//link for auth api
const API_URL = "/api/user/";

//function to register a user
const register = async (userData) => {
  //send request
  const response = await axios.post(API_URL, userData);
  //if response data exists, set user to localstorage
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//function to logout a user
const logOut = () => {
  //remove the user from local storage to logout
  if (localStorage.getItem("user")) {
    localStorage.removeItem("user");
  }
};
const authService = {
  register,
  logOut,
  login,
};
export default authService;
