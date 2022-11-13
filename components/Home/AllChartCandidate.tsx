import React from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useCandidates from "../../sotre/useCandidates";
import useJobs from "../../sotre/useJobs";
const AllChart = () => {
  React.useEffect(() => {
    if (!CandidateFeched) {
      fechCandidates();
    }

    if (CandidateFeched) {
      CalculateCandidates();
    }
  }, []);

  const candidate = useCandidates((state) => state.candidates);
  const CandidateFeched = useCandidates((state) => state.isFetched);
  const fechCandidates = useCandidates((state) => state.fetchcandidates);

  const [TodayCandidates, setTodayCandidates] = React.useState(0);

  const CalculateCandidates = () => {
    candidate.map((candidate) => {
      if (new Date(candidate.created!).getDay() === new Date().getDay()) {
        setTodayCandidates((prev) => prev + 1);
      }
    });
  };

  const data = [
    {
      name: "Candidate",
      New: TodayCandidates / 2,
      All: candidate.length,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="All" stackId="a" fill="#8884d8" />
        <Bar dataKey="New" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AllChart;
