import { useEffect, useState } from "react";
import InfoSublineas from "../../Datos/Lineas.json";

export function Opciones({ Linea, Pedido }) {
  const [ListaSublineas, setListaSublineas] = useState([]);
  const [Recorrido, setRecorrido] = useState(false);
  const [Marcador,setMarcador] = useState(0);
  let marcador2 = 0;
  let recorridos = [];
  let listaSublineas = [];
  let sublinesSelect;
useEffect (
  () => {

  },
  [Marcador,{Linea}]
)
  for (let key in InfoSublineas[Linea]) {
    listaSublineas.push(key);
    console.log(listaSublineas);
  }

  const opcionesSub = listaSublineas.map((sublinea) => (
    <option key={sublinea} value={sublinea}>
      {sublinea}
    </option>
  )
  );

  const filtrarrecorridos = (recorrido) => {
    sublinesSelect = recorrido;
    for (let bondi in InfoSublineas[Linea][recorrido]) {
      recorridos.push(bondi);
      console.log(recorridos);
      console.log(InfoSublineas[Linea][sublinesSelect][bondi]);
    }
    setMarcador(2);
  };

  const OpcionesRecorridos = recorridos.map((a) => (
    <option value={InfoSublineas[Linea][sublinesSelect][a]}>{a}</option>
  ));

  if (Marcador === 0) {
    return console.log("no se muestra nada");
  } else if (recorridos.length === 0 , listaSublineas.length !== 0) {
    return (
      <>
        {console.log(recorridos.length, listaSublineas.length)}
        <select
          onChange={(e) => (
            filtrarrecorridos(e.target.value),
            setMarcador(1),
            console.log(recorridos.length, listaSublineas.length)
          )}
        >
          {opcionesSub}
        </select>
      </>
    );
  } else if (Marcador === 2) {
    return (
      <>
        {console.log(recorridos.length, listaSublineas.length)}
        <select onChange={(e) => filtrarrecorridos(e.target.value)}>
          {opcionesSub}
        </select>
        <select onChange={(e) => Pedido(e.target.value)}>
          {OpcionesRecorridos}
        </select>
      </>
    );
  }
}
