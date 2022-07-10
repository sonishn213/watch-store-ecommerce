import { useState, useEffect } from "react";
import InputBox from "../component/inputs/InputBox";
import { useSelector, useDispatch } from "react-redux";
import { reset, login } from "../features/auth/authSlice";
import Loading from "../component/globals/Loading";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //entered data
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  //state to handle error
  const [inputError, setInputError] = useState("");

  //input data destructure
  const { email, password } = inputData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, message, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setInputError(message);
    }
    if (isSuccess || user) {
      //if success or user exists then redirect to home
      navigate("/");
    }
    dispatch(reset());
  }, [user, message, isSuccess, isError]);

  //read input onchange
  const handleInput = (e) => {
    setInputData((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  };

  //login on submit form
  const onSubmit = (e) => {
    e.preventDefault();

    //call login function
    dispatch(login(inputData));
  };

  //if loading
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <div className="max-w-sm mx-auto pt-10 pb-40">
        <h2 className="mt-10 mb-4 text-center">Login</h2>
        <form onSubmit={onSubmit} className="space-y-4">
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
          <p style={{ color: "red" }}>{inputError}</p>
          <input
            type="submit"
            value="Login"
            className="w-full bg-black text-white uppercase py-3 rounded-sm cursor-pointer tracking-wide"
          />
        </form>
      </div>
    </main>
  );
};

export default Login;
