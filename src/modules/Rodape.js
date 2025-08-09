import React from "react";

const Rodape = () => {
  return (
    <footer className="rodape" id="rodape">
      <div className="decorative-elements">
        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <h1>Contato</h1>

      <a
        href="https://wa.me/+5511985540245"
        className="contact-link"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
        <p className="phone-number">(11) 98554-0245</p>
      </a>
    </footer>
  );
};

export default Rodape;
