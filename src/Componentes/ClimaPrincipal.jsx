import { ClimaSup } from "./ClimaSup";
import { TemperaturasDiaria } from "./TemperaturasXHoras";
import { DatosInferiores } from "./DatoInferior";
import { DatosFiltrados } from "../Componentes/DatosFiltrados";

export function ClimaPrincipal() {
  return (
    <div className="ClimaPrincipal">
      <ClimaSup Datos={DatosFiltrados.ClimaSup} />
      <TemperaturasDiaria Datos={DatosFiltrados.TemDiaria} />
      <DatosInferiores Datos={DatosFiltrados.DatosInferiores} />
    </div>
  );
}
