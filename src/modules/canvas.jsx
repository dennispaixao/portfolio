import React, { useEffect, useRef, useState, useCallback } from 'react';

const CanvasComponent = ({ children, customStyles }) => {
  const canvasRef = useRef(null);
  const [estado, setEstado] = useState({
    x: 0,
    y: 0,
    active: false
  });

  const criaDiv = (x, y, size, background, borderR, zi) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.marginLeft = x + 'px';
    div.style.marginTop = y + 'px';
    div.style.borderRadius = `${borderR}%`;
    div.style.transform = 'rotate(45deg)';
    div.style.zIndex = zi;
    div.style.background = background;
    return div;
  };

  
  const displayBoxes = useCallback((numBoxes, minSize, maxSize, borderR, zi, vel) => {
    let cont = 0;
    let tempX = estado.x;
    let tempY = estado.y;

    let myTimer = setInterval(() => {
      if (cont > numBoxes && numBoxes !== 0) {
        clearInterval(myTimer);
      }
      cont++;

      let size = Math.round(Math.random() * (maxSize - minSize) + minSize);
      if (!canvasRef.current) return;
      let maxLeft = canvasRef.current.offsetWidth - (size + 5);
      let maxTop = canvasRef.current.offsetHeight - (size + 5);
      let maxX = tempX + 20 > maxLeft ? maxLeft : tempX + 20;
      let minX = tempX - 20 < 0 ? 5 : tempX - 20;
      let maxY = tempY + 20 > maxTop ? maxTop : tempY + 20;
      let minY = tempY - 20 < 0 ? 5 : tempY - 20;
      const x = Math.round(Math.random() * (maxX - minX) + minX);
      const y = Math.round(Math.random() * (maxY - minY) + minY);
      const isGold = Math.random() > 0.5; // 50% de chance de dourado ou branco

      const r = isGold ? Math.round(Math.random() * 55 + 200) : Math.round(Math.random() * 200 + 255);
      const g = isGold ? Math.round(Math.random() * 55 + 160) : Math.round(Math.random() * 200 + 255);
      const b = isGold ? Math.round(Math.random() * 40) : Math.round(Math.random() * 200 + 255);
      const myDiv = criaDiv(x, y, size, `rgb(${r},${g},${b})`, borderR, zi);
      myDiv.style.pointerEvents = 'none';
      canvasRef.current.appendChild(myDiv);

      setTimeout(() => myDiv.remove(), vel);
    }, vel);
  },[estado.x, estado.y])

  const dp = useCallback((e) => {
    let vel = Math.round(Math.random() * (250 - 50) + 50);
    // numBoxes, minSize, maxSize, borderR, zi, vel
    displayBoxes(1, 1, 5, 100, 0, vel);
    displayBoxes(2, 1, 5, 0, 3, vel);
  },[displayBoxes])


  const eventHandler = useCallback((vel) => {
    if (!estado.active) {
      setEstado((prevState) => ({ ...prevState, active: true }));
      setTimeout(() => {
        dp();
        setEstado((prevState) => ({ ...prevState, active: false }));
      }, vel);
    }
  }, [estado, dp]);
  
  

  const handleMouseMove = useCallback((e) => {
    setEstado((prevState) => ({ ...prevState, x: e.pageX, y: e.pageY }));
    eventHandler(6);
  }, [eventHandler]);

  const handleTouchStart = useCallback((e) => {
    setEstado((prevState) => ({ ...prevState, x: e.touches[0].pageX, y: e.touches[0].pageY }));
    eventHandler(0);
  }, [eventHandler]);

  const handleTouchMove = useCallback((e) => {
    setEstado((prevState) => ({ ...prevState, x: e.touches[0].pageX, y: e.touches[0].pageY }));
    eventHandler(1);
  }, [eventHandler]);

  const handleClick = useCallback(() => {
    eventHandler(0);
  }, [eventHandler]);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('click', handleClick);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [handleMouseMove, handleTouchStart, handleTouchMove, handleClick]);

  return (
    <div className="canvas" ref={canvasRef} >
      {children}
    </div>
  );
};

export default CanvasComponent;
