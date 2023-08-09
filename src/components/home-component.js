import React from "react";
import homepageImg from "../images/homepage_img.jpg";

const HomepageComponent = () => {
  return (
    <div className="home">
      <div className="desc">
        <div className="motto">
          <p className="one">你怎麼處理失敗</p>
          <br /> <p className="two">決定你怎麼取得成功</p>
        </div>
        <div className="desc-text">
          我是王佑齊
          <br />
          畢業於逢甲大學資訊工程學系
          <br />
          我熱衷於解決生活上所需面對的問題，也將此精神帶到程式設計上，並且在工作之餘喜愛學習新的知識，也不畏懼新的挑戰。專長為全端網頁的設計與製作。
        </div>
      </div>
      <div className="border-img">
        <img src={homepageImg} alt="pexel圖片" />
      </div>
    </div>
  );
};

export default HomepageComponent;
