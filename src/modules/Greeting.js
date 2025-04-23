import React, { useState, useEffect } from 'react';
import face from '../assets/face.png';
const Greeting = ({children}) => {
  const [greeting, setGreeting] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showSubtitleCursor, setShowSubtitleCursor] = useState(false);

  useEffect(() => {

    const titleText = '  Oi, eu sou Dennis Paixão';
    const subtitleText = ' Sou Web Designer e Programador';
    let index = 0;

    const greetingInterval = setInterval(() => {
      if (index < titleText.length - 1) {
        setGreeting(prev => prev + titleText[index]);
  
        index++;
      } else {
        clearInterval(greetingInterval);
        setShowCursor(false);
        setShowSubtitleCursor(true);

        let subIndex = 0;
        const subtitleInterval = setInterval(() => {
          if (subIndex < subtitleText.length - 1) {
            setSubtitle(prev => prev + subtitleText[subIndex]);
    
            subIndex++;
          } else {
            clearInterval(subtitleInterval);
            setShowSubtitleCursor(false);
          }
        }, 80);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      // vazio por enquanto
    }, 500);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div>
        <div>
         <img className='photo-face' src={face} alt="foto" />
          <h1 className="container__greetings">
            {greeting}
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </h1>
          <h2 className="container__subtitle">
            {subtitle}
            {showSubtitleCursor && (
              <span className={`cursor ${showSubtitleCursor ? 'visible' : ''}`}>|</span>
            )}
          </h2>
        </div>
      
       </div>
  );
};

export default Greeting;