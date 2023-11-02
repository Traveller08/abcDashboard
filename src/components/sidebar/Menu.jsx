import React from "react";
import Item from "./Item";

const Menu = () => {
  const data = [
    {
      icon: "home",
      title: "Home",
    },
    {
      icon: "folder",
      title: "All Files",
    },
    {
      icon: "bookmark",
      title: "Saved",
    },
    {
      icon: "share",
      title: "Integrations",
    },
    {
      icon: "delete",
      title: "Trash",
    },
    {
      icon: "settings",
      title: "Settings",
    },
    {
      icon: "help",
      title: "Help and Support",
    },
  ];
  return <div className="sidebar-menu">
    {
      data.map((item)=>{
        return <Item icon={item.icon} className={item.title==="Home"?"active":""} title={item.title}/>
      })
    }
  </div>;
};

export default Menu;
