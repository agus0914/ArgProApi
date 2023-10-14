import { SalidaPuesta, DatoInferior } from "./ComponentesInferiores";

export function DatosInferiores({ Datos }) {

  console.log(Datos);

  const Salida = Datos.Salida;
  const Puesta = Datos.Puesta;
  const Inferior = Datos.DatoInferior;
  return (
    <div className="DatosInferiores">
      <div className="DatosSol">
        <p className="Titulo">"Puesta y salida" </p>
        <SalidaPuesta
          Valor={Salida.Valor}
          Imagen={Salida.Imagen}
          Unidad={Salida.Unidad}
        />

        <SalidaPuesta
          Valor={Puesta.Valor}
          Imagen={Puesta.Imagen}
          Unidad={Puesta.Unidad}
        />
      </div>

      <DatoInferior
        Titulo={Inferior.UV.Titulo}
        Valor={Inferior.UV.Valor}
        Imagen={Inferior.UV.Imagen}
        Oscuro={Inferior.UV.Oscuro}
      />

      {// en esta seccion se encontraria la informacion de la calidad del aire
      // pero como se tendria que hacer una segunda peticion aparte 
      // mas adelante en la cursada se consultara para poder hacerla
       }

      {/* <DatoInferior
        Titulo={Inferior.CalidadAire.Titulo}
        Valor={Inferior.CalidadAire.Valor}
        Imagen={Inferior.CalidadAire.Imagen}
        Oscuro={Inferior.CalidadAire.Oscuro}
      /> */}

      <DatoInferior
      Titulo={Inferior.Presion.Titulo}
      Valor={Inferior.Presion.Valor}
      Unidad={Inferior.Presion.Unidad}
      Imagen={Inferior.Presion.Imagen}
      Oscuro={Inferior.Presion.Oscuro}
      />


      <DatoInferior
        Titulo={Inferior.Visibilidad.Titulo}
        Valor={Inferior.Visibilidad.Valor}
        Unidad={Inferior.Visibilidad.Unidad}
        Imagen={Inferior.Visibilidad.Imagen}
        Oscuro={Inferior.Visibilidad.Oscuro}
      />
    </div>
  );
}
