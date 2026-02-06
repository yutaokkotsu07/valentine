import { useState } from 'react';
import './InteractiveButtons.css';

function InteractiveButtons({ setShowMessage }) {
  const [messages, setMessages] = useState([]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const phrases = [
    '😍 You make me smile',
    '💖 You are beautiful',
    '✨ You light up my life',
    '🌟 I adore you',
    '💝 Forever yours',
    '🎯 Perfect match',
    '🎉 My soulmate',
    '🦋 You are magic',
  ];

  const colors = [
    '#ff6b9d',
    '#ff85c1',
    '#ffa3db',
    '#ffc1ea',
    '#ff6b9d',
  ];

  const handleButtonClick = (phrase) => {
    const newMessage = {
      id: Math.random(),
      text: phrase,
      color: colors[currentColorIndex % colors.length],
    };
    setMessages(prev => [...prev, newMessage]);
    setCurrentColorIndex(prev => (prev + 1) % colors.length);
    setShowMessage(true);

    setTimeout(() => {
      setMessages(prev => prev.filter(m => m.id !== newMessage.id));
    }, 3000);
  };

  return (
    <div className="interactive-buttons">
      <div className="buttons-grid">
        {phrases.map((phrase, index) => (
          <button
            key={index}
            className="interactive-btn"
            onClick={() => handleButtonClick(phrase)}
            style={{
              backgroundColor: colors[index % colors.length],
            }}
          >
            {phrase.split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="floating-messages">
        {messages.map(msg => (
          <div
            key={msg.id}
            className="floating-message"
            style={{ color: msg.color }}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InteractiveButtons;
