import { useEffect, useState } from "react";
import InfoSublineas from "../../Datos/Lineas.json";

export function Opciones({ Linea, Pedido }) {
  const [ListaSublineas, setListaSublineas] = useState([]);
  const [Recorrido, setRecorrido] = useState(false);
  const [Marcador, setMarcador] = useState(1);
  let recorridos = [];
  let listaSublineas = [];

  useEffect(() => {
    for (let key in InfoSublineas[Linea]) {
      listaSublineas.push(key);
    }

    setListaSublineas(
      listaSublineas.map((sublinea) => (
        <option key={sublinea} value={sublinea}>
          {sublinea}
        </option>
      ))
    );
  }, [Linea]);

  const filtrarrecorridos = (recorrido) => {
    for (let bondi in InfoSublineas[Linea][recorrido]) {
      recorridos.push(bondi);
    }
    setRecorrido(
      recorridos.map((a, index) => (
        <option key={index} value={InfoSublineas[Linea][recorrido][a]}>
          {a}
        </option>
      ))
    );
  };

  if (!Linea) {
    return;
  } else if (Marcador === 1) {
    return (
      <>
        <select
          className="Valores"
          onChange={(e) => (filtrarrecorridos(e.target.value), setMarcador(2))}
        >
          <option>Sublinea</option>
          {ListaSublineas}
        </select>
      </>
    );
  } else if (Marcador === 2) {
    return (
      <>
        <select
          className="Valores"
          onChange={(e) => filtrarrecorridos(e.target.value)}
        >
          <option>Sublinea</option>
          {ListaSublineas}
        </select>
        <select className="Valores" onChange={(e) => Pedido(e.target.value)}>
          <option>Recorrido</option>
          {Recorrido}
        </select>
      </>
    );
  }
}
