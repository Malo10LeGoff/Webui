import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SpaIcon from "@mui/icons-material/Spa";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <SpaIcon className="header_logo_image" fontSize="large"></SpaIcon>
      </div>
      <div className="header_cloud_providers"></div>
      <AccountCircleIcon
        className="account_image"
        fontSize="large"
      ></AccountCircleIcon>
      <div className="header_account">
        <span className="span_account">Account</span>
        <span className="span_sign_in">Sign in</span>
      </div>
    </div>
  );
}

export default Header;
