
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
export default function GestBarChart () {
    const data = [
        {
          "name": "Gas 1",
          "estoque": 77,
        },
        {
          "name": "Gas 2",
          "estoque": 99,
        },
        {
          "name": "Gas 3",
          "estoque": 45,
        },
        {
          "name": "Agua",
          "estoque": 23,
        },
      ];

    return <BarChart width={window.innerWidth} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="estoque" fill="#82ca9d" />
            </BarChart>
}