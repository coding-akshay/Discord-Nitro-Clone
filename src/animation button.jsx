import React, { useEffect, useState } from 'react';

function Ani() {
  const [showButton, setShowButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset; // Current scroll position from the top
      const triggerPoint = 2500; // Change this value to the scroll position where the button should appear

      if (scrollPosition > triggerPoint) {
        setShowButton(true);
      } else {
        setShowButton(false); // Hide the button when the scroll position is above the trigger point
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {showButton && (
        <div className='Sticky-button'>
          <button className='Sticky-button-one' onClick={openModal}>
            <img src="src\asnitro-assetssets\blue nitro.png" alt="" />
            Subscribe
          </button>

          <button className='Sticky-button-gif' onClick={openModal}>
            <img className='gift' src="src\assnitro-assetsets\icons8-giftbox-50.png" alt="" />
            Gif Nitro
          </button>

          {isModalOpen && (
            <div className="mmm">
              <div className="mmmm">
                <div className="sticky-heading-modal">
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
      )}
    </div>
  );
}

export default Ani;
