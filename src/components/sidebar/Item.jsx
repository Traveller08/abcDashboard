import React from 'react'

const Item = ({icon, title}) => {
  return (
    <div className={`${title==="Home"?"active":""} sidebar-menu-item`}>
      <div className="sidebar-menu-item-icon">
        <span class="material-symbols-outlined">
          {icon}
        </span>
      </div>
      <div className="sidebar-menu-item-title">
        {title}
      </div>
    </div>
  )
}

export default Item;