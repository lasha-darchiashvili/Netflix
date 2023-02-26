import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Singup = () => {
  const [password, setPassword] = useState({});
  const [email, setEmail] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const { logIn, user } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then((wh) => navigate("/movies"))
      .catch((er) => setError(er.message.slice(10)));
  };

  return (
    <div className="rounded z-10 sm:w-[400px] sm:h-[550px] absolute top-0 right-0 left-0 bottom-0 sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] bg-black/75 text-white ">
      <form
        action=""
        className="w-full flex flex-col sm:p-[6rem] px-[6rem] pt-[14rem]"
        onSubmit={submitHandler}
      >
        <h1 className="text-[3rem] mb-[1rem] font-semibold">Sign In</h1>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-[1rem] my-[1rem] bg-blackbg text-[1.6rem] rounded w-full"
            name="email"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-[1rem] my-[1rem] bg-blackbg text-[1.6rem] rounded w-full"
            name="password"
          />
          <p className="text-white text-[1.2rem]">{error}</p>
        </div>

        <button
          className="p-[1rem] my-[2rem] bg-red text-[1.6rem] font-semibold rounded"
          type="submit"
        >
          Sign In
        </button>
        <p className="text-[1.6rem] text-graytx mt-[2rem]">
          New to Netflix?{" "}
          <Link className="text-white" to="/signup">
            Sign up now.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Singup;
