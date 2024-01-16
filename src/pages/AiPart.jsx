import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Aipart.css";

const AiPart = () => {
  const [cameraStream, setCameraStream] = useState(null);

  const handleUploadButtonClick = () => {
    // Trigger the file input click event
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", handleFileSelection);
    fileInput.click();
  };

  const handleCameraButtonClick = () => {
    // Open camera
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(handleCameraStream)
      .catch(handleCameraError);
  };

  const handleFileSelection = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Handle the selected file (e.g., upload or process)
      console.log("Selected file:", selectedFile);
    }
  };

  const handleCameraStream = (stream) => {
    // Handle camera stream
    setCameraStream(stream);
  };

  const handleCameraError = (error) => {
    // Handle camera error
    console.error("Error accessing camera:", error);
  };
  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{ backgroundColor: "#FDECEC ", height: "100vh" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center">
            <p className="text-center mt-5">
              <h1 style={{ fontFamily: "initial" }}>How it works?</h1>
            </p>
            <div className="row d-flex justify-content-center">
              <div className="col-3">
                <div className="card text-center">
                  <div className="d-flex flex-column align-items-center">
                    <i
                      className="fas fa-upload mt-4"
                      style={{ fontSize: "30px" }}
                    ></i>
                    <b className="mt-3">Upload Image or Capture Image</b>
                    <p className="mt-3">
                      Upload your image. Then we recognize the image and then we
                      take the next step.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card text-center">
                  <div className="d-flex flex-column align-items-center">
                    <i
                      className="fas fa-briefcase mt-4"
                      style={{ fontSize: "30px" }}
                    ></i>
                    <b className="mt-3">Our Work</b>
                    <p className="mt-3">
                      We will tell us all diseases and also we will help us to
                      grow your crop more and more
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card text-center">
                  <div className="d-flex flex-column align-items-center">
                    <i
                      className="fas fa-download mt-4"
                      style={{ fontSize: "30px" }}
                    ></i>
                    <b className="mt-3">Download</b>
                    <p className="mt-3">
                      Your all info is ready! You just have to download it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-5">
            <button
              onClick={handleUploadButtonClick}
              className="custom-button upload-button"
            >
              Upload Image or Browse Image
            </button>
            <button
              onClick={handleCameraButtonClick}
              className="custom-button camera-button"
            >
              Take Image from Camera
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiPart;
