
import React from "react";
import receta1 from "../imagenes/pizzas/receta1.jpg"
import receta2 from "../imagenes/pizzas/receta2.jpg"
import receta3 from "../imagenes/pizzas/receta3.jpg"
import tureceta from "../imagenes/pizzas/tureceta.jpg"
import flechareceta from "../imagenes/flechareceta.jpg"

const Main =()=>{
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
            <button className="btn-receta">Tu Receta<img src={flechareceta}></img></button>
            <p className="recetareserva">Ayudanos a decidir nuestra nueva receta</p>
          </div>
          </div>

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
    )
};

export default Main;
