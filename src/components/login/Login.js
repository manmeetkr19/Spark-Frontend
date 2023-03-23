import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { context } from "../../App";


const Login = () => {
  const { setLoginUser } = useContext(context);

  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login = (event) => {
    event.preventDefault();
    axios.post("https://white-moth-wig.cyclic.app/Login", user).then((res) => {
      if (res.data.user) {
        setLoginUser(res.data.user);
        history("/");
      } else {
        alert("Login Failed");
      }
    });
  };
  return (
    <>
      <div className="login">
        <form className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            id="email"
            placeholder="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            id="password"
            placeholder="******"
            value={user.password}
            name="password"
            onChange={handleChange}
          ></input>
          <button id="submit" onClick={login}>Login</button>
          <Link to="/register" style={{textDecoration:"none"}}><p>Don't have an account ?</p></Link>
          
        </form>
      </div>
    </>
  );
};
export default Login;
