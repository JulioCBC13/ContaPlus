import React,{ useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../img/Ingresos datos.png";
import "../../img/ingresos.jpg";

export const IngresosDatos = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=>{
    actions.loadIngresos();
  },[])

  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Ingresos datos.png" alt="Servicios" />
      </div>      
      <br/><br/>
      <div>
        <h1>Datos de las Certificaciones de Ingresos solicitadas:</h1>
        </div>
      <div className="valores d-flex flex-row">
      <br/><br/>
        {store.listaIngresos.map((solicitud,index)=>
       <div className="card5 mx-3" key={index}>
       <div className="card5-body px-2 py-2">
       <h5 className="card5-title"><u>Solicitud N°:</u> {index+1}</h5>
       <h5 className="card5-title"><u>Hecha por:</u> {solicitud.completeName}</h5>
       <h5 className="card5-title"><u>Cédula:</u> {solicitud.cedula}</h5>
       <h5 className="card5-title"><u>Promedio mensual de ingresos:</u> {solicitud.promedioMensual}</h5>
       <h5 className="card5-title"><u>Profesión u ocupación:</u> {solicitud.ocupacion}</h5>
       <button className="btn procesar">Procesar</button>
       </div>
       </div>   
        )  } 
      </div>
      <br/><br/>
    </div>
  );
};
