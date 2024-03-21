
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
export default function GestBarChart () {
    const data = [
        {
          "name": "Gas 1",
          "vendas": 77,
        },
        {
          "name": "Gas 2",
          "vendas": 99,
        },
        {
          "name": "Gas 3",
          "vendas": 45,
        },
        {
          "name": "Agua",
          "vendas": 23,
        },
      ]
    return <BarChart width={window.innerWidth - 200} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="vendas" fill="#82ca9d" />
            </BarChart>
}