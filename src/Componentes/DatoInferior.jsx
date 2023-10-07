import { SalidaPuesta, DatoInferior } from "./ComponentesInferiores";

export function DatosInferiores({ Datos }) {
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

      <DatoInferior
        Titulo={Inferior.CalidadAire.Titulo}
        Valor={Inferior.CalidadAire.Valor}
        Imagen={Inferior.CalidadAire.Imagen}
        Oscuro={Inferior.CalidadAire.Oscuro}
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
