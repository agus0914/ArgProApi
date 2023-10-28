import "../src/Styles/Style.css";
import { ClimaPrincipal } from "./Componentes/ClimaPrincipal/ClimaPrincipal";
import { Colectivo } from "./Componentes/Transporte.jsx/Colectivo";

function App() {
  return (
    <div className="App">
      <ClimaPrincipal />
      <Colectivo />
    </div>
  );
}

export default App;
