import React from "react";
import Button from "../Button";

const Footer = () => {
  return (
    <div className="sidebar-footer">
      <div className="sidebar-footer-icon">
        <span class="material-symbols-outlined">rocket_launch</span>
      </div>
      <div className="sidebar-footer-heading">Upgrade Account</div>
      <div className="sidebar-footer-text">
        Access to Unlimited Trascription
      </div>
      <div className="sidebar-footer-button">
        <Button text="Upgrade" />
      </div>
    </div>
  );
};

export default Footer;
