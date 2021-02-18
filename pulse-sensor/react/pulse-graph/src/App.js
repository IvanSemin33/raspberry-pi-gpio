import logo from "./logo.svg";
import "./App.css";
import Chart from "react-google-charts";
import { useEffect, useState } from "react";
import { getPulseData } from "./helpers/pulse-sensor";

const App = () => {
  
  const [data, setData] = useState(["x", "pulse-sensor"])

  useEffect(() => {
    getPulseData(data, setData)
  }, [])

  return (
    <div className="App">
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          hAxis: {
            title: "Time",
          },
          vAxis: {
            title: "Pulse",
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default App;
