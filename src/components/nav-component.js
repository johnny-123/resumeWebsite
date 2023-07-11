import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpg";

const Nav = () => {
  let [currentPage, setCurrentPage] = useState(1);
  const choosePage = (page) => {
    setCurrentPage(page);
  };
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
            {currentPage == 1 && (
              <Link
                to="/"
                onClick={() => {
                  choosePage(1);
                }}
                className="current-page"
              >
                首頁
              </Link>
            )}
            {currentPage != 1 && (
              <Link
                to="/"
                onClick={() => {
                  choosePage(1);
                }}
              >
                首頁
              </Link>
            )}
          </li>
          <li>
            {currentPage == 2 && (
              <Link
                to="/about"
                onClick={() => {
                  choosePage(2);
                }}
                className="current-page"
              >
                <FontAwesomeIcon icon={faUser} /> 關於Johnny
              </Link>
            )}
            {currentPage != 2 && (
              <Link
                to="/about"
                onClick={() => {
                  choosePage(2);
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
            {currentPage == 3 && (
              <Link
                to="/udemy"
                onClick={() => {
                  choosePage(3);
                }}
                className="current-page"
              >
                <FontAwesomeIcon icon={faLaptopCode} /> udemy課程
              </Link>
            )}
            {currentPage != 3 && (
              <Link
                to="/udemy"
                onClick={() => {
                  choosePage(3);
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
