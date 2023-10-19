export function DatoInferior({ Titulo, Valor,Unidad, Imagen, Oscuro }) {
  return (
    <div className="SalidaYPuesta">
      <p className="Titulo">{Titulo}</p>
      <div className="Datos">
        <h1 className="Valores">{Valor} {Unidad} </h1>
        <img
          className={"Imagen" + Oscuro}
          src={Imagen}
          alt={"Simbolo " + Imagen}
        />
      </div>
    </div>
  );
}

export function SalidaPuesta({ Valor, Imagen , Unidad}) {
  return (
    <div className="Datos">
      <h2 className="Valores">{Valor} {Unidad}</h2>
      <img
        className="Imagen"
        src={Imagen}
        alt={"Simbolo" + Imagen}
      />
    </div>
  );
}
