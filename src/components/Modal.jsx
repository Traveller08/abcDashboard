import React from "react";
import Button from "./Button";

const Modal = ({handleModalClose}) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="row">
          <div className="greeting">Transcribe File</div>
          <div className="row-icon greeting" onClick={handleModalClose}>
            <span class="material-symbols-outlined">close</span>
          </div>
        </div>
        <div className="row mt-5">
          <div class="dropdown-container">
            <label for="dropdown">Transcription Language</label>
            <select id="dropdown">
              <option value="option1">Default</option>
              <option value="option2">English</option>
              <option value="option3">Hindi</option>
            </select>
          </div>
        </div>
        <div className="row mt-5">
          <div className="file-upload-container">
            <div className="sidebar-footer-icon upload-icon">

            <span class="material-symbols-outlined">cloud_upload</span>
            </div>
            <div className="text file-upload-heading"><span className="sidebar-footer-heading">Click to upload</span>  or drag and drop</div>
            <div className="text">The maximum file size is 1GB for audio and 10GB for videos.</div>
            <div className="text">Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv, m4a, mov, wmv, wma</div>
          </div>
        </div>
        <div className="row mt-5">
            <div className="link-input-container">
            <label for="link">Import from Link</label>
            <input type="text" id="link" />

            </div>
        </div>
        <div className="row mt-5">
            <div className="checkbox-container">

        <input type="checkbox" id="header-checkbox" className="custom-checkbox" />
                  <label for="header-checkbox" class="custom-checkbox-label"></label>
                  <label for="header-checkbox" className="ml-5">Speaker identification</label>
            </div>
        </div>
        <div className="row mt-5">
            <div className="button-container">
            <Button  text="Transcribe File"/>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
