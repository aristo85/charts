import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomizedAxisTick } from "../service";
import CustomTooltip from "./CustomTooltip";

const LineCharts = ({ mydata1, mydata2, mydata3 }) => {
  return (
    <>
      <ResponsiveContainer width="95%" aspect={2.5}>
        <LineChart>
          <CartesianGrid  opacity={0.1}  horizontal vertical="" color="#243240" />
          <XAxis
            dataKey={"date"}
            // scale="time"
            type="number"
            tickFormatter={CustomizedAxisTick}
            domain={["dataMin - 100", "dataMax + 100"]}
            tick={{ fill: "#fff" }}
          />
          <YAxis
            type="number"
            domain={[5, "dataMax + 10"]}
            tick={{ fill: "#fff" }}
            tickCount={10}
            tickFormatter={(number) => number.toFixed(0)}
          />
          {/* <Tooltip
            contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            cursor={false}
          /> */}
        <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            data={mydata1}
            type="monotone"
            dataKey="rate"
            name="rate1"
            stroke="#eb2689"
            dot={{ fill: "#2e4355", stroke: "#eb2689", strokeWidth: 2, r: 3 }}
            activeDot={{ r: 4 }}
            strokeWidth={2}
          />
          <Line
            data={mydata2}
            type="monotone"
            dataKey="rate"
            name="rate2"
            stroke="#82ca9d"
            dot={{ fill: "#2e4355", stroke: "#82ca9d", strokeWidth: 2, r: 3 }}
            activeDot={{ r: 4 }}
            strokeWidth={2}
          />
          <Line
            data={mydata3}
            type="monotone"
            dataKey="rate"
            name="rate3"
            stroke="#8884d8"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 3 }}
            activeDot={{ r: 4 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineCharts;
