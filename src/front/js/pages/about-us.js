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
      <div className="last"></div>

      <section className="py-5">
        <ul className="timeline">
          <li className="timeline-item mb-5">
            <h5 className="fw-bold">Our company starts its operations</h5>
            <p className="text-muted mb-2 fw-bold">11 March 2020</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              necessitatibus adipisci, ad alias, voluptate pariatur officia
              repellendus repellat inventore fugit perferendis totam dolor
              voluptas et corrupti distinctio maxime corporis optio?
            </p>
          </li>

          <li className="timeline-item mb-5">
            <h5 className="fw-bold">First customer</h5>
            <p className="text-muted mb-2 fw-bold">19 March 2020</p>
            <p className="text-muted">
              Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
              aliquet laoreet sapien, eget pulvinar lectus maximus vel.
              Phasellus suscipit porta mattis.
            </p>
          </li>

          <li className="timeline-item mb-5">
            <h5 className="fw-bold">Our team exceeds 10 people</h5>
            <p className="text-muted mb-2 fw-bold">24 June 2020</p>
            <p className="text-muted">
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nulla ullamcorper arcu lacus, maximus
              facilisis erat pellentesque nec. Duis et dui maximus dui aliquam
              convallis. Quisque consectetur purus erat, et ullamcorper sapien
              tincidunt vitae.
            </p>
          </li>

          <li className="timeline-item mb-5">
            <h5 className="fw-bold">Earned the first million $!</h5>
            <p className="text-muted mb-2 fw-bold">15 October 2020</p>
            <p className="text-muted">
              Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
              et urna sit amet massa dapibus tristique non finibus ligula. Nam
              pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
              vulputate mattis.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};
