import React, { useState } from 'react';
import { FaSteam, FaDiscord } from 'react-icons/fa';
import './App.css';
import Jumpscar from './Jumpscar';

const App: React.FC = () => {
  const [showJumpscar, setShowJumpscar] = useState(false);

  const handleJumpscar = () => {
    const audio = new Audio('/assets/jumpscar.mp3');
    audio.play();

    setShowJumpscar(true);
    setTimeout(() => {
      setShowJumpscar(false);
    }, 3000);
  };

  return (
    <div className="App">
      <div className="blur-background"></div>
      <div className="container">
        <div className="container-content">
          <h1>Welcome to toster.lol</h1>
          <p>This is my website or something. Enjoy!</p>
          <div className="button-container">
            <a href="https://steamcommunity.com/id/tosterlolz/" target="_blank" rel="noopener noreferrer">
              <button className="social-button steam-button">
                <FaSteam size={30} style={{ marginRight: '8px' }} />
                Steam
              </button>
            </a>

            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
              <button className="social-button discord-button">
                <FaDiscord size={30} style={{ marginRight: '8px' }} />
                Discord
              </button>
            </a>

            <button className="social-button" onClick={handleJumpscar}>
              Free Bobux🤑🤑🤑
            </button>
          </div>
        </div>
      </div>

      {showJumpscar && <Jumpscar />}
    </div>
  );
};

export default App;
