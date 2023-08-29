import React from "react";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faStar,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import htmlIcon from "../ICONS/icons8-html-5.svg";
import cssIcon from "../ICONS/icons8-css3.svg";
import javaScriptlIcon from "../ICONS/icons8-javascript.svg";
import reactIcon from "../ICONS/icons8-react-native.svg";
import nodeJslIcon from "../ICONS/Node.js_logo.svg";
import fcuLogo from "../images/fcu_logo.jpg";
import fcuRank from "../images/fcu_rank.jpg";
import fcuProject from "../images/fcu_project.jpg";
import myPicture from "../images/my_picture.jpg";

const AboutComponent = () => {
  //Skill icon hover event(screen>1024)
  const iconEvent = function (move, icon) {
    let target;
    let target_star;
    if (icon === "html") {
      target = document.querySelector(".html5");
      target_star = document.querySelector(".html5 .gold-star");
    } else if (icon === "css") {
      target = document.querySelector(".css3");
      target_star = document.querySelector(".css3 .gold-star");
    } else if (icon === "javaScript") {
      target = document.querySelector(".js");
      target_star = document.querySelector(".js .gold-star");
    } else if (icon === "react") {
      target = document.querySelector(".react");
      target_star = document.querySelector(".react .gold-star");
    } else if (icon === "NodeJs") {
      target = document.querySelector(".nodeJs");
      target_star = document.querySelector(".nodeJs .gold-star");
    }
    if (move === "over") {
      target_star.style.display = "inline-block";
      animateOver(target, target_star);
    } else if (move === "out") {
      animateOut(target, target_star);
      target_star.style.display = "none";
    }

    function animateOver(t, ts) {
      gsap.to(t, 0.15, {
        fontWeight: "600",
        listStyleType: "none",
        color: "white",
        backgroundColor: "rgb(190, 218, 229)",
        padding: "0.25rem",
        margin: "0.15rem",
        borderRadius: "5%",
        scale: 1.15,
      });
      gsap.fromTo(ts, 0.15, { opacity: "0%" }, { opacity: "100%" });
    }
    function animateOut(t, ts) {
      gsap.to(t, 0.15, {
        fontWeight: "300",
        listStyleType: "disc",
        color: "black",
        backgroundColor: "white",
        padding: "0rem",
        margin: "0rem",
        borderRadius: "0%",
        scale: 1.0,
      });
      gsap.fromTo(ts, 0.15, { opacity: "100%" }, { opacity: "0%" });
    }
  };

  // skillTurn play in turn(screen<480)
  let [skillTurn, setSkillTurn] = useState(0);
  useEffect(() => {
    setSkillTurn(0);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const skillLeft = function () {
    if (skillTurn === 0) {
      setSkillTurn(4);
    } else {
      setSkillTurn(skillTurn - 1);
    }
  };
  const skillRight = function () {
    if (skillTurn === 4) {
      setSkillTurn(0);
    } else {
      setSkillTurn(skillTurn + 1);
    }
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    let myskill = document.querySelector(".my-skills");
    for (let i = 0; i < 5; i++) {
      if (i === skillTurn) {
        myskill.children[i].style.display = "block";
      } else {
        myskill.children[i].style.display = "none";
      }
    }
  }, [skillTurn]);
  useEffect(() => {
    let myskill = document.querySelector(".my-skills");
    if (windowWidth > 960) {
      for (let i = 0; i < 5; i++) {
        myskill.children[i].style.display = "block";
      }
    } else {
      for (let i = 0; i < 5; i++) {
        if (i === skillTurn) {
          myskill.children[i].style.display = "block";
        } else {
          myskill.children[i].style.display = "none";
        }
      }
    }
  }, [windowWidth, skillTurn]);

  // edu img filter design
  const filterEvent = function (action, fcuItem) {
    let item;
    if (fcuItem === "logo") {
      item = document.querySelector(".circle-logo");
    } else if (fcuItem === "rank") {
      item = document.querySelector(".circle-rank");
    } else if (fcuItem === "project") {
      item = document.querySelector(".circle-project");
    }
    console.log(item);
    console.log(item);
    if (action === "enter") {
      gsap.to(item.querySelector(".filter"), 0.5, {
        top: "-150px",
      });
    } else if (action === "leave") {
      gsap.to(item.querySelector(".filter"), 0.5, {
        top: "0px",
      });
    }
  };

  return (
    <div className="about">
      <div className="my-info">
        <div className="my-picture">
          <img src={myPicture} alt="大頭照" />
        </div>
        <div className="my-info-text">
          <h2>王佑齊 Johnny Wang</h2>
          <p>
            我是王佑齊，畢業於逢甲大學資訊工程學系，興趣是網頁程式的設計，在此領域除大學課程外，也透過自學、線上課程不斷精進自身能力，在大學時期以及閒暇之餘也會實作Side
            Project保持自身程式邏輯的實力。此外也非常願意學習各種新知識，喜歡解決各類問題的成就感，期望能找到一份和興趣相符之工作，並在此之上積極發展。
          </p>
          <div className="contact">
            <FontAwesomeIcon icon={faMobileScreenButton} />
            <a className="phone" href="tel:+886-970969800">
              0970-969-800
            </a>
            <br />
            <FontAwesomeIcon icon={faEnvelope} />
            <a className="email" href="mailto:johnnyyo603@gmail.com">
              johnnyyo603@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h2>技能 Skills</h2>
        {/* skill text*/}
        <div className="my-skills">
          <div className="program-skill each-skill">
            <h3>Program</h3>
            <ul>
              <li>C</li>
              <li>JAVA</li>
              <li className="css3">
                <FontAwesomeIcon
                  icon={faStar}
                  className="gold-star"
                  style={{ display: "none" }}
                />
                Html/CSS
                <FontAwesomeIcon
                  icon={faStar}
                  className="css-gold-star"
                  style={{ paddingLeft: "0.5rem", color: "rgb(251, 255, 4)" }}
                />
              </li>
              <li className="html5">
                <FontAwesomeIcon
                  icon={faStar}
                  className="gold-star"
                  style={{ display: "none" }}
                />
                Html5
                <FontAwesomeIcon
                  icon={faStar}
                  className="css-gold-star"
                  style={{ paddingLeft: "0.5rem", color: "rgb(251, 255, 4)" }}
                />
              </li>
              <li className="js">
                <FontAwesomeIcon
                  icon={faStar}
                  className="gold-star"
                  style={{ display: "none" }}
                />
                JavaScript
                <FontAwesomeIcon
                  icon={faStar}
                  className="css-gold-star"
                  style={{ paddingLeft: "0.5rem", color: "rgb(251, 255, 4)" }}
                />
              </li>
              <li>AJAX</li>
            </ul>
          </div>
          <div className="database-skill each-skill">
            <h3>Databse</h3>
            <ul>
              <li>MySQL</li>
              <li>MangoDB</li>
            </ul>
          </div>
          <div className="IDE-skill each-skill">
            <h3>IDE</h3>
            <ul>
              <li>Eclipse</li>
              <li>VS code</li>
            </ul>
          </div>
          <div className="each-skill frameworks-skill">
            <h3>Frameworks</h3>
            <ul>
              <li className="react">
                <FontAwesomeIcon
                  icon={faStar}
                  className="gold-star"
                  style={{ display: "none" }}
                />
                React
                <FontAwesomeIcon
                  icon={faStar}
                  className="css-gold-star"
                  style={{ paddingLeft: "0.5rem", color: "rgb(251, 255, 4)" }}
                />
              </li>
              <li className="nodeJs">
                <FontAwesomeIcon
                  icon={faStar}
                  className="gold-star"
                  style={{ display: "none" }}
                />
                NodeJs-express
                <FontAwesomeIcon
                  icon={faStar}
                  className="css-gold-star"
                  style={{ paddingLeft: "0.5rem", color: "rgb(251, 255, 4)" }}
                />
              </li>
              <li>MVC</li>
            </ul>
          </div>
          <div className="each-skill version-skill">
            <h3>Version Control</h3>
            <ul>
              <li>Git/Github</li>
            </ul>
          </div>
        </div>
        {/* arrow buuton */}
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="skill-arrow-button-left"
          onClick={skillLeft}
        />
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="skill-arrow-button-right"
          onClick={skillRight}
        />
        {/* skill logo and  specialization*/}
        <div className="skills-logo">
          <div className="specialization">
            <FontAwesomeIcon icon={faStar} className="gold-star" />
            <small>specialization</small>
          </div>
          <ul>
            <li>
              <img
                src={htmlIcon}
                alt="html5_logo"
                onMouseEnter={() => {
                  iconEvent("over", "html");
                }}
                onMouseOut={() => {
                  iconEvent("out", "html");
                }}
              />
            </li>
            <li>
              <img
                src={cssIcon}
                alt="css_logo"
                onMouseOver={() => {
                  iconEvent("over", "css");
                }}
                onMouseOut={() => {
                  iconEvent("out", "css");
                }}
              />
            </li>
            <li>
              <img
                src={javaScriptlIcon}
                alt="javaScript_logo"
                onMouseOver={() => {
                  iconEvent("over", "javaScript");
                }}
                onMouseOut={() => {
                  iconEvent("out", "javaScript");
                }}
              />
            </li>
            <li>
              <img
                src={reactIcon}
                alt="react_logo"
                onMouseOver={() => {
                  iconEvent("over", "react");
                }}
                onMouseOut={() => {
                  iconEvent("out", "react");
                }}
              />
            </li>
            <li>
              <img
                src={nodeJslIcon}
                alt="NodeJs_logo"
                style={{ height: "48px" }}
                onMouseOver={() => {
                  iconEvent("over", "NodeJs");
                }}
                onMouseOut={() => {
                  iconEvent("out", "NodeJs");
                }}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="edu">
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} />
          教育 Education
        </h2>
        <div className="edu-content">
          <div className="edu-text">
            <div className="timeline-block">
              <h3>
                逢甲大學 資訊工程學系 <small>2018年9月-2022年6月</small>
              </h3>
              <p>
                大學的科系選擇是人生重要的分水嶺<small>[1]</small>
                ，打算以程式設計當我一輩子志願的想法便從此開始。在寫程式的過程中，除了可以訓練頭腦、邏輯能力外，更重要的是能使我有條有理的找到解決問題的辦法，這對我來說具有莫大的成就感。
              </p>
            </div>
            <div className="timeline-block">
              <h3>
                成績與專題競賽 <small>2019年2月-2020年1月</small>
              </h3>

              <p>
                於在此之前沒有任何程式經驗，在學期間積極地在課業上提高成績，在大二下學期衝進了系排的前2%
                <small>[2]</small>
                。並在物件導向實作課程以及資料庫系統取得了滿分成績。就學期間也參加校內舉辦的深碗專題競賽，專題也獲得佳作的獎項
                <small>[3]</small>。
              </p>
            </div>
          </div>
          <div className="edu-img">
            {/* <p className="edu-img-title">Click Image!</p> */}
            <div
              className="circle circle-logo"
              onMouseEnter={() => {
                filterEvent("enter", "logo");
              }}
              onMouseLeave={() => {
                filterEvent("leave", "logo");
              }}
            >
              <div className="filter">[1]</div>
              <img
                src={fcuLogo}
                alt="fcu_logo"
                className="fcu-logo"
                data-bs-toggle="modal"
                data-bs-target="#fcu-logo-img-large"
              />
              {/* 大圖片視窗 */}
              <div
                className="modal fade"
                id="fcu-logo-img-large"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-sm modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        圖片[1]
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src={fcuLogo}
                        alt="fcu_logo"
                        style={{ display: "block", margin: "0 auto" }}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        關閉
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="circle circle-rank"
              onMouseEnter={() => {
                filterEvent("enter", "rank");
              }}
              onMouseLeave={() => {
                filterEvent("leave", "rank");
              }}
            >
              <div className="filter">[2]</div>
              <img
                src={fcuRank}
                alt="fcu_rank"
                className="fcu-rank"
                data-bs-toggle="modal"
                data-bs-target="#fcu-rank-img-large"
              />
              {/* 大圖片視窗 */}
              <div
                className="modal fade"
                id="fcu-rank-img-large"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        圖片[2]
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src={fcuRank}
                        alt="fcu_rank"
                        style={{ display: "block", margin: "0 auto" }}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        關閉
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="circle circle-project"
              onMouseEnter={() => {
                filterEvent("enter", "project");
              }}
              onMouseLeave={() => {
                filterEvent("leave", "project");
              }}
            >
              <div className="filter">[3]</div>
              <img
                src={fcuProject}
                alt="fcu_project"
                className="fcu-project"
                data-bs-toggle="modal"
                data-bs-target="#fcu-project-img-large"
              />
              {/* 大圖片視窗 */}
              <div
                className="modal fade"
                id="fcu-project-img-large"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        圖片[3]
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src={fcuProject}
                        alt="fcu_project"
                        style={{ display: "block", margin: "0 auto" }}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        關閉
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="exp">
        <h2>
          <FontAwesomeIcon icon={faBriefcase} />
          經歷 Experiences
        </h2>
        <div className="timeline-block">
          <h3>
            大學畢業-至今 家教 <small>2022年6月-2023年6月</small>
          </h3>
          <p>
            擔任基礎程式設計的家教，主要面向是無程式基礎的人，教學內容也以最基礎的程式撰寫為主，使用的程式語言為C語言。課程架構以簡單的C語言題目練習訓練學生邏輯能力和熟悉語法為主，在此之上若該學生狀況較為良好，也會根據不同的情況補充各種資料結構以及演算法，並以C語言實作，讓沒有基礎的學生都能熟悉如何有系統的學習一程式語言，以及運用該語言所學解決不同的程式問題。
          </p>
        </div>
        <div className="timeline-block">
          <h3>
            大學畢業-至今 自我進修 <small>2022年6月-至今</small>
          </h3>
          <p>
            在休閒時間也利用各種線上課程提升自己程式設計方面的知識，並且積極製作side
            project以及優化之前系統以提升自身實作能力。目前以udemy的線上課程為主提升自己不同方面的程式能力，在udemy主修的課程以網頁全端設計為主，目前也在持續進修中。
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
