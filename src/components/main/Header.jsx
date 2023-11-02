import React from "react";

const Header = () => {
  return (
    <div className="main-content-header">
      <div class="search-container">
        <span id="search-icon" class="material-symbols-outlined">
          search
        </span>
        <input type="text" id="search" placeholder="Search..." />
      </div>
      <div className="icon-container">
        <div className="header-icon">
          <img alt="user" id="profile-photo" src="https://picsum.photos/40/40"/>
        </div>
        <div className="header-icon pd-10">
          <span class="material-symbols-outlined">notifications</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
