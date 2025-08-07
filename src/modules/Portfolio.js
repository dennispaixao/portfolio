import React from 'react'
import safyra from "../assets/portfolio/safyra-page-img.jpg";
import nothing from "../assets/portfolio/landing-nothing-img.jpg";
import bob from "../assets/portfolio/bob-img.jpg";
import chuva from "../assets/portfolio/chuva-img.jpg";
import velha from "../assets/portfolio/velha.jpg";
import todo from "../assets/portfolio/todo-img.jpg";

const Portfolio = () => {
  const projetos = [
    {
      id: 1,
      titulo: "Sistema Safyra",
      descricao: "Sistema full stack completo com MERN Stack, autenticação JWT, upload de imagens e painel administrativo. Desenvolvido para corretora imobiliária.",
      tecnologias: ["React", "Node.js", "MongoDB", "JWT", "Cloudinary"],
      link: "https://safyra.vercel.app/",
      imagem: safyra,
      destaque: true,
      categoria: "Full Stack"
    },
    {
      id: 2,
      titulo: "Jogo da Velha com IA",
      descricao: "Jogo inteligente com algoritmo de IA estratégica que prioriza vitória e bloqueia jogadas do oponente. Implementação de lógica avançada.",
      tecnologias: ["JavaScript", "IA", "Algoritmos", "DOM"],
      link: "https://codepen.io/dennis-paixao/full/poZopLM",
      imagem: velha,
      destaque: true,
      categoria: "IA/Algoritmos"
    },
    {
      id: 3,
      titulo: "Simulador de Chuva",
      descricao: "Simulação física avançada com gravidade, vento e colisões. Sistema configurável com persistência de dados e programação assíncrona.",
      tecnologias: ["JavaScript", "Física", "Async/Await", "LocalStorage"],
      link: "https://codepen.io/dennis-paixao/full/YzxpNeZ",
      imagem: chuva,
      destaque: false,
      categoria: "Simulação"
    },
    {
      id: 4,
      titulo: "DJ Bob Roots",
      descricao: "Landing page moderna e responsiva para DJ, otimizada para dispositivos móveis com design atrativo e performance otimizada.",
      tecnologias: ["Next.js", "React", "CSS3", "Responsive"],
      link: "https://bobroots.vercel.app/",
      imagem: bob,
      destaque: false,
      categoria: "Frontend"
    },
    {
      id: 5,
      titulo: "Nothing Landing Page",
      descricao: "Landing page criativa desenvolvida durante curso Full Stack, focando em design moderno e experiência do usuário.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "Design"],
      link: "https://dennispaixao.github.io/layout_landing-page/",
      imagem: nothing,
      destaque: false,
      categoria: "Frontend"
    },
    {
      id: 6,
      titulo: "Lista de Afazeres",
      descricao: "Aplicação todo clássica em TypeScript com funcionalidades avançadas, armazenamento local e interface intuitiva.",
      tecnologias: ["TypeScript", "React", "LocalStorage", "CSS3"],
      link: "https://mytodotypescript.vercel.app/",
      imagem: todo,
      destaque: false,
      categoria: "Frontend"
    }
  ];

  return (
     <section className='Portfolio' id="portfolio">
      <div className="portfolio-header">
        <h1>🚀 Portfólio</h1>
        <div className="experiencia-badge">
          <span className="anos">10+ anos</span>
          <span className="texto">de experiência</span>
        </div>
        <p>Formado em <strong>Sistemas de Informação</strong> e <strong>Técnico em Informática</strong>. 
        Especialista em desenvolvimento full stack com foco em soluções inovadoras e algoritmos avançados.</p>
      </div>

      <div className="stats-section">
        <div className="stat-card">
          <div className="stat-number">20+</div>
          <div className="stat-label">Projetos Concluídos</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">4 kyu</div>
          <div className="stat-label">CodeWars Ranking</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">99</div>
          <div className="stat-label">Algoritmos Resolvidos no CodeWars</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">Top 10%</div>
          <div className="stat-label">Desenvolvedores</div>
        </div>
      </div>

      <div className='Portfolio__items'>
        {projetos.map((projeto, index) => (
          <div key={projeto.id} className={`portfolio-card ${projeto.destaque ? 'destaque' : ''}`}>
            <div className="card-image-container">
              <img src={projeto.imagem} alt={projeto.titulo}/>
              <div className="categoria-badge">{projeto.categoria}</div>
              <div className="overlay">
                <a href={projeto.link} rel="noreferrer" target='_blank' className="view-project">
                  <span>🔍 Ver Projeto</span>
                </a>
              </div>
            </div>
            
            <div className="card-content">
              <h2>{projeto.titulo}</h2>
              <p>{projeto.descricao}</p>
              
              <div className="card__tecnologia">
                {projeto.tecnologias.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            {projeto.destaque && <div className="destaque-ribbon">⭐ Destaque</div>}
          </div>
        ))}
      </div>

      <div className="call-to-action">
        <h3>💡 Interessado em um projeto similar?</h3>
        <p>Vamos conversar sobre como posso ajudar sua empresa!</p>
        <a href="#rodape" className="cta-button">Entre em Contato</a>
      </div>

  
    </section>
  )
}

 export default Portfolio
