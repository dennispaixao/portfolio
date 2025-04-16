import './App.css';
import { useState, useEffect } from 'react';
import typeSound from './assets/type.mp3';

function App() {
  const [greeting, setGreeting] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showSubtitleCursor, setShowSubtitleCursor] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    const titleText = ' Oi eu sou Dennis Paixão';
    const subtitleText = ' Sou Web Designer e Programador';
    const sound = new Audio(typeSound);
    let index = 0;

    const greetingInterval = setInterval(() => {
      if (index < titleText.length -1) {
        setGreeting(prev => prev + titleText[index]);
        sound.currentTime = 0.4;
        sound.play().catch(() => {});
        index++;
      } else {
        clearInterval(greetingInterval);
        setShowCursor(false);
        setShowSubtitleCursor(true);
       
        let subIndex = 0;
        const subtitleInterval = setInterval(() => {
          if (subIndex < subtitleText.length -1) {
            setSubtitle(prev => prev + subtitleText[subIndex]);
            sound.currentTime = 0.4;
            sound.play().catch(() => {});
            subIndex++;
          } else {
            clearInterval(subtitleInterval);
            setShowSubtitleCursor(false);
          }
        }, 80);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      
    }, 500);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(cursorInterval);
    };
  }, [started]);

  return (
    <div className="App">
      {!started ? (
        <button className="start-btn" onClick={() => setStarted(true)}>
          Iniciar
        </button>
      ) : (
        <main className="container">
          <h1 className="container__greetings">
            {greeting}
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </h1>
          <h2 className="container__subtitle">
            {subtitle}
            {showSubtitleCursor && <span className={`cursor ${showSubtitleCursor ? 'visible' : ''}`}>|</span>}
          </h2>
        </main>
      )}
    </div>
  );
}

export default App;