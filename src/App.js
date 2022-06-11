import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"



function App() {
  return (
    <div className="App">
       <Header/>
        <Main/>
      <footer>
        <div>Sobre kibus</div>
        <div>politicas</div>
        <div>Logos redes sociales</div>
        <div>metodos de pago</div> 
      </footer> 
    </div>
  );
}

export default App;
