import './FloatingHearts.css';

function FloatingHearts({ hearts }) {
  return (
    <div className="floating-hearts-container">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}

export default FloatingHearts;
