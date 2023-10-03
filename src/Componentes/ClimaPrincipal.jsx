import Neblibla from "../Imagenes/Neblina.png";
import Salida from "../Imagenes/Amanecer.svg";
import Puesta from "../Imagenes/Atardecer.svg";
import { Temperaturas } from "./Temperaturas";
import Soleado2 from "../Imagenes/0-DespejadoDia.svg"
import TemDiaria from "../Imagenes/TemperaturaDiaria.svg"
import TempMax from "../Imagenes/TemperaturaMax.svg"
import TempMin from  "../Imagenes/TemperaturaMin.svg"
import Humedad from "../Imagenes/Humedad.svg"
import Precipitaciones from "../Imagenes/Precipitaciones.svg"
import Viento from "../Imagenes/Viento.svg"
import UV from "../Imagenes/IndiceUV.svg"
import Contaminacion from "../Imagenes/Contaminacion.svg"
import Visibilidad from "../Imagenes/Visibilidad.svg"
import Datos from "../Componentes/Datos.json"

const dia = new Date(Datos.current_weather.time.split("T")[0]) ;
const semana = ["Domingo" , "Lunes" , "Martes" , "Miercoles" , "Jueves" , "Viernes" , "Sabado"]


export function ClimaSup() {
  return (
    <div className="ClimaSup">
      <div className="izq">
        <p className="Titulo">{semana[dia.getDate()]}</p>
        <h1 className="Valores">{Datos.current_weather.time.split("T")[1]} hs</h1>
        <img
          className="Imagen"
          src={Soleado2}
          alt="Simbolo Soleado"
          style={{ height: 150, whidth: 150 }}
        />
      </div>

      <div className="DatosTemp">
        <p className="Titulo">Temperatura actual</p>
        <h1 className="Valores"> {Datos.current_weather.temperature}{Datos.hourly_units.apparent_temperature}</h1>
        <img
          className="Imagen"
          src={TemDiaria}
          alt="Simbolo Temperatura"
          style={{ height: 150, width: 150 }}
        />
      </div>

      <div className="medio1">
        <p className="Titulo">Temperatura Max</p>
        <div className="Datos">
          <h1 className="Valores"> {Datos.daily.temperature_2m_max}{Datos.daily_units.temperature_2m_max} </h1>
          <img
            className="Imagen"
            src={TempMax}
            alt="Simbolo Temperatura Max"
            style={{ height: 100 }}
          />
        </div>

        <p className="Titulo">Temperatura Min</p>
        <div className="Datos">
          <h1 className="Valores">{Datos.daily.temperature_2m_min}{Datos.daily_units.temperature_2m_min}
          </h1>
          <img
            className="Imagen"
            src={TempMin}
            alt="Simbolo Temperatura Min"
            style={{ height: 100 }}
          />
        </div>
      </div>

      <div className="der">
        <p className="Titulo">Humedad</p>
        <div className="Datos">
          <h1 className="Valores"> 10%</h1>
          <img
            className="Imagen"
            src={Humedad}
            alt="Simbolo Humedad"
            style={{ height: 50 }}
          />
        </div>

        <p className="Titulo">Precipitaciones</p>
        <div className="Datos">
          <h1 className="Valores">0%</h1>
          <img
            className="Imagen"
            src={Precipitaciones}
            alt="Simbolo Precipitaciones"
            style={{ height: 50 }}
          />
        </div>

        <p className="Titulo">Viento</p>
        <div className="Datos">
          <h2 className="Valores">{Datos.daily.windspeed_10m_max} {Datos.daily_units.windspeed_10m_max}</h2>
          <img
            className="ImagenOscura"
            src={Viento}
            alt="Simbolo Viento"
            style={{ height: 50 }}
          />
        </div>
      </div>
    </div>
  );
}

function TemperaturasDiarias1() {
  return (
    <div className="Temperaturas">
      <Temperaturas Hora={"00"} Temp={"0"} />

      <Temperaturas Hora={"01"} Temp={"0"} />

      <Temperaturas Hora={"02"} Temp={"0"} />

      <Temperaturas Hora={"03"} Temp={"-1"} />

      <Temperaturas Hora={"02"} Temp={"0"} />

      <Temperaturas Hora={"04"} Temp={"-2"} />

      <Temperaturas Hora={"05"} Temp={"-3"} />

      <Temperaturas Hora={"06"} Temp={"-4"} />

      <Temperaturas Hora={"07"} Temp={"-5"} />

      <Temperaturas Hora={"08"} Temp={"-5"} />

      <Temperaturas Hora={"09"} Temp={"-2"} />

      <Temperaturas Hora={"10"} Temp={"0"} />

      <Temperaturas Hora={"11"} Temp={"4"} />

      <Temperaturas Hora={"12"} Temp={"12"} />

      <Temperaturas Hora={"13"} Temp={"18"} />

      <Temperaturas Hora={"14"} Temp={"22"} />

      <Temperaturas Hora={"15"} Temp={"28"} />

      <Temperaturas Hora={"16"} Temp={"25"} />

      <Temperaturas Hora={"17"} Temp={"22"} />

      <Temperaturas Hora={"18"} Temp={"18"} />

      <Temperaturas Hora={"19"} Temp={"15"} />

      <Temperaturas Hora={"20"} Temp={"11"} />

      <Temperaturas Hora={"21"} Temp={"9"} />

      <Temperaturas Hora={"22"} Temp={"6"} />

      <Temperaturas Hora={"23"} Temp={"3"} />
    </div>
  );
}

function DatosInferiores() {
  return (
    <div className="DatosInferiores">
      <div className="DatosSol">
        <p className="Titulo">Puesta y salida</p>
        <div className="Datos">
          <h2 className="Valores">{Datos.daily.sunrise.toString().split("T")[1]} hs</h2>
          <img
            className="Imagen"
            src={Salida}
            alt="Simbolo Salida del Sol"
            style={{ height: 100 }}
          />
        </div>
        <div className="Datos">
          <h2 className="Valores"> {Datos.daily.sunset.toString().split("T")[1]} hs</h2>
          <img
            className="Imagen"
            src={Puesta}
            alt="Simbolo Puesta del Sol"
            style={{ height: 100 }}
          />
        </div>
      </div>

      <div className="DatosInf">
        <p className="Titulo">Indice Rayos Ultra Violetas</p>
        <div className="Datos">
          <h1 className="Valores"> {Datos.daily.uv_index_max} </h1>
          <img
            className="Imagen"
            src={UV}
            alt="Simbolo Rayos UV"
            style={{ height: 100, alignItems: "baseline" }}
          />
        </div>
      </div>

      <div className="DatosInf">
        <p className="Titulo">Calidad del Aire</p>
        <div className="Datos">
          <h1 className="Valores">35</h1>
          <img
            className="Imagen"
            src={Contaminacion}
            alt="Simbolo Calidad de aire"
            style={{ height: 100 }}
          />
        </div>
      </div>

      <div className="DatosInf">
        <p className="Titulo">Visibilidad</p>
        <div className="Datos">
          <h1 className="Valores">10%</h1>
          <img
            className="ImagenOscura"
            src={Visibilidad}
            alt="Simbolo Neblina"
            style={{ height: 100 }}
          />
        </div>
      </div>
    </div>
  );
}

export function ClimaPrincipal() {
  return (
    <div className="ClimaPrincipal">
      <ClimaSup />
      <TemperaturasDiarias1 />
      <DatosInferiores />
    </div>
  );
}
