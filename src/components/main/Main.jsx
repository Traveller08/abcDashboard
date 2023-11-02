import React from 'react';
import Header from './Header';
import Body from './Body';

const Main = ({handleModalOpen}) => {
  return (
    <div className="main-content-container">
        <Header />
        <Body handleModalOpen={handleModalOpen}  />
    </div>
  )
}

export default Main;