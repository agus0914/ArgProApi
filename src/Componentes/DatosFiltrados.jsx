import Datos from "../Componentes/Datos.json";

import Logos from "../Componentes/Logos.json";

import TemDiaria from "../Imagenes/TemperaturaDiaria.svg";

import TempMax from "../Imagenes/TemperaturaMax.svg";

import TempMin from "../Imagenes/TemperaturaMin.svg";

import Humedad from "../Imagenes/Humedad.svg";

import Viento from "../Imagenes/Viento.svg";

import Salida from "../Imagenes/Amanecer.svg";

import Puesta from "../Imagenes/Atardecer.svg";

import Contaminacion from "../Imagenes/Contaminacion.svg";
import Visibilidad from "../Imagenes/Visibilidad.svg";

import Precipitaciones from "../Imagenes/Precipitaciones.svg";
import UV from "../Imagenes/IndiceUV.svg";

const fecha = new Date(Datos.current_weather.time.split("T")[0]);

const semana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const diaSemana = semana[fecha.getDate()];

const hora = Datos.current_weather.time.split("T")[1];

const logo = Logos[Datos.current_weather.weathercode].image_src;

const horaredondeada = Datos.current_weather.time.slice(0, 14).padEnd(16, "0");

const indiceHora = Datos.hourly.time.indexOf(horaredondeada);

const VisibilidadKm = Datos.hourly.visibility[indiceHora] / 1000;

export const DatosFiltrados = {
  ClimaSup: {
    TempIndividuales: {
      Dia: {
        DiaSemana: diaSemana,
        Hora: hora,
        Unidad: "hs",
        Logo: logo,
      },

      TempActual: {
        Titulo: "Temperatura Actual",
        Valor: Datos.current_weather.temperature,
        Unidad: Datos.hourly_units.temperature_2m,
        Logo: TemDiaria,
      },
    },

    TempVarias: {
      TempMax: {
        Titulo: "Temperatura Max",
        Valor: Datos.daily.temperature_2m_max,
        Unidad: Datos.daily_units.temperature_2m_max,
        Logo: TempMax,
        Tamaño: "Grande",
        Fondo: "Clara",
      },
      TempMin: {
        Titulo: "Temperatura Min",
        Valor: Datos.daily.temperature_2m_min,
        Unidad: Datos.daily_units.temperature_2m_min,
        Logo: TempMin,
        Tamaño: "Grande",
        Fondo: "Clara",
      },
      Humedad: {
        Titulo: "Humedad",
        Valor: Datos.hourly.relativehumidity_2m[indiceHora],
        Unidad: Datos.hourly_units.relativehumidity_2m,
        Logo: Humedad,
        Tamaño: "Chica",
        Fondo: "Clara",
      },
      Precipitaciones: {
        Titulo: "Precipitaciones",
        Valor: Datos.hourly.precipitation_probability[indiceHora],
        Unidad: Datos.hourly_units.precipitation_probability,
        Logo: Precipitaciones,
        Tamaño: "Chica",
        Fondo: "Clara",
      },
      Viento: {
        Titulo: "Viento",
        Valor: Datos.daily.windspeed_10m_max,
        Unidad: Datos.daily_units.windspeed_10m_max,
        Logo: Viento,
        Tamaño: "Chica",
        Fondo: "Oscura",
      },
    },
  },

  TemDiaria: {
    Hora: hora,
    ListaDeHoras: Datos.hourly.time,
    Temperaturas: Datos.hourly.temperature_2m,
  },
  DatosInferiores: {
    Salida: {
      Valor: Datos.daily.sunset.toString().split("T")[1],
      Imagen: Salida,
    },
    Puesta: {
      Valor: Datos.daily.sunset.toString().split("T")[1],
      Imagen: Puesta,
    },
    DatoInferior: {
      UV: {
        Titulo: "Indice Rayos Ultra Violetas",
        Valor: Datos.daily.uv_index_max,
        Imagen: UV,
        Oscuro: "",
      },
      CalidadAire: {
        Titulo: "Calidad del Aire",
        Valor: Datos.hourly.european_aqi[indiceHora],
        Imagen: Contaminacion,
        Oscuro: "",
      },
      Visibilidad: {
        Titulo: "Visibilidad",
        Valor: VisibilidadKm,
        Imagen: Visibilidad,
        Oscuro: "Oscura",
      },
    },
  },
};
