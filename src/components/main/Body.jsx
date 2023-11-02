import React, { useState } from "react";
import Button from "../Button";
import Card from "../Card";
const Body = ({handleModalOpen}) => {
  const arr = [1, 1, 1, 1, 1, 1, 1];
 
  return (
    <div className="main-content-body">
      <div className="row">
        <div className="text-container">
          <div className="greeting">Welcome Shakirat</div>
          <div className="text">
            Upload your audio and Video to convert to text
          </div>
        </div>
        <div className="button-container">
          <Button text="Transcribe File" handleClick={handleModalOpen}/>
        </div>
      </div>
      <div className="row mt-3">
        <Card icon="folder" quantity="100" text="Uploaded Files" />
        <Card icon="text_fields" quantity="50" text="Transcribed" />
        <Card icon="bookmark" quantity="20" text="Saved" />
      </div>
      <div className="row mt-3">
        <div className="table-container">
          <div className="table-container-header">Recent Files</div>
          <hr />
          <table>
            <tr className="table-header">
              <td>
                  <input type="checkbox" id="header-checkbox" className="custom-checkbox" />
                  <label for="header-checkbox" class="custom-checkbox-label"></label>

              </td>
              <td>Name</td>
              <td>Type</td>
              <td>Duration</td>
              <td>Date Created</td>
              <td>Last Updated</td>
              <td>Action</td>
            </tr>

            {arr.map((item,index) => {
              return (
                <tr>
                  <td>
                  <input type="checkbox" id={index} className="custom-checkbox" />
                  <label for={index} class="custom-checkbox-label"></label>
                  </td>
                  <td>Peng Meeting</td>
                  <td>Audio</td>
                  <td>20</td>
                  <td>Tofunmi</td>
                  <td>Table cell</td>
                  <td></td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Body;
