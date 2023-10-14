import Logos from "../Componentes/Logos.json";

import TemDiaria from "../Imagenes/TemperaturaDiaria.svg";

import TempMax from "../Imagenes/TemperaturaMax.svg";

import TempMin from "../Imagenes/TemperaturaMin.svg";

import Humedad from "../Imagenes/Humedad.svg";

import Viento from "../Imagenes/Viento.svg";

import Salida from "../Imagenes/Amanecer.svg";

import Puesta from "../Imagenes/Atardecer.svg";

import Presion from "../Imagenes/Presion.svg"

// import Contaminacion from "../Imagenes/Contaminacion.svg";
import Visibilidad from "../Imagenes/Visibilidad.svg";

import Precipitaciones from "../Imagenes/Precipitaciones.svg";
import UV from "../Imagenes/IndiceUV.svg";

 export const SetearDatos = (Data) => {
  const fecha = new Date(Data.current.time.split("T")[0]);

  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const diaSemana = semana[fecha.getUTCDay()];
  const fechaDia =  fecha.getUTCDate()+"/"+(fecha.getUTCMonth()+1);

  const hora = Data.current.time.split("T")[1];

  const logo = Logos[Data.current.weathercode].image_src;

  const horaredondeada = Data.current.time
    .slice(0, 14)
    .padEnd(16, "0");

  const indiceHora = Data.hourly.time.indexOf(horaredondeada);

  const VisibilidadKm = Data.hourly.visibility[indiceHora] / 1000;

  const DatosFiltrados = {
    ClimaSup: {
      TempIndividuales: {
        Dia: {
          DiaSemana: [diaSemana,fechaDia],
          Hora: hora,
          Unidad: " hs",
          Logo: logo,
        },

        TempActual: {
          Titulo: "Temperatura Actual",
          Valor: Data.current.temperature_2m,
          Unidad: Data.hourly_units.temperature_2m,
          Logo: TemDiaria,
        },
      },

      TempVarias: {
        TempMax: {
          Titulo: "Temperatura Max",
          Valor: Data.daily.temperature_2m_max,
          Unidad: Data.daily_units.temperature_2m_max,
          Logo: TempMax,
          Tamaño: "Grande",
          Fondo: "Clara",
        },
        TempMin: {
          Titulo: "Temperatura Min",
          Valor: Data.daily.temperature_2m_min,
          Unidad: Data.daily_units.temperature_2m_min,
          Logo: TempMin,
          Tamaño: "Grande",
          Fondo: "Clara",
        },
        Humedad: {
          Titulo: "Humedad",
          Valor: Data.hourly.relativehumidity_2m[indiceHora],
          Unidad: Data.hourly_units.relativehumidity_2m,
          Logo: Humedad,
          Tamaño: "Chica",
          Fondo: "Clara",
        },
        Precipitaciones: {
          Titulo: "Precipitaciones",
          Valor: Data.hourly.precipitation_probability[indiceHora],
          Unidad: Data.hourly_units.precipitation_probability,
          Logo: Precipitaciones,
          Tamaño: "Chica",
          Fondo: "Clara",
        },
        Viento: {
          Titulo: "Viento",
          Valor: Data.daily.windspeed_10m_max,
          Unidad: " " + Data.daily_units.windspeed_10m_max,
          Logo: Viento,
          Tamaño: "Chica",
          Fondo: "Oscura",
        },
      },
    },

    TemDiaria: {
      Hora: hora,
      ListaDeHoras: Data.hourly.time,
      Temperaturas: Data.hourly.temperature_2m,
    },
    DatosInferiores: {
      Salida: {
        Valor: Data.daily.sunrise.toString().split("T")[1],
        Unidad: " hs",
        Imagen: Salida,
      },
      Puesta: {
        Valor: Data.daily.sunset.toString().split("T")[1],
        Unidad: " hs",
        Imagen: Puesta,
      },
      DatoInferior: {
        UV: {
          Titulo: "Indice Rayos Ultra Violetas",
          Valor: Data.daily.uv_index_max,
          Imagen: UV,
          Oscuro: "",
        },

        // en esta seccion se buscarian las informaciones de las calidad del aire
          // como se tendria que hacer en una llamada aparte 
        // mas adelante en la cursada se realizara correctamente
      

      /*   CalidadAire: {
          Titulo: "Calidad del Aire",
          Valor: Data.hourly.european_aqi[indiceHora],
          Imagen: Contaminacion,
          Oscuro: "",
        }, */

        Presion : {
          Titulo : "Presión Atmosferica",
          Valor : Data.hourly.pressure_msl[indiceHora],
          Unidad : Data.hourly_units.pressure_msl,
          Imagen : Presion,
          Oscuro : "",
        },
        
        Visibilidad: {
          Titulo: "Visibilidad",
          Valor: VisibilidadKm,
          Unidad: " Km",
          Imagen: Visibilidad,
          Oscuro: "Oscura",
        },
      },
    },
  
}
return DatosFiltrados

}

