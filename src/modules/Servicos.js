import React from 'react';

// Imagens da web
const sites = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center";
const sistemas = "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=400&fit=crop&crop=center";
const lojaVirtual = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop&crop=center";
const desktop = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center";
const automacao = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop&crop=center";

const Servicos = () => {
  return (
    <section className='servicos' id="servicos">
      <h1>Serviços</h1>
      <ul>
        <li>
          <strong>Sites Profissionais</strong>
          <img src={sites} alt="sites"/>
          <p>Criação de sites modernos, responsivos e rápidos com React e TypeScript. Ideal para negócios que querem presença online profissional com performance otimizada.</p>
          <div className="exemplos">
            <h4>Exemplos:</h4>
            <span>• Portfólios pessoais • Landing pages • Sites institucionais • Blogs corporativos</span>
          </div>
        </li>

        <li>
          <strong>Loja Virtual (E-commerce)</strong>
          <img src={lojaVirtual} alt="loja virtual"/>
          <p>Desenvolvimento de lojas virtuais completas com sistema de pagamento, gestão de produtos, carrinho de compras e painel administrativo.</p>
          <div className="exemplos">
            <h4>Exemplos:</h4>
            <span>• Loja de roupas online • Marketplace de produtos • Sistema de vendas B2B • Catálogo digital</span>
          </div>
        </li>
        
        <li>
          <strong>Sistemas Web Completos</strong>
          <img src={sistemas} alt="sistemas"/>
          <p>Desenvolvimento de sistemas full stack com MERN Stack, integrando front-end e back-end com segurança, autenticação JWT e banco de dados.</p>
          <div className="exemplos">
            <h4>Exemplos:</h4>
            <span>• Sistema imobiliário • Agendamento de clientes • Controle financeiro • Gestão de estoque</span>
          </div>
        </li>

        <li>
          <strong>Sistemas Desktop</strong>
          <img src={desktop} alt="sistemas desktop"/>
          <p>Aplicações desktop personalizadas para controle interno da empresa, com interface moderna e integração com bancos de dados.</p>
          <div className="exemplos">
            <h4>Exemplos:</h4>
            <span>• Controle de matrículas escolares • Sistema de reserva de salas • Controle de ponto • Gestão de funcionários</span>
          </div>
        </li>

        <li>
          <strong>Automação e IA</strong>
          <img src={automacao} alt="automação"/>
          <p>Implementação de soluções inteligentes com Machine Learning e algoritmos de otimização para automatizar processos empresariais.</p>
          <div className="exemplos">
            <h4>Exemplos:</h4>
            <span>• Análise preditiva de dados • Sistemas de recomendação • Otimização de processos • Chatbots inteligentes</span>
          </div>
        </li>
      </ul>

      <div className="diferenciais">
        <h3>🚀 Diferenciais Técnicos</h3>
        <div className="tech-highlights">
          <div className="highlight">
            <strong>Top 10% CodeWars</strong>
            <p>4 kyu com 99 algoritmos resolvidos</p>
          </div>
          <div className="highlight">
            <strong>Stack Moderno</strong>
            <p>React, TypeScript, Node.js, MongoDB</p>
          </div>
          <div className="highlight">
            <strong>Machine Learning</strong>
            <p>Implementação de redes neurais e IA</p>
          </div>
          <div className="highlight">
            <strong>Deploy Profissional</strong>
            <p>Hospedagem em produção com Vercel/Render</p>
          </div>
        </div>
      </div>

  
    </section>
  );
};

export default Servicos;