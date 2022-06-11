import './App.css';
import kibus from "./imagenes/kibus.jpg"
import ownerdog from "./imagenes/ownerdog.jpg"
import arrow from "./imagenes/arrow.jpg"

function App() {
  return (
    <div className="App">
       <header>
        <div className='contenedorlogo'>
        <img className='logokibus' src={kibus} alt="My Happy SVG" />
        </div>
        <div className='contenedorheader'>
        <div className='contenedorizq'>
        <h4 className='titulos'>Alimentar bien a tu perro es mas facil que nunca</h4>
        <p className='alimentacion'>La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a tu compañero comida sana, rica y recién cocinada de una forma fácil y cómoda</p>
        </div> 
        <div className='contenedorimg'>
          <img className='ownerdog' src={ownerdog} alt='ownerdog'/> 
        </div>
        <div className='contenedorbotones'>
        <button className='reserva'>Reserva Ahora</button>
        <button className='more'>Quiero Saber Mas <img src={arrow} alt= 'flecha' className='flecha'></img></button>
        </div>
        </div>
       </header>
     {/*  <main>
        <div className='slider'>
          <></>
          <></>
          <></>
          <></>
        </div>
        <section className='section1'>
          <div>perro</div>
          <div>
            <title>Mejor para ellos,mas facil y comodo para ti</title>
            <p className='parrafosection1'></p>
            <button>Reserva Ahora</button>
            <button>Quiero Saber Mas + icono play</button>
          </div>
        </section>
        <section className='section2'>
          <div className='programaskibus'>
          <></>
          <></>
          <></>
          <></>
          </div>
          <div className='maquina'>
            <img alt=''/> 
            <img alt=''/> 
          </div>
        </section>
      </main>
      <footer>
        <div>Sobre kibus</div>
        <div>politicas</div>
        <div>Logos redes sociales</div>
        <div>metodos de pago</div> 
      </footer> */}
    </div>
  );
}

export default App;
