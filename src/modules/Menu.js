import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [activeSection, setActiveSection] = useState('greeting');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: 'greeting', label: 'Início', href: '#greeting' },
    { id: 'tecnologias', label: 'Tecnologias', href: '#tecnologias' },
    { id: 'servicos', label: 'Serviços', href: '#servicos' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'rodape', label: 'Contato', href: '#rodape' }
  ];

  // Detectar seção ativa baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset para ativar antes
      
      // Verificar se a página foi scrollada
      setIsScrolled(window.scrollY > 50);

      // Encontrar a seção ativa
      const sections = menuItems.map(item => {
        const element = document.getElementById(item.id.replace('#', ''));
        if (element) {
          return {
            id: item.id,
            offsetTop: element.offsetTop,
            offsetHeight: element.offsetHeight
          };
        }
        return null;
      }).filter(Boolean);

      // Determinar qual seção está ativa
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Detectar hash inicial na URL
    const hash = window.location.hash.replace('#', '') || 'greeting';
    setActiveSection(hash);

    // Adicionar listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', () => {
      const newHash = window.location.hash.replace('#', '') || 'greeting';
      setActiveSection(newHash);
    });

    // Executar uma vez para definir estado inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', () => {});
    };
  }, []);

  // Função para smooth scroll e definir ativo
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    
    // Atualizar URL
    window.history.pushState(null, '', `#${sectionId}`);
    
    // Definir seção ativa
    setActiveSection(sectionId);
    
    // Smooth scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Fechar menu mobile se estiver aberto
    setIsMobileMenuOpen(false);
  };

  // Toggle menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fechar menu mobile
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    

      {/* Menu Component */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="logo" onClick={(e) => handleLinkClick(e, 'greeting')}>
            Real Programador
          </a>

          <nav className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </nav>

          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

     
    </>
  );
};

export default Menu;