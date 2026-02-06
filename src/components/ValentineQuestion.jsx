import { useState, useRef, useEffect } from 'react';
import './ValentineQuestion.css';

function ValentineQuestion({ onYes }) {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const noButtonRef = useRef(null);
  const buttonsContainerRef = useRef(null);

  const handleNoMouseEnter = () => {
    const container = buttonsContainerRef.current;
    const noButton = noButtonRef.current;

    if (!container || !noButton) return;

    const containerRect = container.getBoundingClientRect();
    const buttonWidth = noButton.offsetWidth || 120;
    const buttonHeight = noButton.offsetHeight || 60;

    // Ensure button stays within container bounds
    // Add padding to keep button well within boundaries
    const padding = 10;
    const maxX = Math.max(0, containerRect.width - buttonWidth - padding);
    const maxY = Math.max(0, containerRect.height - buttonHeight - padding);

    // Clamp values to ensure they're never negative
    const randomX = Math.max(padding, Math.random() * Math.max(0, maxX - padding));
    const randomY = Math.max(padding, Math.random() * Math.max(0, maxY - padding));

    setNoButtonPos({ x: randomX, y: randomY });
    setAttempts(prev => prev + 1);
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    handleNoMouseEnter();
  };

  const getMojis = () => {
    if (attempts === 0) return '💕';
    if (attempts < 3) return '😊';
    if (attempts < 5) return '😂';
    if (attempts < 8) return '🤣';
    return '😆';
  };

  const getMessages = () => {
    const messageList = [
      "Will you be my Valentine?",
      "Come on... 💕",
      "That's not the answer I want! 😏",
      "Stop being silly! 😂",
      "You can't escape me! 🎯",
      "Just click YES already! 🥺",
      "Please? 💖",
      "I know you want to! 😉",
      "Your destiny is YES! ✨",
      "You're making this fun! 😄",
      "Why are you like this? 😆",
      "The answer is clearly YES! 💕",
      "I have all day! ⏰",
      "Eventually you'll click YES! 😉",
      "Let's make it happen! 💖",
    ];
    return messageList[attempts % messageList.length];
  };

  return (
    <div className="valentine-question-container">
      <div className="stars-bg"></div>
      <div className="stars-bg2"></div>
      <div className="stars-bg3"></div>

      <div className="floating-question">
        <h1 className="big-question">{getMessages()}</h1>
        <p className="emoji-animation">{getMojis()}</p>

        <div className="buttons-wrapper" ref={buttonsContainerRef}>
          <button className="yes-button" onClick={onYes}>
            YES! 💕
          </button>
          <button
            ref={noButtonRef}
            className="no-button"
            style={{
              left: `${noButtonPos.x}px`,
              top: `${noButtonPos.y}px`,
            }}
            onMouseEnter={handleNoMouseEnter}
            onTouchStart={handleNoMouseEnter}
            onClick={handleNoClick}
          >
            NO
          </button>
        </div>

        <p className="attempts-text">
          {attempts > 0 && `You've tried ${attempts} time${attempts !== 1 ? 's' : ''}! 😄`}
        </p>

        <div className="heart-rain">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="heart-drop" style={{ animationDelay: `${i * 0.2}s` }}>
              ❤️
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ValentineQuestion;
