import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <Header />
        <Menu />
        <Footer />
    </div>
  )
}

export default Sidebar;