import React from "react";
import "./asset/css/landingPage.css";

import Carasouels from "../carasouel/Carasouels";
import { blog1, blog2, blog3, blog4 } from "./banner";
const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const LandingPage = () => {
  return (
    <div className="landingPage ">
      <div className="left__panel">
        <Carasouels>
          <div>
            <div style={contentStyle}>
              <img
                src={blog1}
                loading="lazy"
                className="blogImages"
                alt="blog1"
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img
                src={blog2}
                className="blogImages"
                loading="lazy"
                alt="blog2"
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img
                src={blog3}
                className="blogImages"
                loading="lazy"
                alt="blog3"
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img
                src={blog4}
                className="blogImages"
                loading="lazy"
                alt="blog4"
              />
            </div>
          </div>
        </Carasouels>
      </div>
    </div>
  );
};

export default LandingPage;
