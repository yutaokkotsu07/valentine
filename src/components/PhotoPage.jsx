import { useState, useEffect } from 'react';
import './PhotoPage.css';

function PhotoPage() {
  const [hearts, setHearts] = useState([]);
  const [loveTexts, setLoveTexts] = useState([]);

  // Create floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        const newHeart = {
          id: Math.random(),
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
        };
        setHearts(prev => [...prev, newHeart]);
        setTimeout(() => {
          setHearts(prev => prev.filter(h => h.id !== newHeart.id));
        }, 3000);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Create "I LOVE YOU" texts
  useEffect(() => {
    const interval = setInterval(() => {
      const newText = {
        id: Math.random(),
        angle: Math.random() * 360,
      };
      setLoveTexts(prev => [...prev, newText]);
      setTimeout(() => {
        setLoveTexts(prev => prev.filter(t => t.id !== newText.id));
      }, 3500);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="photo-page">
      <div className="stars-bg"></div>
      <div className="stars-bg2"></div>
      <div className="stars-bg3"></div>

      {/* Floating hearts background */}
      <div className="floating-hearts-bg">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="floating-heart-bg"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="photo-container">
        {/* Main photo with pumping effect */}
        <div className="photo-frame">
          <img 
            src="/sneha.jpg" 
            alt="Sneha" 
            className="photo"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f0f0f0" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="20" font-family="Arial"%3EReplace with your photo%3C/text%3E%3Ctext x="50%25" y="60%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="16" font-family="Arial"%3E(Add sneha.jpg in public folder)%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>

        {/* I LOVE YOU texts orbiting around the photo */}
        <div className="love-texts-container">
          {loveTexts.map(text => (
            <div
              key={text.id}
              className="love-text"
              style={{
                '--angle': `${text.angle}deg`,
              }}
            >
              I LOVE YOU 💕
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="decorative-hearts">
        <div className="heart-group top-left">❤️ 💖 💗</div>
        <div className="heart-group top-right">💝 💕 ✨</div>
        <div className="heart-group bottom-left">💞 💘 🌹</div>
        <div className="heart-group bottom-right">💐 💟 💫</div>
      </div>
    </div>
  );
}

export default PhotoPage;
