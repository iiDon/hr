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
    if (!JobFeched) {
      fechJobs();
    }
    if (!CandidateFeched) {
      fechCandidates();
    }

    if (JobFeched) {
      CalculateJobs();
    }

    if (CandidateFeched) {
      CalculateCandidates();
    }
  }, []);

  const jobs = useJobs((state) => state.jobs);
  const JobFeched = useJobs((state) => state.isFetched);
  const fechJobs = useJobs((state) => state.fetchJobs);

  const [TodayJobs, setTodayJobs] = React.useState(0);

  const candidate = useCandidates((state) => state.candidates);
  const CandidateFeched = useCandidates((state) => state.isFetched);
  const fechCandidates = useCandidates((state) => state.fetchcandidates);

  const [TodayCandidates, setTodayCandidates] = React.useState(0);

  const CalculateJobs = () => {
    jobs.map((job) => {
      if (new Date(job.created!).getDay() === new Date().getDay()) {
        setTodayJobs((prev) => prev + 1);
      }
    });
  };
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
      New: TodayCandidates,
      All: candidate.length,
    },
    {
      name: "Jobs",
      New: TodayJobs,
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

export default AllChart;
