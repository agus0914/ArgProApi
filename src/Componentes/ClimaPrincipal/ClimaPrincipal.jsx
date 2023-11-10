import { ClimaSup } from "../ClimaPrincipal/ClimaSup/ClimaSup";
import { TemperaturasDiaria } from "./Temperaturas/TemperaturasXHoras";
import { DatosInferiores } from "./ClimaInferior/DatoInferior";
import { SetearDatos } from "../../Datos/DatosFiltrados"
import { Cargando } from "../Cargando";
import { useState, useEffect } from "react";

export function ClimaPrincipal() {
  const [Carga, setCarga] = useState(false);
  const [Datos, setDatos] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-39.9587&longitude=-71.0854&current=temperature_2m,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,pressure_msl,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1"
    )
      .then((response) => {
        while(!response.ok ){
          // Error
        }
        return response.json() } )
      .then((data) => {
        setDatos(SetearDatos(data));
        setCarga(true);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, []);

  return (
    <>
      {Carga === false ? (
       <Cargando />
      ) : (
        <div className="ClimaPrincipal">
          <ClimaSup Datos={Datos.ClimaSup} />
          <TemperaturasDiaria Datos={Datos.TemDiaria} />
          <DatosInferiores Datos={Datos.DatosInferiores} />
        </div>
      )}
    </>
  );
}
