import React,{ useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../img/Impuestos datos.png";
import "../../img/impuestos.png";

export const ImpuestosDatos = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=>{
    actions.loadImpuestos();
  },[])
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Impuestos datos.png" alt="Servicios" />
      </div>      
      <br/><br/>
      <div>
        <h1>Datos de la Declaración de Impuestos solicitada:</h1>
        </div>
      <div className="valores d-flex flex-row">
      <br/><br/>
      {store.listaImpuestos.map((solicitud,index)=>
       <div className="card3 mx-3" key={index}>
       <div className="card3-body px-2 py-2">
       <h5 className="card3-title"><u>Solicitud N°:</u> {index+1}</h5>
       <h5 className="card3-title"><u>Hecha por:</u> {solicitud.completeName}</h5>
       <h5 className="card3-title"><u>Cédula:</u> {solicitud.cedula}</h5>
       <h5 className="card3-title"><u>Ingresos:</u> {solicitud.ingresos}</h5>
       <h5 className="card3-title"><u>Costos:</u> {solicitud.costos}</h5>
       <h5 className="card3-title"><u>Gastos:</u> {solicitud.gastos}</h5>
       <button className="btn procesar">Procesar</button>
       </div>
       </div>   
        )  } 
      </div>
      <br/><br/>
    </div>
  );
};
