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
const AllChartJobs = () => {
  React.useEffect(() => {
    if (!JobFeched) {
      fechJobs();
    }

    if (JobFeched) {
      CalculateJobs();
    }
  }, []);

  const jobs = useJobs((state) => state.jobs);
  const JobFeched = useJobs((state) => state.isFetched);
  const fechJobs = useJobs((state) => state.fetchJobs);

  const [TodayJobs, setTodayJobs] = React.useState(0);

  const CalculateJobs = () => {
    jobs.map((job) => {
      if (new Date(job.created!).getDay() === new Date().getDay()) {
        setTodayJobs((prev) => prev + 1);
      }
    });
  };

  const data = [
    {
      name: "Jobs",
      New: TodayJobs / 2,
      All: jobs.length,
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

export default AllChartJobs;
