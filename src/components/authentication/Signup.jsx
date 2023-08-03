import React, { useContext, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { globalContext } from "../Store/Context";

const Login = () => {
  const [error, setError] = useState("");
  const [signupUser, setSignupUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  });
  const navigate = useNavigate();


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const register = async (e) => {

    e.preventDefault();

    setSignupUser({
      firstName: "",
      email: "",
      mobile: "",
      password: "",
    });

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        signupUser.email,
        signupUser.password
      );

      const User = res.user;
      console.log(User);
      await updateProfile(User, {
        displayName: signupUser.firstName,
        phoneNumber: signupUser.mobile,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Create Account</h1>
      <form onSubmit={register} action="/your-login-endpoint" method="post">
        <label htmlFor="email">First Name</label>
        <input
          type="text"
          value={signupUser.firstName}
          onChange={onChangeHandler}
          name="firstName"
          required
        />

        <label htmlFor="email">Email :</label>
        <input
          type="text"
          value={signupUser.email}
          onChange={onChangeHandler}
          id="email"
          name="email"
          required
        />

        <label htmlFor="mobile">Mobile :</label>
        <input
          type="text"
          value={signupUser.mobile}
          onChange={onChangeHandler}
          id="mobile"
          name="mobile"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={signupUser.password}
          onChange={onChangeHandler}
          id="password"
          name="password"
          required
        />

        <p className="error">{error}</p>
        <input type="submit" value="Create Account" />

        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
