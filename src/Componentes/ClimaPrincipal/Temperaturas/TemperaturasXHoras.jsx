export function TemperaturasDiaria({ Datos }) {

  const Hora = Datos.Hora;

  const ListaHoras = Datos.ListaDeHoras;

  const horas = ListaHoras.map((e) => e.split("T")[1].split(":")[0]);

  const temp = Datos.Temperaturas;

  const lista = horas.map((Hora) => (
    <div className="TempHora" key={Hora}>
      <p className="HorasTemp">
        {horas[horas.indexOf(Hora)]}</p>
      <p className="HorasTemp">{Math.round(temp[horas.indexOf(Hora)])}°</p>
    </div>
  ));

  return <div className="Temperaturas">{lista}</div>;
}
