import './App.css';
import Greeting from './modules/Greeting';
import Servicos from './modules/Servicos';
import Tecnologias from './modules/Tecnologias';
import CanvasComponent from './modules/canvas';
function App() {
  

  return (
    
<CanvasComponent>
  <div className='App'>
    
      <main className='container canvas'>
        <Greeting />
        <Tecnologias />
        <Servicos />
      </main>
  
    
  </div>
  </CanvasComponent>
    
  );
}

export default App;