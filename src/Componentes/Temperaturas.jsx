export function Temperaturas({ Temp, Hora }) {
  return (
    <div>
      <h4 style={{ margin: "1px", padding: "1px", fontSize: "16px" }}>
        {Hora}hs
      </h4>
      <h6>{Temp}°</h6>
    </div>
  );
}
