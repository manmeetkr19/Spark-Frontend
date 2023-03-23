import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };
  //register function
  const register = (event) => {
    event.preventDefault();
    const { name, email, password } = user;

    if (name && email && password) {
      axios.post("https://white-moth-wig.cyclic.app/Register", user).then((res) => {
        //alert(res.data.message);
        history("/login");
      });
    } 
    else {
      alert("invalid input");
    }
  }

    return (
      <>
        <div className="login">
          
          <form className="login-form">
          <h2>Register</h2>
            <input type="text" name="name" placeholder="John" value={user.name} onChange={handleChange}></input>
            <input type="email" name="email" placeholder="abc@xz.com" value={user.email} onChange={handleChange}></input>
            <input type="password" name="password" placeholder="*******" value={user.password} onChange={handleChange}></input>
            <button onClick={register}>Register</button>
            <Link to="/login" style={{textDecoration:"none"}}>
            <p>Already have an account ?</p>
            </Link>
            
          </form>
        </div>
      </>
    );
};
export default Register;
