import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/images/horticulture-greenhouse-hero-background.jpg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-class ">
        <div className="row">
          <div className="col-lg-7 col-md-8 col-sm-10 mt-5">
            <h1 className="text-white mt-5" style={{ fontFamily: "initial" }}>
              Smart Crop Advisor
            </h1>
            <p className="text-white mt-5">
              The Smart Crop Advisor is an innovative agricultural solution
              harnessing the power of advanced technologies to empower farmers
              with precise insights and recommendations for optimal crop
              management.
            </p>
            <Link to="/crop">
              <button className="btn-style mt-3">Let's Try</button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ backgroundColor: "#FDECEC ", height: "100vh" }}
      >
        <div className="row">
          <div className="col-12">
            <p className="text-center mt-5  ">
              <h1 style={{ fontFamily: "initial" }}>How it works?</h1>
            </p>
            <div className="row">
              <div className="col-3">
                <div className="card">
                  <h6>
                    <i className="fas fa-upload"></i> <br /> Upload Image or{" "}
                    <i className="fas fa-camera"></i> Capture Image
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
