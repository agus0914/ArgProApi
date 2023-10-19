export function TemperaturasDiaria({ Datos }) {
  console.log(Datos);

  const Hora = Datos.Hora;

  const ListaHoras = Datos.ListaDeHoras;

  const horas = ListaHoras.map((e) => e.split("T")[1].split(":")[0]);

  const temp = Datos.Temperaturas;

  const lista = horas.map((Hora) => (
    <div className="TempHora" key={Hora}>
      <h4 className="HorasTemp">
        {horas[horas.indexOf(Hora)]}hs
      </h4>
      <h6>{temp[horas.indexOf(Hora)]}°</h6>
    </div>
  ));

  return <div className="Temperaturas">{lista}</div>;
}
