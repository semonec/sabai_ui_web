import * as React from "react";
import "./styles.css";

export const HeaderArea: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header-title">싸바이서비스</div>
      <div className="header-login">
        <div>로그인</div>
      </div>
    </div>
  );
};
