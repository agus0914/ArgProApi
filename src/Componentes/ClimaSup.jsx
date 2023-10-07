import { TempIndividuales, TempVarias } from "../Componentes/ValoresSup";

export function ClimaSup({ Datos }) {
  const Dia = Datos.TempIndividuales.Dia;
  const Actual = Datos.TempIndividuales.TempActual;
  const Varias = Datos.TempVarias;

  return (
    <div className="ClimaSup">
      <TempIndividuales
        Titulo={Dia.DiaSemana}
        Valor={Dia.Hora}
        Unidad={"hs"}
        Logo={Dia.Logo}
      />

      <TempIndividuales
        Titulo={Actual.Titulo}
        Valor={Actual.Valor}
        Unidad={Actual.Unidad}
        Logo={Actual.Logo}
      />

      <div>
        <TempVarias
          Titulo={Varias.TempMax.Titulo}
          Valor={Varias.TempMax.Valor}
          Unidad={Varias.TempMax.Unidad}
          Logo={Varias.TempMax.Logo}
          Tamaño={Varias.TempMax.Tamaño}
          Fondo={Varias.TempMax.Fondo}
        />

        <TempVarias
          Titulo={Varias.TempMin.Titulo}
          Valor={Varias.TempMin.Valor}
          Unidad={Varias.TempMin.Unidad}
          Logo={Varias.TempMin.Logo}
          Tamaño={Varias.TempMin.Tamaño}
          Fondo={Varias.TempMin.Fondo}
        />
      </div>

      <div>
        <TempVarias
          Titulo={Varias.Humedad.Titulo}
          Valor={Varias.Humedad.Valor}
          Unidad={Varias.Humedad.Unidad}
          Logo={Varias.Humedad.Logo}
          Tamaño={Varias.Humedad.Tamaño}
          Fondo={Varias.Humedad.Fondo}
        />

        <TempVarias
          Titulo={Varias.Precipitaciones.Titulo}
          Valor={Varias.Precipitaciones.Valor}
          Unidad={Varias.Precipitaciones.Unidad}
          Logo={Varias.Precipitaciones.Logo}
          Tamaño={Varias.Precipitaciones.Tamaño}
          Fondo={Varias.Precipitaciones.Fondo}
        />

        <TempVarias
          Titulo={Varias.Viento.Titulo}
          Valor={Varias.Viento.Valor}
          Unidad={Varias.Viento.Unidad}
          Logo={Varias.Viento.Logo}
          Tamaño={Varias.Viento.Tamaño}
          Fondo={Varias.Viento.Fondo}
        />
      </div>
    </div>
  );
}
