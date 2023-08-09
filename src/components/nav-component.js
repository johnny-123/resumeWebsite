import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faLaptopCode,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpg";
// next modify content
// import { faBookOpen,faFileLines,faBagShopping,faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  // currentPage Controller
  let [currentPage, setCurrentPage] = useState("");
  const choosePage = (page) => {
    setCurrentPage(page);
    if (windowWidth <= 960) {
      setBarsState("close");
      barsClick();
    }
  };

  // nav sticky style
  window.addEventListener("scroll", () => {
    let navbar = document.querySelector(".my-navbar");
    if (window.scrollY == 0) {
      navbar.style.boxShadow = "";
    } else {
      navbar.style.boxShadow = "0 10px 6px -6px #777";
    }
  });

  //bars Controller
  let [barsState, setBarsState] = useState("close");
  const barsClick = () => {
    if (barsState === "close") {
      document.querySelector(".bars").style.border =
        "3px solid rgb(241, 230, 109)";
      document.querySelector("ul").style.display = "flex";
      setBarsState("open");
    } else {
      document.querySelector(".bars").style.border =
        "1px solid rgba(94, 92, 96, 0.5)";
      document.querySelector("ul").style.display = "none";
      setBarsState("close");
    }
  };

  // rwd support
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    setCurrentPage(window.location.href);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth > 960) {
      document.querySelector("ul").style.display = "flex";
    } else {
      if (barsState === "close") {
        document.querySelector("ul").style.display = "none";
      }
    }
  }, [windowWidth]);

  return (
    <div className="my-navbar">
      <section className="logo">
        <img src={logo} alt="網站logo" />
        <h1>Johnny Wang</h1>
      </section>
      <div className="bars" onClick={barsClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav>
        <ul>
          <li>
            {currentPage === "http://localhost:3000/" && (
              <Link
                to="/"
                onClick={() => {
                  choosePage("http://localhost:3000/");
                }}
                className="current-page"
              >
                <FontAwesomeIcon icon={faHouse} /> 首頁
              </Link>
            )}
            {currentPage !== "http://localhost:3000/" && (
              <Link
                to="/"
                onClick={() => {
                  choosePage("http://localhost:3000/");
                }}
              >
                <FontAwesomeIcon icon={faHouse} /> 首頁
              </Link>
            )}
          </li>
          <li>
            {currentPage === "http://localhost:3000/about" && (
              <Link
                to="/about"
                onClick={() => {
                  choosePage("http://localhost:3000/about");
                }}
                className="current-page"
              >
                <FontAwesomeIcon icon={faUser} /> 關於Johnny
              </Link>
            )}
            {currentPage !== "http://localhost:3000/about" && (
              <Link
                to="/about"
                onClick={() => {
                  choosePage("http://localhost:3000/about");
                }}
              >
                <FontAwesomeIcon icon={faUser} /> 關於Johnny
              </Link>
            )}
          </li>

          <li>
            {currentPage === "http://localhost:3000/udemy" && (
              <Link
                to="/udemy"
                onClick={() => {
                  choosePage("http://localhost:3000/udemy");
                }}
                className="current-page"
              >
                <FontAwesomeIcon icon={faLaptopCode} /> udemy作品集
              </Link>
            )}
            {currentPage !== "http://localhost:3000/udemy" && (
              <Link
                to="/udemy"
                onClick={() => {
                  choosePage("http://localhost:3000/udemy");
                }}
              >
                <FontAwesomeIcon icon={faLaptopCode} /> udemy作品集
              </Link>
            )}
          </li>
          {/*next modify content*/}
          {/* <li>
              <Link to="/udemy">
                <FontAwesomeIcon icon={faBookOpen} /> 2023家教課程
              </Link>
            </li> */}
          {/* <li>
              <Link to="/pj1">
                <FontAwesomeIcon icon={faFileLines} /> 深碗專題專案
              </Link>
            </li> */}
          {/* <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faBagShopping} /> 電商平台專案
              </Link>
            </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
