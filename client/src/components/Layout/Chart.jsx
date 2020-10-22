import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const mapDataToChart = chartsData =>
  chartsData.map(data =>
    createData(data.fiscalYear, Math.floor(data.value / 1000000))
  );

export default function Chart(props) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      

        <LineChart  width={730} height={250}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        
          data={mapDataToChart(props.data)}

        >
          <XAxis dataKey="time"  />
          <YAxis />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            dot={false}
          />
        </LineChart>
      
    </React.Fragment>
  );
}
