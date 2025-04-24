import React from 'react'
import safyra from "../assets/portfolio/safyra-page-img.jpg";
import nothing from "../assets/portfolio/landing-nothing-img.jpg";
import bob from "../assets/portfolio/bob-img.jpg";
import chuva from "../assets/portfolio/chuva-img.jpg";
import velha from "../assets/portfolio/velha.jpg";
import todo from "../assets/portfolio/todo-img.jpg";

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
              <p>Página desenvolvida para o Dj Bob, feita em Next JS, otimizada para dispositivos móveis </p>
             
            </div>

            <div>
            <a href="https://codepen.io/dennis-paixao/full/YzxpNeZ" rel="noreferrer" target='_blank'>
              
              <img src={chuva} alt="chuva"/>
              </a>
              <h2>Algoritimo de chuva</h2>
              <p>Faça chover, controle a velocidade e tamanho dos pingos dinamicamente</p>
             
            </div>

            <div>
            <a href="https://codepen.io/dennis-paixao/full/poZopLM" rel="noreferrer" target='_blank'>
              
              <img src={velha} alt="jogo da velha"/>
              </a>
              <h2>Jogo da velha com IA</h2>
              <p>Aqui fiz o famoso jogo da velha no qual você joga contra a máquina</p>
             
            </div>

            <div>
            <a href="https://mytodotypescript.vercel.app/" rel="noreferrer" target='_blank'>
              
              <img src={todo} alt="lista de afazeres"/>
              </a>
              <h2>Lista de afazeres</h2>
              <p>Clássica  lista todo feita em Typescript com funcionalidades e armazenamento local</p>
             
            </div>
            
           
        </div>
    </div>
  )
}

 export default Portfolio
