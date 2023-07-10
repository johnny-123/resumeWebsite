import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const AboutComponent = () => {
  return (
    <main>
      <div className="my-info">
        <img src="" alt="大頭照" />
        <div className="text">
          <h2>王佑齊 Johnny Wang</h2>
          <br />
          我是王佑齊，畢業於逢甲大學資訊工程學系，興趣是網頁程式的設計，在此領域除大學課程外，也透過自學、線上課程不斷精進自身能力，在大學時期以及閒暇之餘也會實作Side
          Project保持自身程式邏輯的實力。此外也非常願意學習各種新知識，喜歡解決各類問題的成就感，期望能找到一份和興趣相符之工作，並在此之上積極發展。
          <br />
          <a className="phone" href="tel:0970969800">
            0970969800
          </a>
          <br />
          <a className="email" href="mailto:johnnyyo603@gmail.com">
            johnnyyo603@gmail.com
          </a>
        </div>
      </div>
      <h2>技能 Skills</h2>
      <div className="my-skills">
        <div className="each-skill">
          <h3>Program</h3>
          <ul>
            <li>C</li>
            <li>JAVA</li>
            <li>Html/CSS</li>
            <li>Html5</li>
            <li>JavaScript</li>
            <li>AJAX</li>
          </ul>
        </div>
        <div className="each-skill">
          <h3>Databse</h3>
          <ul>
            <li>MySQL</li>
            <li>MangoDB</li>
          </ul>
        </div>
        <div className="each-skill">
          <h3>IDE</h3>
          <ul>
            <li>Eclipse</li>
            <li>VS code</li>
          </ul>
        </div>
        <div className="each-skill">
          <h3>Frameworks</h3>
          <ul>
            <li>NodeJs-express</li>
            <li>MVC</li>
          </ul>
        </div>
        <div className="each-skill">
          <h3>Version Control</h3>
          <ul>
            <li>Git/Github</li>
          </ul>
        </div>
      </div>

      <div className="edu">
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} />
          教育 Education
        </h2>
        <h3>
          逢甲大學 資訊工程學系 <small>2018年9月-2022年6月</small>
        </h3>
        <p>
          大學的科系選擇是人生重要的分水嶺，打算以程式設計當我一輩子志願的想法便從此開始。在寫程式的過程中，除了可以訓練頭腦、邏輯能力外，更重要的是能使我有條有理的找到解決問題的辦法，這對我來說具有莫大的成就感。
          <br />
          由於在此之前沒有任何程式經驗，在學期間積極地在課業上提高成績，在大二上學期衝進了系排的前2%。並在物件導向實作課程以及資料庫系統取得了滿分成績。就學期間也參加校內舉辦的深碗專題競賽，專題也獲得佳作的獎項。
        </p>
      </div>

      <div className="exp">
        <h2>
          <FontAwesomeIcon icon={faBriefcase} />
          經歷 Experiences
        </h2>
        <h3>
          大學畢業-至今 家教與自我進修 <small>2022年6月-2023年6月</small>
        </h3>
        <p>
          擔任基礎程式設計的家教，主要面向是無程式基礎的人，教學內容也以最基礎的程式撰寫為主，使用的程式語言為C語言。課程架構以簡單的C語言題目練習訓練學生邏輯能力和熟悉語法為主，在此之上若該學生狀況較為良好，也會根據不同的情況補充各種資料結構以及演算法，並以C語言實作，讓沒有基礎的學生都能熟悉如何撰寫一門程式語言，以及如何運用所學解決不同的程式問題。
        </p>
      </div>

      <div className="artist"></div>
    </main>
  );
};

export default AboutComponent;
