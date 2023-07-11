import React from "react";
import pj1 from "../images/udemyPJ1.JPG";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const UdemyComponent = () => {
  return (
    <div className="udemy-container">
      <ul>
        <li>
          <h2>前端網頁開發-HTML&CSS</h2>
          <div className="card-container">
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="圍棋資訊網" />
              <div className="card-body">
                <h5 className="card-title">圍棋資訊網</h5>
                <p clasNames="card-text">
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

              {/* <ul class="list-group list-group-flush">*/}
              {/* <li class="list-group-item">更新資訊</li> */}

              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                更新資訊
              </button>

              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      Close Close Close Close Close Close Close Close Close
                      Close Close Close Close Close Close
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* </ul> */}
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="日本旅遊網站" />
              <div className="card-body">
                <h5 className="card-title">日本旅遊網站</h5>
                <p clasNames="card-text">
                  熟練前端排版、切版，並深刻考慮RWD，利用flex排版以及media
                  query解決專案問題。
                </p>
                <a
                  href="../../project2/index.html"
                  className="btn btn-primary"
                  target="_blank"
                >
                  跳至該專案頁面
                </a>
              </div>

              {/* <ul class="list-group list-group-flush">*/}
              {/* <li class="list-group-item">更新資訊</li> */}

              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                更新資訊
              </button>

              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      Close Close Close Close Close Close Close Close Close
                      Close Close Close Close Close Close
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* </ul> */}
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="自我介紹網站" />
              <div className="card-body">
                <h5 className="card-title">自我介紹網站</h5>
                <p clasNames="card-text">
                  熟悉前端外部插件如boostrap、cdn.js 中的fontawsome等等。
                </p>
                <a
                  href="../../project3/index.html"
                  className="btn btn-primary"
                  target="_blank"
                >
                  跳至該專案頁面
                </a>
              </div>

              {/* <ul class="list-group list-group-flush">*/}
              {/* <li class="list-group-item">更新資訊</li> */}

              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                更新資訊
              </button>

              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      Close Close Close Close Close Close Close Close Close
                      Close Close Close Close Close Close
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* </ul> */}
            </div>
            {/* <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="圍棋資訊網" />
              <div className="card-body">
                <h5 className="card-title">圍棋資訊網</h5>
                <p clasNames="card-text">
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

              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                更新資訊
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      Close Close Close Close Close Close Close Close Close
                      Close Close Close Close Close Close
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="圍棋資訊網" />
              <div className="card-body">
                <h5 className="card-title">圍棋資訊網</h5>
                <p clasNames="card-text">
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

              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                更新資訊
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      Close Close Close Close Close Close Close Close Close
                      Close Close Close Close Close Close
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </li>
        <li>
          <h2>JavaScript網頁小遊戲</h2>
          <div className="card-container">
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="圍棋資訊網" />
              <div className="card-body">
                <h5 className="card-title">圍棋資訊網</h5>
                <p clasNames="card-text">
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

              {/* <ul class="list-group list-group-flush">*/}
              {/* <li class="list-group-item">更新資訊</li> */}

              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                更新資訊
              </button>

              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      Close Close Close Close Close Close Close Close Close
                      Close Close Close Close Close Close
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* </ul> */}
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="圍棋資訊網" />
              <div className="card-body">
                <h5 className="card-title">圍棋資訊網</h5>
                <p clasNames="card-text">
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

              {/* <ul class="list-group list-group-flush">*/}
              {/* <li class="list-group-item">更新資訊</li> */}

              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                更新資訊
              </button>

              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      Close Close Close Close Close Close Close Close Close
                      Close Close Close Close Close Close
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* </ul> */}
            </div>
          </div>
        </li>
        <li>
          <h2>後端API開發以及全端網頁開發</h2>
          <div className="card-container">
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="圍棋資訊網" />
              <div className="card-body">
                <h5 className="card-title">圍棋資訊網</h5>
                <p clasNames="card-text">
                  利用該專題熟悉HTML元素、屬性之運用，並搭配基礎的CSS排版美化介面。
                  利用該專題熟悉HTML元素、屬性之運用，並搭配基礎的CSS排版美化介面。
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

              {/* <ul class="list-group list-group-flush">*/}
              {/* <li class="list-group-item">更新資訊</li> */}

              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                更新資訊
              </button>

              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      Close Close Close Close Close Close Close Close Close
                      Close Close Close Close Close Close
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* </ul> */}
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="圍棋資訊網" />
              <div className="card-body">
                <h5 className="card-title">圍棋資訊網</h5>
                <p clasNames="card-text">
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

              {/* <ul class="list-group list-group-flush">*/}
              {/* <li class="list-group-item">更新資訊</li> */}

              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                更新資訊
              </button>

              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      Close Close Close Close Close Close Close Close Close
                      Close Close Close Close Close Close
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* </ul> */}
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={pj1} className="card-img-top" alt="圍棋資訊網" />
              <div className="card-body">
                <h5 className="card-title">圍棋資訊網</h5>
                <p clasNames="card-text">
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

              {/* <ul class="list-group list-group-flush">*/}
              {/* <li class="list-group-item">更新資訊</li> */}

              {/* 更新資訊按鈕 */}
              <button
                type="button"
                className="btn btn-light"
                style={{ borderRadius: "0" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                更新資訊
              </button>

              {/* 更新資訊彈出視窗 */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      Close Close Close Close Close Close Close Close Close
                      Close Close Close Close Close Close
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* </ul> */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UdemyComponent;
