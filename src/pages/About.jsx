import React from "react";
import Navbar from "../components/Navbar";
import classes from "./about.module.css";
import firstImage from "../assets/images/horticulrurist-cutting-plant.jpg";
import secondImage from "../assets/images/horticulture-greenhouse-hero-background.jpg";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="conatiner-fluid" style={{ backgroundColor: "#FDF0E6" }}>
        <div className={`container pt-5 ${classes.firstSec}`}>
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <h1>Smart Crop Advisor Introduction</h1>
              <p className="mt-3 mx-5 mx-md-2">
                The Smart Crop Advisor is an innovative agricultural solution
                harnessing the power of advanced technologies to empower farmers
                with precise insights and recommendations for optimal crop
                management. This intelligent system combines state-of-the-art AI
                capabilities, including GPT-4 Vision, Assistants API, Text to
                Speech, and data-driven analysis, to revolutionize
                decision-making in the agriculture sector.
              </p>

              <h1 className="mt-5">Key Features:</h1>
              <p className="mt-3 mx-5 mx-md-2">
                Image Analysis with GPT-4 Vision: Utilizes GPT-4 Vision to
                analyze images of crops, identifying potential diseases, pest
                infestations, and nutrient deficiencies.Employs a sophisticated
                classification system to categorize crop conditions accurately
              </p>
            </div>
            <div className="col-12 my-auto col-md-6 order-1 order-md-2">
              <img
                src={firstImage}
                style={{ width: "100%", height: "100%" }}
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section of About page  */}

      <div className="conatiner-fluid">
        <div className={`container pt-5 ${classes.firstSec}`}>
          <div className="row">
            <div className="col-12 col-md-6 order-1 order-md-2">
              <h1>Intelligent Recommendations via Assistants API:</h1>
              <p className="mt-3 mx-5 mx-md-2">
                Integrates the Assistants API to generate comprehensive reports
                and actionable recommendations based on the analysis.Provides
                farmers with clear guidance on addressing specific issues and
                optimizing crop health.
              </p>

              <h1 className="mt-5">Accessibility with Text to Speech:</h1>
              <p className="mt-3 mx-5 mx-md-2">
                Implements Text to Speech technology to convert generated
                reports into spoken feedback.Ensures accessibility for farmers,
                allowing them to receive information verbally, especially in
                field conditions.
              </p>
            </div>
            <div className="col-12 my-auto col-md-6 order-2 order-md-1">
              <img
                src={secondImage}
                style={{ width: "100%", height: "100%" }}
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
