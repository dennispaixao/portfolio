import './App.css';
import Greeting from './modules/Greeting';
import Servicos from './modules/Servicos';
import Tecnologias from './modules/Tecnologias';
function App() {
  

  return (
    <div className='App'>
    <main className='container'>
      <Greeting />
      <Tecnologias />
      <Servicos />
      </main>
    </div>
    
  );
}

export default App;