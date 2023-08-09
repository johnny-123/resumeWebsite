import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <h3>關於網站</h3>
          <p>網站地圖</p>
          <p>
            網站概要請看<a>該鏈結</a>
          </p>
          <p>最後更新日期:</p>
        </li>
        <li>
          <h3>關於作者</h3>

          <p>王佑齊 Johnny Wang</p>
          <p>逢甲大學資訊工程學系畢業</p>
          <p>
            詳細資訊<a>點此看履歷</a>
          </p>
        </li>
        <li>
          <h3>聯絡方式</h3>
          <p>電話 0970969800</p>
          <p>位置 臺中市西區民權路</p>
          <p>Mail johnny8906030714@gmail.com</p>
        </li>
      </ul>
      <div className="logo-icon">
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ color: " white", fontSize: "3.5rem" }}
        />
        <FontAwesomeIcon
          icon={faGoogle}
          style={{ color: " white", fontSize: "3.5rem" }}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: " white", fontSize: "3.5rem" }}
        />
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: " white", fontSize: "3.5rem" }}
        />
      </div>
    </div>
  );
};

export default Footer;
