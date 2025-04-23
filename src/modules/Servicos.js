import React from 'react'
import sistemas from "../assets/servicos/sistema-img.png"
import sites from "../assets/servicos/site-img.png"

const Servicos = () => {
  return (
    <div className='servicos'>
        <h1>Serviços</h1>
        <ul>
            <li>Criação e manutenção de <strong>Sites</strong><img src={sites} alt="sites"/><p>Criação de sites modernos, responsivos e rápidos com foco em design e performance. Ideal para negócios que querem presença online profissional.</p></li>
            <li>Criação e manutenção de <strong>Sistemas</strong><img src={sistemas} alt="sistemas"/><p>Desenvolvimento de sistemas completos com MERN Stack, integrando front-end e back-end com segurança, escalabilidade e performance para sua empresa.</p></li>
           
        </ul>
    </div>
  )
}

 export default Servicos
