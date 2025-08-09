import "./App.css";
import Greeting from "./modules/Greeting";
import Portfolio from "./modules/Portfolio";
import Rodape from "./modules/Rodape";
import Servicos from "./modules/Servicos";
import Tecnologias from "./modules/Tecnologias";
import CanvasComponent from "./modules/canvas";
import Menu from "./modules/Menu";
function App() {
  return (
    <CanvasComponent>
      <div className="App">
        <main className="container canvas">
          <div className="scroll-indicator" id="scrollIndicator"></div>

          <Menu />
          <Greeting />
          <Tecnologias />
          <Servicos />
          <Portfolio />
          <Rodape />
          <a
            href="https://wa.me/+5511985540245"
            rel="noreferrer"
            className="whatsapp-fixo"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png"
              alt="WhatsApp"
            />
          </a>
        </main>
      </div>
    </CanvasComponent>
  );
}

export default App;
