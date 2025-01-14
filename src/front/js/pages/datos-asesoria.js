import React,{ useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../img/Asesoria datos.png";
import "../../img/asesoria.jpg";

export const AsesoriaDatos = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=>{
    actions.loadAsesorias();
  },[])
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Asesoria datos.png" alt="Servicios" />
      </div>
      <br/><br/>
      <div>
        <h1>Datos de la cita solicitada:</h1>
        </div>
      <div className="valores d-flex flex-row">
      <br/><br/>
      {store.listaAsesorias.map((solicitud,index)=>
       <div className="card4 mx-3" key={index}>
       <div className="card4-body px-2 py-2">
       <h5 className="card4-title"><u>Solicitud N°:</u> {index+1}</h5>
       <h5 className="card4-title"><u>Fecha:</u> {solicitud.date}</h5>
       <h5 className="card4-title"><u>Hora:</u> {solicitud.time}</h5>
       <h5 className="card4-title"><u>Motivo:</u> {solicitud.motivo}</h5>
       <button className="btn procesar">Procesar</button>
       </div>
       </div>  
      )} 
      </div>
      <br/><br/>
    </div>
  );
};
