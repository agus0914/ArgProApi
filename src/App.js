import "./Componentes/Style.css";
import { ClimaPrincipal } from "./Componentes/ClimaPrincipal";
import { Colectivo } from "./Componentes/Colectivo";

function App() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
 var Datos = fetch("https://api.open-meteo.com/v1/forecast?latitude=-39.9587&longitude=-71.0854&hourly=temperature_2m&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  return (
    <div className="App">
      <ClimaPrincipal {...Datos} />
      <Colectivo />
    </div>
  );
}

export default App;
