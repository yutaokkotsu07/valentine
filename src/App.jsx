import { useState, useEffect } from 'react';
import './App.css';
import FloatingHearts from './components/FloatingHearts';
import MessageReveal from './components/MessageReveal';
import InteractiveButtons from './components/InteractiveButtons';
import ValentineQuestion from './components/ValentineQuestion';
import PhotoPage from './components/PhotoPage';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [answeredYes, setAnsweredYes] = useState(false);
  const [currentPage, setCurrentPage] = useState('question');

  const createHeart = () => {
    const newHeart = {
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    };
    setHearts(prev => [...prev, newHeart]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 2000);
  };

  const handleHeartClick = () => {
    createHeart();
    setClickCount(prev => prev + 1);
    if (clickCount >= 2) {
      setShowMessage(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) createHeart();
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleYes = () => {
    setAnsweredYes(true);
    setCurrentPage('photo');
  };

  if (currentPage === 'question') {
    return <ValentineQuestion onYes={handleYes} />;
  }

  if (currentPage === 'photo') {
    return <PhotoPage />;
  }

  return (
    <div className="app">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      
      <FloatingHearts hearts={hearts} />
      
      <div className="container">
        <div className="content">
          <h1 className="title">Happy Valentine's Day</h1>
          <p className="subtitle">For my sweet Sneha ❤️</p>
          
          <MessageReveal isRevealed={showMessage} />
          
          <button 
            className="heart-button pulse"
            onClick={handleHeartClick}
            title="Click me!"
          >
            💕
          </button>
          
          <p className="hint">
            {clickCount === 0 && "Click the heart! 👈"}
            {clickCount === 1 && "One more click! 🎯"}
            {clickCount >= 2 && "💕 Revealed!"}
          </p>
          
          <InteractiveButtons setShowMessage={setShowMessage} />
          
          <div className="rose-container">
            <div className="rose">🌹</div>
            <div className="rose" style={{animationDelay: '0.5s'}}>🌹</div>
            <div className="rose" style={{animationDelay: '1s'}}>🌹</div>
          </div>

          <footer className="footer">
            Made with love 💕 on Valentine's Day
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
