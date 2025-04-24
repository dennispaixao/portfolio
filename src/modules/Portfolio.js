import React from 'react'
import safyra from "../assets/portfolio/safyra-page-img.jpg";
import nothing from "../assets/portfolio/landing-nothing-img.jpg";
import bob from "../assets/portfolio/bob-img.jpg";

const Portfolio = () => {
  return (
    <div className='Portfolio'>
        <h1>Portfólio</h1>
        <p>Programo a mais de 10 anos sou formado Bacharel em Sistemas de Informação e Técnico em informática para internet</p> 
        <div className='Portfolio__items'>
            <div>
            <a href="https://safyra.vercel.app/" rel="noreferrer" target='_blank'>
              
              <img src={safyra} alt="Safyra"/>
              </a>
              <h2>Sistema Safyra</h2>
              <p>Sistema full stack, com segurança, design, e confiabilidade, desenvolvido para a corretora Safyra</p>
             
            </div>

            <div>
            <a href="https://dennispaixao.github.io/layout_landing-page/" rel="noreferrer" target='_blank'>
              
              <img src={nothing} alt="Notthing"/>
              </a>
              <h2>Nothing page</h2>
              <p>Landing page feita para o curso full stack da Mate Academy</p>
             
            </div>

            <div>
            <a href="https://bobroots.vercel.app/" rel="noreferrer" target='_blank'>
              
              <img src={bob} alt="Dj bob roots"/>
              </a>
              <h2>DJ Bob page</h2>
              <p>Página desenvolvida para o Dj Bob, feita em Next JS, otmizada para dispositivos móveis </p>
             
            </div>

           
            
           
        </div>
    </div>
  )
}

 export default Portfolio
