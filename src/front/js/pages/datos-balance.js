import React,{ useContext,useState,useEffect } from "react";
import { Context } from "../store/appContext";
import "../../img/Balance datos.png";
import "../../img/balance.jpg";
import "../../styles/datos-balance.css"

const myFunction = () => {
  let x = document.getElementById("myDiv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const Visible = ()=>{
  const [infoUsuario, setInfoUsuario] = useState("");

  return(
  <div>
  <br/>
  <input onChange={(e) => setInfoUsuario(e.target.files[0])} type="file"/>
  <br/><br/>
  <button className="btn procesar">Enviar Documento</button>
  </div>
  );
}

export const BalanceDatos = () => {
  const { store, actions } = useContext(Context);

  

  useEffect(()=>{
    actions.loadBalances();
  },[])

  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Balance datos.png" alt="Servicios" />
      </div>
      <br/><br/>
      <div>
        <h1>Datos de los Balances Personales solicitados:</h1>
        </div>
      <div className="valores d-flex flex-row">
        <br/><br/>
        {store.listaBalances.map((solicitud,index)=>
        <div className="card2 mx-3" key={index}>
        <div className="card2-body px-2 py-2">
        <h5 className="card2-title"><u>Solicitud N°:</u> {index+1}</h5>
        <h5 className="card2-title"><u>Hecha por:</u> {solicitud.completeName}</h5>
        <h5 className="card2-title"><u>Cédula:</u> {solicitud.cedula}</h5>
        <h5 className="card2-title"><u>Información Bancaria:</u><br/>
        <a href={solicitud.bancoInfo} target="_blank">
          <i className="fa-solid fa-file-pdf fa-2x"/>
        </a>
        </h5>
        <h5 className="card2-title"><u>Vehículos:</u> {solicitud.vehiculosAmount}</h5>
        <h5 className="card2-title"><u>Propiedades:</u> {solicitud.propiedadesAmount}</h5>
        <button className="btn procesar" onClick={myFunction} >Procesar</button>
        <div id="myDiv">
        <Visible/>
        </div>
        </div>
        </div>  
        )}    
      </div>
      <br/><br/>
    </div>
  );
};
