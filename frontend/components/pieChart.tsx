

import { PieChart, Pie, Cell } from 'recharts';
const RADIAN = Math.PI / 180;
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;

type GestPieChartProps ={
  data: any;
}
export default function GestPieChart (props: GestPieChartProps) {
  console.info(props.data?.substring(0,2))
  const data: any[] = [
    { name: 'A', value: 100 - Number(props.data?.substring(0,2)), color: '#C7417B' },
    { name: 'B', value: props.data?.substring(0,2), color: '#E9EEF4' },
  ]
      return (
        <PieChart width={300} height={200}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      );
}