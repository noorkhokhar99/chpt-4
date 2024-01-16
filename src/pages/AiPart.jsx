import React from 'react'
import Navbar from "../components/Navbar";
const AiPart = () => {
  return (
    <>
    <Navbar />
    <div className="container-fluid" style={{ backgroundColor: "#FDECEC ", height: "100vh" }}>
    <div className="row d-flex justify-content-center">
        <div className="col-12 text-center">
            <p className="text-center mt-5">
                <h1 style={{ fontFamily: "initial" }}>How it works?</h1>
            </p>
            <div className="row d-flex justify-content-center">
                <div className="col-3">
                    <div className="card text-center">
                        <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-upload mt-4" style={{ fontSize: "30px" }}></i>
                            <b className="mt-3">Upload Image or Capture Image</b>
                            <p className="mt-3">Upload your image. Then we recognize the image and then we take the next step.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-center">
                        <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-briefcase mt-4" style={{ fontSize: "30px" }}></i>
                            <b className="mt-3">Our Work</b>
                            <p className="mt-3">We will tell us all diseases and also we will help us to grow your crop more and more</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-center">
                        <div className="d-flex flex-column align-items-center">
                            <i className="fas fa-download mt-4" style={{ fontSize: "30px" }}></i>
                            <b className="mt-3">Download</b>
                            <p className="mt-3">Your all info is ready! You just have to download it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default AiPart