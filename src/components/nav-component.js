import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpg";

const Nav = () => {
  let [currentPage, setCurrentPage] = useState("");
  const choosePage = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
  useEffect(() => {
    setCurrentPage(window.location.href);
  }, []);
  window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    if (window.scrollY == 0) {
      header.style.boxShadow = "";
    } else {
      header.style.boxShadow = "0 10px 6px -6px #777";
    }
  });
  return (
    <header>
      <section className="logo">
        <img src={logo} alt="網站logo" />
        <h1>Johnny Wang</h1>
      </section>
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
                首頁
              </Link>
            )}
            {currentPage !== "http://localhost:3000/" && (
              <Link
                to="/"
                onClick={() => {
                  choosePage("http://localhost:3000/");
                }}
              >
                首頁
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
          {/* <li>
              <Link to="/udemy">
                <FontAwesomeIcon icon={faBookOpen} /> 2023家教課程
              </Link>
            </li> */}
          <li>
            {currentPage === "http://localhost:3000/udemy" && (
              <Link
                to="/udemy"
                onClick={() => {
                  choosePage("http://localhost:3000/udemy");
                }}
                className="current-page"
              >
                <FontAwesomeIcon icon={faLaptopCode} /> udemy課程
              </Link>
            )}
            {currentPage !== "http://localhost:3000/udemy" && (
              <Link
                to="/udemy"
                onClick={() => {
                  choosePage("http://localhost:3000/udemy");
                }}
              >
                <FontAwesomeIcon icon={faLaptopCode} /> udemy課程
              </Link>
            )}
          </li>
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
    </header>
  );
};

export default Nav;
