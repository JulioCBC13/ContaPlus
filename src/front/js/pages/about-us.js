import React, { useEffect } from "react";
import "../../styles/about-us.css";
import "../../img/About Us.png";
import "../../img/contaplus.png";
import "../../img/reunion.jpg";
import "../../img/contador 3.jpg";
import "../../img/Juan.jpg";
import "../../img/Julio.jpg";
import "../../img/Oscar.jpg";

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const arriba = ()=>{
    window.scrollTo(0,0);
  }

  return (
    <div className="about-us">
      <div className="title-page d-flex justify-content-center align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="images" />
        <br />
        <img src="About Us.png" alt="images" />
      </div>
      <div className="descripcion">
        <img src="contador 3.jpg" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
            Somos una empresa que busca dar respuesta oportuna a las necesidades
            de nuestros clientes en el área contable, a través de la prestación
            de servicios que le ahorran tiempo y dinero que resultan ser
            elementos muy valiosos para ellos en su día a día.
          </h4>
        </div>
      </div>
      <div className="descripcion2">
        <div className="texto1">
          <h4>
            Por ello nos enfocamos en el diseño de herramientas que les generen
            los documentos que necesitan con más frecuencia haciendo uso de las
            tecnologías web más potentes del momento, de manera que sus trámites
            puedan verse lo más agilizados posible. Pasa el mouse sobre ellos
            para conocerlos un poco más.
          </h4>
        </div>
        <img src="reunion.jpg" width="450" height="250" alt="images" />
      </div>
      <br />
      <div>
        <h1>Nuestro equipo:</h1>
      </div>
      <br />
      <br />
      <div className="box">
        <div className="card">
          <div className="imgBx">
            <img src="Juan.jpg" alt="images" />
          </div>
          <div className="details">
            <h2>
              Juan Cabrera
              <br />
              <span>Developer</span>
            </h2>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src="Julio.jpg" alt="images" />
          </div>
          <div className="details">
            <h2>
              Julio Blando
              <br />
              <span>Developer</span>
            </h2>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src="Oscar.jpg" alt="images" />
          </div>
          <div className="details">
            <h2>
              Oscar Alvarez
              <br />
              <span>Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row col-md-6 mx-auto d-flex flex-column align-items-center justify-content-center">
        <h2 className=" fs-1 mt-5 text-center">Y ahora... ¡Vamos por más!.</h2>
      </div>
      <div className="container mt-2 pt-5">
        <div className="main-timeline-4 text-black">
          <div className="timeline-4 left-4">
            <div className="card grounded-radiants">
              <div className="card-body p-2 d-flex flex-column align-items-center">
                <i className="ico fas fa-solid fa-plus fa-4x mb-3"></i>
                <h4>Create Account</h4>
                <p className="text-center">
                  Un equipo unido y comprometido con el desarrollo, en donde
                  vamos sumando esfuerzos cada dia más para metas futuras;
                  porque los buenos somos más.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-4 right-4">
            <div className="card grounded-radiants">
              <div className="card-body p-2 d-flex flex-column align-items-center">
                <i className="ico fa-solid fa-clipboard fa-4x mb-3"></i>
                <h4>Add Company</h4>
                <p className="text-center">
                  Seguimos tomando nota, ya esto en 2 meses sera afianzado para
                  el mejor servicio prestado; porque un mejor servicio es un
                  confort.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-4 left-4">
            <div className="card grounded-radiants">
              <div className="card-body p-2 d-flex flex-column align-items-center">
                <i className="ico fas fa-solid fa-box fa-4x mb-3"></i>
                <h4>Add Products</h4>
                <p className="text-center">
                  En 5 meses esto será una caja de sorpresas por las
                  funcionalidades y servicion que mejoraremos. ¡Adelante!
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-4 right-4">
            <div className="card grounded-radiants">
              <div className="card-body p-2 d-flex flex-column align-items-center">
                <i class="ico fa-regular fa-thumbs-up fa-4x mb-3"></i>
                <h4>Start Profiting</h4>
                <p className="text-center">
                  No queda mas que decir que ¡Gracias! contamos contigo...{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn procesar d-flex justify-content-center mt-5" onClick={arriba}>
          Ir arriba<br/>▲
        </button>
        <br/><br/>
    </div>
  );
};
