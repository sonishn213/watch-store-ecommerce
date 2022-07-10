import { useState, useEffect } from "react";

import { register, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputBox from "../component/inputs/InputBox";
import Loading from "../component/globals/Loading";
const Register = () => {
  //entered data
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    role: "user",
  });
  //state to handle error
  const [inputError, setInputError] = useState("");
  //entered data
  const { name, email, password, password2, role } = inputData;
  //initialisation
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //authState
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  //after register
  useEffect(() => {
    if (isError) {
      setInputError(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, user, dispatch, navigate]);

  //read input onchange
  const handleInput = (e) => {
    setInputData((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  };

  //register on submit
  const onSubmit = (e) => {
    e.preventDefault();
    //check if passwords match
    if (password !== password2) {
      setInputError("Password do not Match");
    } else {
      //set state values as object
      const userData = {
        name,
        email,
        password,
        role,
      };

      //call register to finally register user
      dispatch(register(userData));
    }
  };
  //if loading
  if (isLoading) {
    return <Loading />;
  }
  //if already user exists in localstorage
  if (user) {
    return <div></div>;
  }

  return (
    <main>
      <div className="max-w-sm mx-auto pt-10 pb-40">
        <h2 className="mt-10 mb-4 text-center">Register</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <InputBox
            type="text"
            ph="Name..."
            name="name"
            value={name}
            onChange={handleInput}
          />
          <InputBox
            type="email"
            ph="Email..."
            name="email"
            value={email}
            onChange={handleInput}
          />
          <InputBox
            type="password"
            ph="Password..."
            name="password"
            value={password}
            onChange={handleInput}
          />
          <InputBox
            type="password"
            ph="Re enter Password..."
            name="password2"
            value={password2}
            onChange={handleInput}
          />
          <p style={{ color: "red" }}>{inputError}</p>
          <input
            type="submit"
            value="Register"
            className="w-full bg-black text-white uppercase py-3 rounded-sm cursor-pointer tracking-wide"
          />
        </form>
      </div>
    </main>
  );
};

export default Register;
