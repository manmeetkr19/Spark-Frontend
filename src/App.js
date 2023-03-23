import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";
import {Footer} from "./components/footer/Footer"
import "./App.css";

export const context = createContext();

function App() {
  const [loginuser, setLoginUser] = useState({});

  return (
    <div className="App">
      <context.Provider value={{ loginuser, setLoginUser }}>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={loginuser && loginuser._id ? <Homepage /> : <Login />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer/>
        </Router>
      </context.Provider>
    </div>
  );
}

export default App;
