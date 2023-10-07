export function DatoInferior({ Titulo, Valor, Imagen, Oscuro }) {
  return (
    <div className="DatosInf">
      <p className="Titulo">{Titulo}</p>
      <div className="Datos">
        <h1 className="Valores">{Valor}</h1>
        <img
          className={"Imagen" + Oscuro}
          src={Imagen}
          alt={"Simbolo " + Imagen}
          style={{ height: 100 }}
        />
      </div>
    </div>
  );
}

export function SalidaPuesta({ Valor, Imagen }) {
  return (
    <div className="Datos">
      <h2 className="Valores">{Valor}</h2>
      <img
        className="Imagen"
        src={Imagen}
        alt={"Simbolo" + Imagen}
        style={{ height: 100 }}
      />
    </div>
  );
}
