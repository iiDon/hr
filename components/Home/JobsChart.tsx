import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useCandidates from "../../sotre/useCandidates";

const JobsChart = () => {
  const candidate = useCandidates((state) => state.candidates);
  const [monthOne, setMonthOne] = useState(0);
  const [monthTow, setMonthTow] = useState(0);
  const [monthThree, setMonthThree] = useState(0);
  const [monthFour, setMonthFour] = useState(0);

  useEffect(() => {
    candidate.map((candidate) => {
      if (
        new Date(candidate.created!).getMonth() ===
        new Date().getMonth() - 1
      ) {
        setMonthOne((prev) => prev + 1);
      }
      if (
        new Date(candidate.created!).getMonth() ===
        new Date().getMonth() - 2
      ) {
        setMonthTow((prev) => prev + 1);
      }
      if (
        new Date(candidate.created!).getMonth() ===
        new Date().getMonth() - 3
      ) {
        setMonthThree((prev) => prev + 1);
      }
      if (
        new Date(candidate.created!).getMonth() ===
        new Date().getMonth() - 4
      ) {
        setMonthFour((prev) => prev + 1);
      }
    });
  }, []);

  console.log(monthOne);

  const data = [
    {
      name: "A Month Ago",
      uv: monthOne,
      //   pv: 2400,
      //   amt: 2400,
    },
    {
      name: "2 Months Ago",
      uv: monthTow,
      //   pv: 1398,
      //   amt: 2210,
    },
    {
      name: "3 Months Ago",
      uv: monthThree,
      //   pv: 9800,
      //   amt: 2290,
    },
    {
      name: "4 Months Ago",
      uv: monthFour,
      //   pv: 3908,
      //   amt: 2000,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="blue" fill="blue" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default JobsChart;
