import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main';
import Modal from '../components/Modal';
import { useState } from 'react';
const Dashboard = () => {
  const [isModalOpen,setModalOpen] = useState(false);

  const handleModalOpen=()=>{
    setModalOpen(true);
    console.log("clicked")
  }
  const handleClose =()=>{
    console.log("close  clicked");
    setModalOpen(false);
  }
  return (
    <>

      <div className="dashboard">
        {
          isModalOpen && <Modal handleModalClose={handleClose} />
        }
        <Sidebar />
        <Main handleModalOpen={handleModalOpen} />
      </div>
    </>
  )
}

export default Dashboard;