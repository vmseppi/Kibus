import React from "react";
import kibusfoother from "../imagenes/foother/kibusfoother.jpg"
import facebook from "../imagenes/foother/facebook.jpg"
import instagram from "../imagenes/foother/instagram.jpg"
import youtube from "../imagenes/foother/youtube.jpg"
import mastercard from "../imagenes/foother/mastercard.jpg"
import visa from "../imagenes/foother/visa.jpg"
import applepay from "../imagenes/foother/applepay.jpg"
import googlepay from "../imagenes/foother/googlepay.jpg"
import Home from "./Home";


const Foother = ()=>{
    return(
        <footer className="fotherconteiner" id="foother ">
         <div className="contenedorfootherlogo">
        <img  className="imagenkibusfoother" src={kibusfoother} alt="kibusfoother"/>
         <div className="sobrekibus">
        <h2 className="kibusfoot">Sobre KIBUS</h2>
        </div>
        <p className="footherparrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
        <div className="contenedorpoliticasseg">
        <div className="kibusfoot">Políticas</div>
        <h3 className="footherparrafo">Politicas de Privacidad</h3>
        <h3 className="footherparrafo">Condiciones de uso</h3>
        <h3 className="footherparrafo">Cookies</h3>
        <h3 className="footherparrafo">FAQ</h3>
        </div>
        <div className="contenedorredosocial" >
            <img className="redsocial" src={facebook} alt="redsocial"></img>
            <img className="redsocial" src={instagram} alt="redsocial"></img>
            <img className="redsocial" src={youtube} alt="redsocial"></img>
        </div>
        <div className="metodosvarios">
            <div className="met" >
            <h3 className="metodosdepagofoother">Métods de pago</h3>
            </div>
            <div className="metodos">
             <div className="tarjetas"> 
            <img className="metodopago" src={mastercard} alt="metododepago"></img>
            </div>  
            <div className="tarjetas"> 
            <img className="metodopago" src={visa} alt="metododepago"></img>
            </div> 
            <div className="tarjetas"> 
            <img className="metodopago" src={applepay} alt="metododepago"></img>
            </div> 
            <div className="tarjetas"> 
            <img className="metodopago" src={googlepay} alt="metododepago"></img>
            </div> 
            </div>
        </div>
      </footer> 
    )
};
export default Foother;