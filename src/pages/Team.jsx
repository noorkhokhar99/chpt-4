import React from "react";
import Navbar from "../components/Navbar";
import Hassan from "../assets/images/122821437.png";
import Arham from "../assets/images/HeroIma.jpg";
import Noor from "../assets/images/34125851.jpeg"
import Adil from "../assets/images/1703920461690.jpeg"
import Asia from "../assets/images/1699765585453.jpeg"
const Team = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ backgroundColor: "#FDECEC" }}>
        <div className="container">
          <div className="row">
            <div className="col ab-classs">
              <h5
                className="d-flex justify-content-center mt-5"
                style={{
                  color: "dimgray",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                Experts
              </h5>
              <h1
                className="d-flex justify-content-center"
                style={{ fontSize: "40px", fontWeight: "bolder" }}
              >
                Our Team Members
              </h1>
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-evenly pb-5">
            <div
              className="col-3 overflow-hidden mt-lg-block mt-md-4 mt-5"
              style={{
                width: "250px",
                height: "360px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <img
                src={Arham}
                alt=""
                style={{
                  borderRadius: "100px",
                  marginLeft: "40px",
                  marginTop: "50px",
                  width: "140px",
                }}
              />
              <h4
                className="d-flex justify-content-center mt-4"
                style={{ fontWeight: "bolder" }}
              >
                Muhammad Arham
              </h4>
              <p
                style={{ color: "dimgray" }}
                className="d-flex justify-content-center"
              >
                MERN Stack Developer
              </p>
              <div style={{ marginTop: "45px" }}>
                <div
                  className="hover-class d-inline-flex d-lg-flex-none "
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.203)",
                    height: "50px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    width: "50px",
                    marginRight: "20px",
                    marginLeft: "15px",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/arhamansari12/"
                    className="d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fab fa-linkedin mt-2"
                      style={{
                        fontSize: "27px",
                        borderRadius: "5px",
                        marginLeft: "13px",
                      }}
                    ></i>
                  </a>
                </div>
               
                
                <div
                  className="hover-class d-inline-flex d-lg-flex-none"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.203)",
                    height: "50px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    width: "50px",
                  }}
                >
                  <a
                    href="https://github.com/arhamansari11"
                    className="d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fab fa-github mt-2"
                      style={{
                        fontSize: "27px",
                        marginLeft: "13px",
                        borderRadius: "5px",
                      }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-3 overflow-hidden mt-lg-block mt-md-4 mt-5"
              style={{
                width: "250px",
                height: "360px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <img
                src={Hassan}
                alt=""
                style={{
                  borderRadius: "100px",
                  marginLeft: "40px",
                  marginTop: "50px",
                  width: "140px",
                }}
              />
              <h4
                className="d-flex justify-content-center mt-4"
                style={{ fontWeight: "bolder" }}
              >
                Hassan Gulzar
              </h4>
              <p
                style={{ color: "dimgray" }}
                className="d-flex justify-content-center"
              >
                Next Js Developer
              </p>
              <div style={{ marginTop: "45px" }}>
                <div
                  className="hover-class d-inline-flex d-lg-flex-none"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.203)",
                    height: "50px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    width: "50px",
                    marginRight: "20px",
                    marginLeft: "15px",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/hassan-gulzar-256292267/"
                    className="d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fab fa-linkedin mt-2"
                      style={{
                        fontSize: "27px",
                        borderRadius: "5px",
                        marginLeft: "13px",
                      }}
                    ></i>
                  </a>
                </div>
                
                <div
                  className="hover-class d-inline-flex d-lg-flex-none"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.203)",
                    height: "50px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    width: "50px",
                  }}
                >
                  <a
                    href="https://github.com/hassangulzar1"
                    className="d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fab fa-github mt-2"
                      style={{
                        fontSize: "27px",
                        marginLeft: "13px",
                        borderRadius: "5px",
                      }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-3 overflow-hidden mt-lg-block mt-md-4 mt-5"
              style={{
                width: "250px",
                height: "360px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <img
                src={Noor}
                alt=""
                style={{
                  borderRadius: "100px",
                  marginLeft: "40px",
                  marginTop: "50px",
                  width: "140px",
                }}
              />
              <h4
                className="d-flex justify-content-center mt-4"
                style={{ fontWeight: "bolder" }}
              >
                Noor Khokhar
              </h4>
              <p
                style={{ color: "dimgray" }}
                className="d-flex justify-content-center"
              >
                Full Stack AI Developer
              </p>
              <div style={{ marginTop: "45px" }}>
                <div
                  className="hover-class d-inline-flex d-lg-flex-none"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.203)",
                    height: "50px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    width: "50px",
                    marginRight: "20px",
                    marginLeft: "15px",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/"
                    className="d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fab fa-linkedin mt-2"
                      style={{
                        fontSize: "27px",
                        borderRadius: "5px",
                        marginLeft: "13px",
                      }}
                    ></i>
                  </a>
                </div>
                
                <div
                  className="hover-class d-inline-flex d-lg-flex-none"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.203)",
                    height: "50px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    width: "50px",
                  }}
                >
                  <a
                    href="https://github.com/noorkhokhar99/"
                    className="d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fab fa-github mt-2"
                      style={{
                        fontSize: "27px",
                        marginLeft: "13px",
                        borderRadius: "5px",
                      }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-3 overflow-hidden mt-lg-block mt-md-4 mt-5"
              style={{
                width: "250px",
                height: "360px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <img
                src={Adil}
                alt=""
                style={{
                  borderRadius: "100px",
                  marginLeft: "40px",
                  marginTop: "50px",
                  width: "140px",
                }}
              />
              <h4
                className="d-flex justify-content-center mt-4"
                style={{ fontWeight: "bolder" }}
              >
                Adil Memon
              </h4>
              <p
                style={{ color: "dimgray" }}
                className="d-flex justify-content-center"
              >
                Embedded Systems Engineer
              </p>
              <div style={{ marginTop: "45px" }}>
                <div
                  className="hover-class d-inline-flex d-lg-flex-none"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.203)",
                    height: "50px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    width: "50px",
                    marginRight: "20px",
                    marginLeft: "15px",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/aadil-memon-b6707214b/"
                    className="d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fab fa-linkedin mt-2"
                      style={{
                        fontSize: "27px",
                        borderRadius: "5px",
                        marginLeft: "13px",
                      }}
                    ></i>
                  </a>
                </div>
                
                <div
                  className="hover-class d-inline-flex d-lg-flex-none"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.203)",
                    height: "50px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    width: "50px",
                  }}
                >
                  <a
                    href="https://github.com/NewHorizons123"
                    className="d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fab fa-github mt-2"
                      style={{
                        fontSize: "27px",
                        marginLeft: "13px",
                        borderRadius: "5px",
                      }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-3 overflow-hidden mt-lg-block mt-md-4 mt-5"
              style={{
                width: "250px",
                height: "360px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <img
                src={Asia}
                alt=""
                style={{
                  borderRadius: "100px",
                  marginLeft: "40px",
                  marginTop: "50px",
                  width: "140px",
                }}
              />
              <h4
                className="d-flex justify-content-center mt-4"
                style={{ fontWeight: "bolder" }}
              >
                Asia Hassan
              </h4>
              <p
                style={{ color: "dimgray" }}
                className="d-flex justify-content-center"
              >
                FrontEnd Developer
              </p>
              <div style={{ marginTop: "45px" }}>
                <div
                  className="hover-class d-inline-flex d-lg-flex-none"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.203)",
                    height: "50px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    width: "50px",
                    marginRight: "20px",
                    marginLeft: "15px",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/asia-hassan/"
                    className="d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fab fa-linkedin mt-2"
                      style={{
                        fontSize: "27px",
                        borderRadius: "5px",
                        marginLeft: "13px",
                      }}
                    ></i>
                  </a>
                </div>

                <div
                  className="hover-class d-inline-flex d-lg-flex-none"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.203)",
                    height: "50px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    width: "50px",
                  }}
                >
                  <a
                    href="#"
                    className="d-flex justify-content-center"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <i
                      className="fab fa-github mt-2"
                      style={{
                        fontSize: "27px",
                        marginLeft: "13px",
                        borderRadius: "5px",
                      }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
