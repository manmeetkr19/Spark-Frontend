import React, { useContext } from "react";
import { context } from "../../App";
import window from "../../image/window.png";
import col from "../../image/col1.png";
import axios from "axios";
import fileDownload from "js-file-download";

const Homepage = () => {
  const { loginuser } = useContext(context);

  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  return (
    <div className="home">
      <div className="intro">
        <h2>Hello {loginuser.name}</h2>
        <h1 style={{ color: "white" }}>Welcome to S-Park </h1>
        <div className="intro-p">
          <p>
            An immersive digital platform for business collaboration and
            socializing. Meet SPark, the personal metaverse for corporate
            culture. It is a place where you can get introduced to new people,
            meet your team members and have some fun doing it! Think of it as a
            virtual meeting room that has been optimized to humanize meetings
            and bring an element of attentiveness.
          </p>
          <p>
            Spark(Social Park) is a real time 3D world made in Unity. It’s main
            focus is to create digital spaces for a scattered team so that they
            may hold virtual meetings and play games together in a more
            realistic and engaging way.
          </p>
        </div>
      </div>
      <div className="Links">
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
            margin: "10px",
            backgroundColor: "transparent",
            border: "none",
            height: "120px",
            width: "150px",
            cursor: "pointer",
          }}
          onClick={() => {
            handleDownload(
              "https://drive.google.com/file/d/11OnrMCxwE9jRsJS0qNKQED9ooC4ii8Ev/view",
              "S-Park.zip"
            );
          }}
        >
          <img
            src={window}
            alt="window os"
            style={{ height: "120px", width: "150px" }}
          ></img>
          <a href="https://demo.filestash.app/s/f5Qybll">
          <h1 style={{ color: "white" }}>Download</h1>
          </a>
          
        </button>
      </div>
      <div className="collage">
        <img src={col} alt="collage"></img>
        <div className="ctest">
          <h1>Try more engagement with team while collaborating</h1>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
