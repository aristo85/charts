import { useState } from "react";
import { formatter } from "./service";
import { data1, data2, data3 } from "./constants/data";
import "./App.css";
import LineCharts from "./components/LineCharts";
import AreaCarts from "./components/AreaCarts";

function App() {
  const [chart, setchart] = useState("area");
  const mydata1 = formatter(data1.data);
  const mydata2 = formatter(data2.data);
  const mydata3 = formatter(data3.data);

  return (
    <>
      <h2>Динамики изменения рейта во времени</h2>
      <div className="btn-group">
        <button className="btn" onClick={() => setchart("linear")}>
          Liner Charts
        </button>
        <button className="btn" onClick={() => setchart("area")}>
          Area Charts
        </button>
      </div>
      {chart === "linear" ? (
        <LineCharts mydata1={mydata1} mydata2={mydata2} mydata3={mydata3} />
      ) : (
        <AreaCarts mydata1={mydata1} mydata2={mydata2} mydata3={mydata3} />
      )}
    </>
  );
}

export default App;
