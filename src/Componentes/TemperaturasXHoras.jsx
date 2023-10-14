export function TemperaturasDiaria({ Datos }) {
  console.log(Datos);

  const Hora = Datos.Hora;

  const ListaHoras = Datos.ListaDeHoras;

  const horas = ListaHoras.map((e) => e.split("T")[1].split(":")[0]);

  const temp = Datos.Temperaturas;

  const lista = horas.map((Hora) => (
    <div key={Hora}>
      <h4 style={{ margin: "1px", padding: "1px", fontSize: "16px" }}>
        {horas[horas.indexOf(Hora)]}hs
      </h4>
      <h6>{temp[horas.indexOf(Hora)]}°</h6>
    </div>
  ));

  return <div className="Temperaturas">{lista}</div>;
}
