import styled from "styled-components";

// opcion de usar styled con condicionantes pero no funciono
// Seguire imvestigando la posibilidad en el futuro
const Imagen = styled.img`
  height: ${(props) =>
    props.Grande === "150 px" || props.Mediano === "100px" || "50px"};
  /* background: ${(props) =>
    props.Oscuro === "Oscuro" ? "#00000059" : "#ffffffe6"};
    */
`;

//Componente para las dos primeras muestras de temperaturas individuales

export function TempIndividuales({ Titulo, Valor, Unidad, Logo }) {
  return (
    <div className="Temperatura">
      <p className="Titulo">{Titulo}</p>
      <h1 className="Valores">
        {Valor}
        {Unidad}
      </h1>

      <img
        className="Imagen"
        src={Logo}
        alt={"Simbolo de " + Imagen}
        style={{ height: 150 }}
      />
    </div>
  );
}

// Componente para mostrar las temperaturas separadas pero en un mismo div
// En esta opcion se agrega el prop de tamaño y fondo para definir su estilo de imagen ya que son distintos
// Era lo que queria intentar con Styled Component

export function TempVarias({ Titulo, Valor, Unidad, Logo, Tamaño, Fondo }) {
  return (
    <>
      <p className="Titulo">{Titulo}</p>
      <div className="Datos">
        <h1 className="Valores">
          {Valor}
          {Unidad}
        </h1>
        <img className={"Imagen" + Tamaño + Fondo} src={Logo} />
      </div>
    </>
  );
}
