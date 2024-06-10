"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
type GestBarChartProps = {
  data: any[] | undefined;
};
export default function GestBarChart(props: GestBarChartProps) {
  return (
    <ResponsiveContainer width="90%" height="70%">
      <BarChart height={250} data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="venda" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
