import Datos from "./Datos.json";
import { SalidaPuesta, DatoInferior } from "./ComponentesInferiores";
const MaxUV = Datos.daily.uv_index_max;
const Amanecer = Datos.daily.sunset.toString().split("T")[1];
const Atardecer = Datos.daily.sunset.toString().split("T")[1];

export function DatosInferiores({ Datos }) {
  const Salida = Datos.Salida;
  const Puesta = Datos.Puesta;
  const Inferior = Datos.DatoInferior;
  return (
    <div className="DatosInferiores">
      <div className="DatosSol">
        <p className="Titulo">"Puesta y salida" </p>
        <SalidaPuesta Valor={Salida.Valor} Imagen={Salida.Imagen} />

        <SalidaPuesta Valor={Puesta.Valor} Imagen={Puesta.Imagen} />
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
        Imagen={Inferior.Visibilidad.Imagen}
        Oscuro={Inferior.Visibilidad.Oscuro}
      />
    </div>
  );
}
