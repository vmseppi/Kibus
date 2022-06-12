
import React from "react";
import receta1 from "../imagenes/pizzas/receta1.jpg"
import receta2 from "../imagenes/pizzas/receta2.jpg"
import receta3 from "../imagenes/pizzas/receta3.jpg"
import tureceta from "../imagenes/pizzas/tureceta.jpg"
import flechareceta from "../imagenes/flechareceta.jpg"
import BoostrapCarousel  from "./BoostrapCarousel"
import arrow from "../imagenes/arrow.jpg"
import Programas from "../imagenes/programas/Programas.jpg"
import Programas2 from "../imagenes/programas/Programas2.jpg"
import Programas3 from "../imagenes/programas/Programas3.jpg"
import Programas4 from "../imagenes/programas/Programas4.jpg"
import Programas5 from "../imagenes/programas/Programas5.jpg"
import Programas6 from "../imagenes/programas/Programas6.jpg"
import MaquinaPrograma from "../imagenes/programas/MaquinaPrograma.jpg"


const Main =()=>{
  const scrollearPag = (e)=>{
    window.scrollTo({ top: 2500, behavior: 'smooth' })
  }
    return(
        <main className="recetascontenedor">    
        <div className='slider'>
          <div className='receta' >
            <img className='pizza'src={receta1} alt='pizza'></img>
            <div className="descripcionpizzas">
            <h5 className="titulopizzas">Pollo y Pimiento</h5>
            <p className="descripcionreceta">Energética, con ingredientes antioxidantes</p>
            </div>
          </div>
          <div className='receta' >
          <img className='pizza' src={receta2} alt='pizza'></img>
          <div className="descripcionpizzas">
            <h5 className="titulopizzas" >Salmon y Arroz </h5>
            <p className="descripcionreceta">Ipoalergénica, con Omega 3 y 6</p>
            </div>  
          </div>
          <div className='receta'>
          <img className='pizza' src={receta3} alt='pizza'></img>
          <div className="descripcionpizzas">
            <h5 className="titulopizzas">Cerdo Y Calabaza </h5>
            <p className="descripcionreceta">para dar vitalidad buena para el sistema inmune</p>
            </div>  
          </div>
          <div className="receta">
          <div className='recetareserva'>
          <img className='pizza' src={tureceta} alt='pizza'></img>
          </div>
          <div className="descripcionrecetaboton">
            <button className="btn-receta">Tu Receta<img src={flechareceta} alt="flecha"></img></button>
            <p className="recetareserva">Ayudanos a decidir nuestra nueva receta</p>
          </div>
          </div>
        </div>
        <section className='section1'>
          <div className="contenedorcarousel">
          <BoostrapCarousel/>
          </div>
          <div className="parrafoexplicacion">
            <p className="tituloexplicacion">Mejor para ellos,mas facil y comodo para ti</p>
            <p className='parrafosection1'>
            Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta sana y natural a tu perro de forma cómoda y rápida. Nuestro dispositivo cocina automáticamente la cantidad exacta en cada comida e incluso lo puedes programar a través de la app. Tu perro disfrutará comida de casera de primera calidad, con el mínimo esfuerzo.
            </p>
            <div className="contenedorbtnsection1">
            <button onClick={ scrollearPag } className='reserva'>Reserva Ahora</button>
            <button className='more'>Quiero Saber Mas <img src={arrow} alt= 'flecha' className='flecha'></img></button>
          </div>
          </div>
        </section>
        <section className='section2'>
          <div className='programaskibus'>
          <img src={Programas} alt="programas"></img>
          <img src={Programas2} alt="programas"></img>
          <img src={Programas3} alt="programas"></img>
          <img src={Programas4} alt="programas"></img>
          <img src={Programas5} alt="programas"></img>
          <img src={Programas6} alt="programas"></img>
          </div>
          <div className='maquina'>
            <img src={MaquinaPrograma} className="maquinaprograma" alt="maqina"></img>
          </div>
        </section>
      </main>
    )
};

export default Main;
