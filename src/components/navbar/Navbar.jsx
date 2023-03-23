import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../App";
import Logo from "../../image/Logo.png";

export const Navbar = () => {
  const { loginuser } = useContext(context);
  const {setLoginUser} = useContext(context);

  const user = {};

  const logout = ()=>{
      setLoginUser(user);
  }

  return (
    <div className="navbar">
      <img
        src={Logo}
        alt="logo"
        style={{ height: "70px", width: "120px" }}
      ></img>
      <div className="nav-container">
        {Object.keys(loginuser).length===0 ? (
          <>
          <Link to="/login" style={{textDecoration:"none",color:"white"}}><h4>Login</h4></Link>
          <Link to="/register" style={{textDecoration:"none",color:"white"}}><h4>Register</h4></Link>
          </>
        ) : (
          <>
            <h4 style={{ padding: "15px" }}>{loginuser.name}</h4>
            <button
              style={{
                height: "40px",
                width: "80px",
                border: "2px solid white",
                borderRadius: "5px",
                backgroundColor: "teal",
                color: "white",
                cursor: "pointer",
              }}

              onClick={logout}
            >
              <h4 style={{ margin: "auto" }}>Logout</h4>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
