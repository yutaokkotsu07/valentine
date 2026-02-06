import { useEffect, useState } from 'react';
import './MessageReveal.css';

function MessageReveal({ isRevealed }) {
  const [displayText, setDisplayText] = useState('');
  const fullMessage = 'I LOVE YOU, SNEHA ❤️';

  useEffect(() => {
    if (isRevealed) {
      let charIndex = 0;
      const interval = setInterval(() => {
        if (charIndex <= fullMessage.length) {
          setDisplayText(fullMessage.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRevealed]);

  return (
    <div className={`message-reveal ${isRevealed ? 'revealed' : ''}`}>
      <div className="message-box">
        <span className="typing-text">{displayText}</span>
        {isRevealed && displayText.length < fullMessage.length && (
          <span className="cursor">|</span>
        )}
      </div>
    </div>
  );
}

export default MessageReveal;
