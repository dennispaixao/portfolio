import React from 'react'
import sistemas from "../assets/servicos/sistema-img.png"
import sites from "../assets/servicos/site-img.png"

const Rodape = () => {
  return (
    <div className='rodape'>
        <h1>Contato</h1>
        <a href="https://wa.me/11985540245" rel="noreferrer" 
        target="_blank">
          <img src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png" alt="WhatsApp" />
          <p>(11)98554-0245</p>
        </a>
    </div>
  )
}

 export default Rodape
