import Soleado from "../Imagenes/Soleado.png";
import Humedad from "../Imagenes/Humedad.png";
import Precipitaciones from "../Imagenes/Precipitaciones.png";
import Viento from "../Imagenes/Viento.png";
import UV from "../Imagenes/UV.jpeg";
import Calidad from "../Imagenes/CalidadAire.png";
import Neblibla from "../Imagenes/Neblina.png";
import Salida from "../Imagenes/Sunrise.png";
import Puesta from "../Imagenes/Sunset.png";
import Temperatura from "../Imagenes/Temperatura.jpg";
import Max from "../Imagenes/Max.png"
import Min from "../Imagenes/Min.png"
import styled from "styled-components";

export function ClimaSup() {
  return (
    <div className="ClimaSup">
      <div className="izq">
        <p>Lunes 17:00 hs</p>
        <div>
          <img
            src={Soleado}
            alt="Simbolo Soleado"
            style={{ height: 150, height: 200 }}
          />
        </div>
      </div>

      <div className="DatosTemp">
        <p>Temperatura actual</p>
          <h1>15°</h1>
          <img
            src={Temperatura}
            alt="Simbolo Temperatura"
            style={{ height: 200 ,width:200}}
          />
      </div>

      <div className="medio1">
      <p>Temperatura Max</p>
        <div className="Datos">
          <h1>28°</h1>
          <img src={Max} alt="Simbolo Temperatura Max" style={{height:100}} />
        </div>

        <p>Temperatura Min</p>
        <div className="Datos">
          <h1>-5°</h1>
          <img src={Min} alt="Simbolo Temperatura Min" style={{height:100}} />
        </div>
      </div>

      <div className="der">
      <p>Humedad</p>
        <div className="Datos">
          <h1>12%</h1>
          <img src={Humedad} alt="Simbolo Humedad" style={{ height: 50 }} />
        </div>

        <p>Precipitaciones</p>
        <div className="Datos">
          <h1>10%</h1>
          <img
            src={Precipitaciones}
            alt="Simbolo Precipitaciones"
            style={{ height: 50 }}
          />
        </div>

        <p>Viento</p>
        <div className="Datos">
          <h2>3.25 Km/h</h2>
          <img src={Viento} alt="Simbolo Viento" style={{ height: 50 }} />
        </div>
      </div>
    </div>
  );
}

function TemperaturasDiarias() {
  return <div className="Temperaturas">Tabla de Temperaturas Diarias</div>;
}

function DatosInferiores() {
  return (
    <div className="DatosInferiores">
      <div className="DatosInf">
        <p>Puesta y salida</p>
        <div className="Datos">
          <h3>7:45 hs</h3>
          <img
            src={Salida}
            alt="Simbolo Salida del Sol"
            style={{ height: 100 }}
          />
        </div>
        <div className="Datos">
          <h3>20:30 hs</h3>
          <img
            src={Puesta}
            alt="Simbolo Puesta del Sol"
            style={{ height: 100 }}
          />
        </div>
      </div>

      <div className="DatosInf">
        <p>Indice Rayos Ultra Violetas</p>
        <div className="Datos">
          <h1>6</h1>
          <img
            src={UV}
            alt="Simbolo Rayos UV"
            style={{ height: 100, alignItems: "baseline" }}
          />
        </div>
      </div>

      <div className="DatosInf">
        <p>Calidad del Aire</p>
        <div className="Datos">
          <h1>35</h1>
          <img
            src={Calidad}
            alt="Simbolo Calidad de aire"
            style={{ height: 100 }}
          />
        </div>
      </div>

      <div className="DatosInf">
        <p>Visibilidad</p>
        <div className="Datos">
          <h1>10%</h1>
          <img src={Neblibla} alt="Simbolo Neblina" style={{ height: 100 }} />
        </div>
      </div>
    </div>
  );
}

export function ClimaPrincipal() {
  return (
    <>
      <ClimaSup />
      <TemperaturasDiarias />
      <DatosInferiores />
    </>
  );
}
