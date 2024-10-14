// import React from "react";

import React, { useState } from 'react';

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  return (
    <div className='gift-box-nitro'>
      <button className='subscribe-nitro' onClick={openModal}>
        <img src="src/nitro-assets/blue nitro.png" alt="" /> Subscribe Nitro
      </button>

      <button className='gif-nitro-hed' onClick={openModal}>
        <img className='gift' src="src/nitro-assets/icons8-giftbox-50.png" alt="" /> Gift Nitro
      </button>

      {/* New Modal */}
      {isModalOpen && (
        <div className="mmm">
            
          <div className="mmmm">
        <div className="sticky-heding-modal">
          <p>SELECT PLAN</p>
        </div>
        

            <span className="clos" onClick={closeModal}>&times;</span>
         
         


          <div className="carddd">
            <h1>NITRO</h1>
            <p>
               <h4>$9.99/month.</h4>
            </p>
            <br />
            <img className='airo-space' src="src\nitro-assets\airoplne.svg" alt="" />
            <ul>
              <li>
                <img
                  className="upload-icon"
                  src="src/nitro-assets/icons8-upload-24.png"
                  alt="Upload Icon"
                />
                <span>500 MB Uploads</span>
              </li>
              <li>
                <img
                  className="emoji-smile"
                  src="src/nitro-assets/icons8-smile-48.png"
                  alt="Emoji Smile"
                />
                <span>Custom emoji anywhere</span>
              </li>
              <li>
                <img
                  src="src/nitro-assets/icons8-smiling-face-with-heart-24.png"
                  alt="Smiling Face with Heart"
                />
                <span>Unlimited Super Reactions</span>
              </li>
              <li>
                <img
                  className="tv"
                  src="src/nitro-assets/icons8-tv-show-48.png"
                  alt="HD Video Streaming"
                />
                <span>HD video streaming</span>
              </li>
              <li>
                <img
                  src="src/nitro-assets/icons8-rubygems-a-package-manager-for-the-ruby-programming-language-24.png"
                  alt="Server Boosts"
                />
                <span>2 Server Boosts</span>
              </li>
              <li>
                <img
                  src="src/nitro-assets/icons8-name-24.png"
                  alt="Custom Profile"
                />
                <span>Custom profile and more</span>
              </li>
            </ul>
          </div>



          <div className="cardrr">
            <h1>NITRO</h1>
            <h3>BASIC</h3>
            <p>$2.99/month</p>
            <br />
            <img className='rider' src="src\nitro-assets\rider.svg" alt="" />
            <ul>
              <li>
                <img
                  className="upload-icon"
                  src="src/nitro-assets/icons8-upload-24.png"
                  alt="Upload Icon"
                />
                <span>50 MB Uploads</span>
              </li>
              <li>
                <img
                  className="emoji-smile"
                  src="src/nitro-assets/icons8-smile-48.png"
                  alt="Emoji Smile"
                />
                <span>Custom emoji anywhere</span>
              </li>
              <li>
                <img
                  src="src/nitro-assets/icons8-smiling-face-with-heart-24.png"
                  alt="Smiling Face with Heart"
                />
                <span>Unlimited Super Reactions</span>
              </li>
              <li>
                <img
                  src="src/nitro-assets/white-nitro.png"
                  alt="Nitro Badge"
                />
                <span>Special Nitro badge on your profile</span>
              </li>
            </ul>
          </div>

          

          </div>
          
        </div>
      )}
    </div>
  );
}

export default Modal;

