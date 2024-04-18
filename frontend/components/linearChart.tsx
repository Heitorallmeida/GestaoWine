import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Semana 1',
    vendas: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: 'Semana 2',
    vendas: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: 'Semana 3',
    vendas: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: 'Semana 4',
    vendas: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: 'Semana 5',
    vendas: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: 'Semana 6',
    vendas: 23,
    pv: 38,
    amt: 25,
  },
];

type LinearChartProps ={
  data: any[] | undefined;
}
export default function LinearGasChart (props: LinearChartProps) {
  return (
    <ResponsiveContainer width="95%" height="90%">
      <LineChart
        width={400}
        height={220}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="vendas" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/* <Line type="monotone" dataKey="vendas" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}