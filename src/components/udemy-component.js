import React, { useState, useEffect } from "react";
import pj1 from "../images/udemyPJ1.JPG";
import pj2 from "../images/udemyPJ2.JPG";
import pj3 from "../images/udemyPJ3.JPG";
import pj4 from "../images/udemyPJ4.JPG";
import pj5 from "../images/udemyPJ5.JPG";
import pj6 from "../images/udemyPJ6.JPG";
import pj7 from "../images/udemyPJ7.JPG";
import pj8 from "../images/udemyPJ8.JPG";
import pj9 from "../images/udemyPJ9.JPG";

const UdemyComponent = () => {
  let serverAlert = function () {
    window.alert("即將跳轉到私人網站頁面，請確認該網站伺服器已經開啟!");
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [desktopLimit, setDesktopLimit] = useState(false);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 960) {
      setDesktopLimit(true);
    } else {
      setDesktopLimit(false);
    }
  }, [windowWidth]);
  return (
    <div className="udemy-container">
      <ul>
        <li>
          <h2>前端網頁開發-HTML&CSS</h2>
          <div className="card-container">
            {/* Project1圍棋資訊網 */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="圍棋資訊網" />
              <div className="card-body">
                <h5 className="card-title">圍棋資訊網</h5>
                <p className="card-text">
                  利用該專題熟悉HTML元素、屬性之運用，並搭配基礎的CSS排版美化介面。
                </p>
                <a
                  href="../../project1/index.html"
                  className="btn btn-primary"
                  target="_blank"
                >
                  跳至該專案頁面
                </a>
              </div>
              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                更新資訊
              </button>
              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal1"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        更新資訊
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">1.新增字體選擇功能。</div>
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
            {/* Project2日本旅遊網 */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj2} className="card-img-top" alt="日本旅遊網站" />
              <div className="card-body">
                <h5 className="card-title">日本旅遊網站</h5>
                <p className="card-text">
                  熟練前端排版、切版，並考慮整體版面RWD，利用flex排版以及media
                  query解決專案問題。使用簡單js語法去達到圖片自動輪播效果。
                </p>
                <a
                  href="../../project2/index.html"
                  className="btn btn-primary"
                  target="_blank"
                >
                  跳至該專案頁面
                </a>
              </div>
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                更新資訊
              </button>
              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal2"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        更新資訊
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      1.修復圖片輪播功能無法正常運作之bug。
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
            {/* Project3自我介紹網站 */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj3} className="card-img-top" alt="自我介紹網站" />
              <div className="card-body">
                <h5 className="card-title">自我介紹網站</h5>
                <p className="card-text">
                  熟悉前端外部插件如boostrap、cdn.js中的fontawsome以及相關動畫效果等等。
                </p>
                <a
                  href="../../project3/index.html"
                  className="btn btn-primary"
                  target="_blank"
                >
                  跳至該專案頁面
                </a>
              </div>
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                更新資訊
              </button>
              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal3"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        更新資訊
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      1.將文本內容以及部分排版優化。
                      <br />
                      2.RWD功能優化，現在在中、小尺寸螢幕將會有更好的UI體驗。
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
        </li>
        <li>
          <h2>JavaScript-一頁式網站</h2>
          <div className="card-container">
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj4} className="card-img-top" alt="成績計算網站" />
              <div className="card-body">
                <h5 className="card-title">成績計算網站</h5>
                <p className="card-text">
                  利用JavaScript控制網頁物件，了解DOM的運作方法以及實作應用方式。
                </p>
                {desktopLimit && (
                  <a
                    href="../../project4/index.html"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    跳至該專案頁面
                  </a>
                )}
                {!desktopLimit && (
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      window.alert(
                        "請使用桌機，且確保網頁寬度大於960px，以獲得最佳的用戶體驗!"
                      );
                    }}
                  >
                    裝置不符，點擊觀看詳情
                  </button>
                )}
              </div>
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                更新資訊
              </button>
              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal4"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        更新資訊
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      1.修復若不給任何資料，點擊排序表格會全數消失，造成使用者疑惑的bug。
                      <br />
                      2.將成績欄位設為必填，修復若該欄位為空，排序結果將會不固定的bug。
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
        </li>
        <li>
          <h2>JavaScript網頁小遊戲</h2>
          <div className="card-container">
            {/* 貪食蛇小遊戲 */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj5} className="card-img-top" alt="貪食蛇小遊戲" />
              <div className="card-body">
                <h5 className="card-title">貪食蛇小遊戲</h5>
                <p className="card-text">
                  綜合HTML+CSS+JavaScript的一網頁小遊戲，並能更熟悉JavaScript進階的事件、函式、類別運用方式。
                </p>
                {desktopLimit && (
                  <a
                    href="../../project5/index.html"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    跳至該專案頁面
                  </a>
                )}
                {!desktopLimit && (
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      window.alert(
                        "請使用桌機，且確保網頁寬度大於960px，以獲得最佳的用戶體驗!"
                      );
                    }}
                  >
                    裝置不符，點擊觀看詳情
                  </button>
                )}
              </div>
              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
              >
                更新資訊
              </button>
              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal5"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        更新資訊
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      1. 增加得分越高速度將會增快的機制。
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
            {/* 打磚塊小遊戲 */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj6} className="card-img-top" alt="打磚塊小遊戲" />
              <div className="card-body">
                <h5 className="card-title">打磚塊小遊戲</h5>
                <p className="card-text">
                  利用canvas做出的小遊戲，用以熟悉JavaScript進階的事件、函式、物件類別運用方式，並且能對網頁物件、canvas內容做出各種想要的操作。
                </p>
                {desktopLimit && (
                  <a
                    href="../../project6/index.html"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    跳至該專案頁面
                  </a>
                )}
                {!desktopLimit && (
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      window.alert(
                        "請使用桌機，且確保網頁寬度大於960px，以獲得最佳的用戶體驗!"
                      );
                    }}
                  >
                    裝置不符，點擊觀看詳情
                  </button>
                )}
              </div>
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
              >
                更新資訊
              </button>
              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal6"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      1.增加背景音樂系統。
                      <br />
                      2.修復彈跳球碰撞邊界時可能卡住的bug。
                      <br />
                      3.優化彈跳球碰撞物件的設定，使得整體畫面看上去更加順暢。
                      <br />
                      4.優化磚塊模組，並使磚塊不會在重疊的位置出現。
                      <br />
                      5.增加計時系統。
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
        </li>
        <li>
          <h2>後端API開發以及全端網頁開發</h2>
          <div className="card-container">
            {/* Google登入介面 */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj7} className="card-img-top" alt="Google登入介面" />
              <div className="card-body">
                <h5 className="card-title">Google登入介面</h5>
                <p className="card-text">
                  後端主要功能為利用passport套件實作可利用Google帳號登入的，具OAuth2.0的後端系統。此外也包含本地註冊登入功能。資料庫部份為了快速建置使用mongoDB。
                  <br />
                  前端部分則利用EJS做Express搭配的樣板引擎，讓該side
                  project成為一個具有本地註冊以及google帳號註冊的一登入系統，且符合MVC(Model–View–Controller)design
                  pattern。
                </p>
                <a
                  className="btn btn-primary"
                  target="_blank"
                  href="http://localhost:8080/api/googleProject"
                  onClick={serverAlert}
                >
                  跳至該專案頁面
                </a>
              </div>
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal7"
              >
                更新資訊
              </button>
              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal7"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        更新資訊
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">目前暫無更新資訊</div>
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
            {/* 圖片網站 */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj8} className="card-img-top" alt="圖片網站" />
              <div className="card-body">
                <h5 className="card-title">圖片網站</h5>
                <p className="card-text">
                  以react框架開發前端網頁，並透過連接免費開源網站Pexels提供的API，加以連接操作，產出一自製圖片網站。
                </p>
                <a
                  href="http://localhost:3001/"
                  className="btn btn-primary"
                  target="_blank"
                  onClick={serverAlert}
                >
                  跳至該專案頁面
                </a>
              </div>
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal8"
              >
                更新資訊
              </button>
              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal8"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        更新資訊
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      1.增加能連接到Pexels網站下載圖片之功能。
                      <br />
                      2.新增簡單"about"介面內容
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
            {/* MERN課程註冊系統 */}
            <div className="card" style={{ width: "22rem" }}>
              <img src={pj9} className="card-img-top" alt="圍棋資訊網" />
              <div className="card-body">
                <h5 className="card-title">MERN-課程註冊網站</h5>
                <p className="card-text">
                  一個以MERN為架構，並使用Stateless
                  Authentication作為驗證使用者的方式，創建一由教授、學生兩種不同身分操控，可以依身分類別不同來選擇編輯新課程、註冊課程等操作的課程註冊網站系統。
                </p>
                <a
                  href="http://localhost:3002/"
                  className="btn btn-primary"
                  target="_blank"
                  onClick={serverAlert}
                >
                  跳至該專案頁面
                </a>
              </div>
              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal9"
              >
                更新資訊
              </button>

              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal9"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        更新資訊
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      1.增加講師可以修改編輯課程之功能和前端頁面(patch)。
                      <br />
                      2.增加講師可以刪除課程之功能和前端頁面(delete)。
                      <br />
                      3.優化查詢功能，讓學生在查詢課程時能使用關鍵字就查詢到結果。
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
        </li>
      </ul>
    </div>
  );
};

export default UdemyComponent;
