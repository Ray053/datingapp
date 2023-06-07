import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

function landingPage() {
  return (
    <main>
      <div className="overlay"></div>
      <h2 className="logo">Logo</h2>
      <div className="buttonArea">
        <Link to="/dateweb/src/pages/register.js">
          <Button type="default" className="registerBtn">
            註冊
          </Button>
        </Link>

        <Link to="/dateweb/src/pages/login.js">
          <Button type="primary" className="loginBtn">
          登入
        </Button>
        </Link>
      </div>
    </main>
  );
}

export default landingPage;
