import React, { useState, useEffect } from 'react';

// Simulando as imagens dos logos (você pode substituir pelos seus imports reais)
const logos = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  next: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  mongo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  postgre: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  vercel: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
  render: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4c839fd4a56e3c7bfb08e9759906c45a/render.png"
};

const Tecnologias = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  const tecnologias = [
    {
      nome: "HTML5",
      logo: logos.html,
      categoria: "Frontend",
      nivel: "Avançado",
      cor: "#E34F26",
      descricao: "Estruturação semântica e acessível"
    },
    {
      nome: "CSS3",
      logo: logos.css,
      categoria: "Frontend", 
      nivel: "Avançado",
      cor: "#1572B6",
      descricao: "Layouts modernos e responsivos"
    },
    {
      nome: "JavaScript",
      logo: logos.javascript,
      categoria: "Full Stack",
      nivel: "Avançado",
      cor: "#F7DF1E",
      descricao: "ES6+, Async/Await, DOM manipulation"
    },
    {
      nome: "TypeScript",
      logo: logos.typescript,
      categoria: "Full Stack",
      nivel: "Intermediário",
      cor: "#3178C6",
      descricao: "Tipagem estática e POO avançada"
    },
    {
      nome: "React",
      logo: logos.react,
      categoria: "Frontend",
      nivel: "Avançado",
      cor: "#61DAFB",
      descricao: "Hooks, Context API, Performance"
    },
    {
      nome: "Next.js",
      logo: logos.next,
      categoria: "Full Stack",
      nivel: "Intermediário",
      cor: "#000000",
      descricao: "SSR, SSG, API Routes"
    },
    {
      nome: "Node.js",
      logo: logos.node,
      categoria: "Backend",
      nivel: "Avançado",
      cor: "#339933",
      descricao: "APIs REST, Middlewares, Streams"
    },
    {
      nome: "Express",
      logo: logos.express,
      categoria: "Backend",
      nivel: "Avançado",
      cor: "#000000",
      descricao: "JWT Auth, Rate Limiting, CORS"
    },
    {
      nome: "MongoDB",
      logo: logos.mongo,
      categoria: "Database",
      nivel: "Intermediário",
      cor: "#47A248",
      descricao: "NoSQL, Aggregation, Atlas"
    },
    {
      nome: "PostgreSQL",
      logo: logos.postgre,
      categoria: "Database",
      nivel: "Intermediário",
      cor: "#336791",
      descricao: "SQL avançado, Relations, Queries"
    },
    {
      nome: "Sass/SCSS",
      logo: logos.sass,
      categoria: "Frontend",
      nivel: "Avançado",
      cor: "#CC6699",
      descricao: "Variables, Mixins, Nesting"
    },
    {
      nome: "Git",
      logo: logos.git,
      categoria: "DevOps",
      nivel: "Avançado",
      cor: "#F05032",
      descricao: "Workflows, Branching, Collaboration"
    },
    {
      nome: "GitHub",
      logo: logos.github,
      categoria: "DevOps",
      nivel: "Avançado",
      cor: "#181717",
      descricao: "Repositories, Actions, Pull Requests"
    },
    {
      nome: "Vercel",
      logo: logos.vercel,
      categoria: "DevOps",
      nivel: "Avançado",
      cor: "#000000",
      descricao: "Deploy automático, Edge Functions"
    },
    {
      nome: "Render",
      logo: logos.render,
      categoria: "DevOps",
      nivel: "Intermediário",
      cor: "#46E3B7",
      descricao: "Cloud hosting, Backend deploy"
    }
  ];

  const categorias = ["Todos", "Frontend", "Backend", "Database", "DevOps", "Full Stack"];
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  const tecnologiasFiltradas = filtroAtivo === "Todos" 
    ? tecnologias 
    : tecnologias.filter(tech => tech.categoria === filtroAtivo);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.tech-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [tecnologiasFiltradas]);

  const getNivelCor = (nivel) => {
    switch(nivel) {
      case "Avançado": return "#4CAF50";
      case "Intermediário": return "#FF9800";
      case "Básico": return "#2196F3";
      default: return "#666";
    }
  };

  return (
    <section className='tecnologias' id="tecnologias">
      <div className="tech-header">
        <div className="header-content">
          <h1>🚀 Stack Tecnológico</h1>
          <p>Mais de <strong>10 anos</strong> desenvolvendo com tecnologias modernas</p>
          <div className="stats-mini">
            <span>15+ Tecnologias</span>
            <span>4 kyu CodeWars</span>
            <span>Top 10%</span>
          </div>
        </div>
        <div className="tech-animation">
          <div className="orbit">
            <div className="planet react-planet"></div>
            <div className="planet js-planet"></div>
            <div className="planet node-planet"></div>
          </div>
        </div>
      </div>

      <div className="filtros">
        {categorias.map(categoria => (
          <button 
            key={categoria}
            className={`filtro-btn ${filtroAtivo === categoria ? 'ativo' : ''}`}
            onClick={() => setFiltroAtivo(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="tech-grid">
        {tecnologiasFiltradas.map((tech, index) => (
          <div 
            key={tech.nome}
            data-index={index}
            className={`tech-card ${visibleCards.has(index) ? 'visible' : ''}`}
            style={{ '--delay': `${index * 0.1}s`, '--cor-principal': tech.cor }}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className="tech-logo">
                  <img src={tech.logo} alt={tech.nome} />
                  <div className="logo-glow"></div>
                </div>
                <h3>{tech.nome}</h3>
                <div className="categoria-badge" style={{ backgroundColor: tech.cor }}>
                  {tech.categoria}
                </div>
              </div>
              
              <div className="card-back">
                <div className="nivel-container">
                  <div className="nivel" style={{ color: getNivelCor(tech.nivel) }}>
                    {tech.nivel}
                  </div>
                  <div className="nivel-bar">
                    <div 
                      className="nivel-fill" 
                      style={{ 
                        width: tech.nivel === 'Avançado' ? '90%' : tech.nivel === 'Intermediário' ? '70%' : '50%',
                        backgroundColor: getNivelCor(tech.nivel)
                      }}
                    ></div>
                  </div>
                </div>
                <p>{tech.descricao}</p>
                <div className="tech-footer">
                  <span className="experiencia">2+ anos</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="tech-extras">
        <h3>🎯 Especialidades</h3>
        <div className="especialidades">
          <div className="esp-item">
            <span className="esp-icon">🧠</span>
            <div>
              <h4>Machine Learning</h4>
              <p>Perceptron, Algoritmos de Otimização</p>
            </div>
          </div>
          <div className="esp-item">
            <span className="esp-icon">⚡</span>
            <div>
              <h4>Performance</h4>
              <p>Otimização de código e algoritmos</p>
            </div>
          </div>
          <div className="esp-item">
            <span className="esp-icon">🎮</span>
            <div>
              <h4>Algoritmos Avançados</h4>
              <p>IA para jogos, lógica complexa</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Tecnologias;