import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const finalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={finalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
