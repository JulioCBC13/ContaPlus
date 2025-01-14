import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/services.css";
import "../../img/Servicios.png";
import "../../img/balance.jpg";
import "../../img/ingresos.jpg";
import "../../img/impuestos.png";
import "../../img/asesoria.jpg";
import "../../img/contaplus2.png";

export const Services = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
    actions.loadBalances();
  }, []);
  return (
    <div className="services">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Servicios.png" alt="Servicios" />
      </div>
      <div className="descripcion">
        <img src="balance.jpg" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
            Los balances personales son documentos contables que muestran
            información acerca de la situación financiera particular del
            solicitante, que incluye detalles debidamente ordenados acerca de
            los activos, pasivos y patrimonios que se poseen en un momento
            determinado.
          </h4>
          <form className="d-flex justify-content-start">
            {store.usuario && (
              <Link to="/balance">
                <button type="submit" className="btn">
                  Solicitar Balance Personal
                </button>
              </Link>
            )}
            {store.contador && (
              <Link to="/datos-balance">
                <button type="submit" className="btn">
                  Hay {store.listaBalances.length} solicitudes realizadas
                </button>
              </Link>
            )}
            <button type="submit" className="btn">
              Solicitud completada. Lista para descarga.
            </button>
          </form>
        </div>
      </div>
      <div className="descripcion2">
        <div className="texto1">
          <h4>
            Una certificación de ingresos es un documento que se emite para
            avalar y dar legitimidad a los ingresos del solicitante en un tiempo
            determinado. Para emitirlo se debe realizar una verificación de
            estados de cuenta bancarios, recibos de nómina o facturas de ventas
            que permitan corroborar que dichos ingresos son exactos y provienen
            de actividades lícitas.
          </h4>
          <form className="d-flex justify-content-start">
            {store.usuario && (
              <Link to="/ingresos">
                <button type="submit" className="btn btn-success">
                  Solicitar Certificación de Ingresos
                </button>
              </Link>
            )}
            {store.contador && (
              <Link to="/datos-ingresos">
                <button type="submit" className="btn">
                  Aviso de solicitud realizada
                </button>
              </Link>
            )}
            <button type="submit" className="btn">
              Solicitud completada. Lista para descarga.
            </button>
            <br />
            <br />
          </form>
        </div>
        <img src="ingresos.jpg" width="450" height="250" alt="images" />
      </div>
      <div className="descripcion">
        <img src="impuestos.png" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
            Las declaraciones de impuestos son documentos que se presentan ante
            los organimos de recaudación gubernamentales. Éstos deben reflejar
            la cantidad de ingresos obtenidos durante el último año, de modo que
            en base a ellos se calcule la cantidad de tributos a cancelar por el
            contribuyente.
          </h4>
          <form className="d-flex justify-content-start">
            {store.usuario && (
              <Link to="/impuestos">
                <button type="submit" className="btn btn-success">
                  Solicitar Declaración de Impuestos
                </button>
              </Link>
            )}
            {store.contador && (
              <Link to="/datos-impuestos">
                <button type="submit" className="btn">
                  Aviso de solicitud realizada
                </button>
              </Link>
            )}
            <button type="submit" className="btn">
              Solicitud completada. Lista para descarga.
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
      <div className="descripcion2">
        <div className="texto1">
          <h4>
            Si desea recibir asesoría personalizada en el área financiera o
            desea despejar dudas en cualquier otra área, puede agendar una cita
            virtual con nuestro personal, quien le atenderá gustosamente,
            poniendo a su disposición todo nuestro apoyo para ayudarle a
            solventar sus necesidades en el menor tiempo posible y sin tener que
            dirigirse a ningún sitio.
          </h4>
          <form className="d-flex justify-content-start">
            {store.usuario && (
              <Link to="/asesoria">
                <button type="submit" className="btn btn-success">
                  Solicitar Asesoría Personalizada
                </button>
              </Link>
            )}
            {store.contador && (
              <Link to="/datos-asesoria">
                <button type="submit" className="btn">
                  Aviso de solicitud realizada
                </button>
              </Link>
            )}
            <button type="submit" className="btn">
              Solicitud completada. Lista para descarga.
            </button>
            <br />
            <br />
          </form>
        </div>
        <img src="asesoria.jpg" width="450" height="250" alt="images" />
      </div>
      <div>
        <br />
        <br />
      </div>
    </div>
  );
};
