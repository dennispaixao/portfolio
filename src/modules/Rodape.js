import React from 'react'

const Rodape = () => {
  return (
      <footer class="rodape"  id="rodape">
        <div class="decorative-elements">
            <div class="floating-circle circle1"></div>
            <div class="floating-circle circle2"></div>
            <div class="floating-circle circle3"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
        </div>
        
        <h1>Contato</h1>
        
        <a href="https://wa.me/+5511985540245" class="contact-link" rel="noreferrer" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png" 
                 alt="WhatsApp" 
                 class="whatsapp-icon" />
            <p class="phone-number">(11) 98554-0245</p>
        </a>
    </footer>
  )
}

 export default Rodape
