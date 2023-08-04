import React, {  useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };


return (
  <div className="container">
    <h1>Sign in to Amazon</h1>
    <form onSubmit={signIn}>
      <label htmlFor="email">Email :</label>
      <input
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
        required
      />
      <p className="error">{error}</p>
      <input type="submit" value="Sign-In" />

      <p>
        New to Amazon? <Link to="/signup">Create your Amazon account</Link>
      </p>
    </form>
  </div>
)}

export default Login;
