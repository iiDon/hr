import create from "zustand";
export interface IJob {
  id: number;
  title: string;
  condidate: number;
  status: string;
  created_at: string;
}

const data: IJob[] = [
  {
    id: 1,
    title: "Staff Accountant IV",
    condidate: 250,
    status: "Closed",
    created_at: "7/5/2022",
  },
  {
    id: 2,
    title: "Account Coordinator",
    condidate: 378,
    status: "Continuous",
    created_at: "11/7/2021",
  },
  {
    id: 3,
    title: "Account Coordinator",
    condidate: 386,
    status: "Closed",
    created_at: "7/8/2023",
  },
  {
    id: 4,
    title: "Programmer Analyst II",
    condidate: 309,
    status: "Closed",
    created_at: "5/10/2023",
  },
  {
    id: 5,
    title: "Compensation Analyst",
    condidate: 836,
    status: "Continuous",
    created_at: "7/9/2022",
  },
  {
    id: 6,
    title: "Account Representative II",
    condidate: 728,
    status: "Closed",
    created_at: "3/28/2023",
  },
  {
    id: 7,
    title: "Mechanical Systems Engineer",
    condidate: 306,
    status: "Closed",
    created_at: "4/13/2023",
  },
  {
    id: 8,
    title: "VP Marketing",
    condidate: 251,
    status: "Closed",
    created_at: "3/19/2023",
  },
  {
    id: 9,
    title: "Staff Accountant II",
    condidate: 146,
    status: "Closed",
    created_at: "11/13/2022",
  },
  {
    id: 10,
    title: "Automation Specialist III",
    condidate: 661,
    status: "Continuous",
    created_at: "10/26/2022",
  },
  {
    id: 11,
    title: "Physical Therapy Assistant",
    condidate: 72,
    status: "Continuous",
    created_at: "1/2/2023",
  },
  {
    id: 12,
    title: "Media Manager III",
    condidate: 141,
    status: "Continuous",
    created_at: "12/26/2021",
  },
  {
    id: 13,
    title: "Environmental Tech",
    condidate: 998,
    status: "Continuous",
    created_at: "5/24/2022",
  },
  {
    id: 14,
    title: "Administrative Assistant IV",
    condidate: 203,
    status: "Closed",
    created_at: "10/6/2022",
  },
  {
    id: 15,
    title: "Research Nurse",
    condidate: 425,
    status: "Closed",
    created_at: "7/9/2022",
  },
  {
    id: 16,
    title: "Software Consultant",
    condidate: 910,
    status: "Continuous",
    created_at: "10/17/2021",
  },
  {
    id: 17,
    title: "Desktop Support Technician",
    condidate: 206,
    status: "Closed",
    created_at: "4/21/2023",
  },
  {
    id: 18,
    title: "Mechanical Systems Engineer",
    condidate: 322,
    status: "Closed",
    created_at: "11/13/2022",
  },
  {
    id: 19,
    title: "Engineer II",
    condidate: 704,
    status: "Closed",
    created_at: "11/8/2022",
  },
  {
    id: 20,
    title: "VP Product Management",
    condidate: 664,
    status: "Continuous",
    created_at: "12/23/2022",
  },
  {
    id: 21,
    title: "Research Assistant III",
    condidate: 483,
    status: "Continuous",
    created_at: "11/30/2022",
  },
  {
    id: 22,
    title: "Graphic Designer",
    condidate: 804,
    status: "Continuous",
    created_at: "1/29/2023",
  },
  {
    id: 23,
    title: "Technical Writer",
    condidate: 34,
    status: "Closed",
    created_at: "6/6/2022",
  },
  {
    id: 24,
    title: "Staff Scientist",
    condidate: 159,
    status: "Closed",
    created_at: "3/17/2022",
  },
  {
    id: 25,
    title: "Administrative Assistant III",
    condidate: 84,
    status: "Closed",
    created_at: "5/14/2022",
  },
  {
    id: 26,
    title: "Legal Assistant",
    condidate: 770,
    status: "Continuous",
    created_at: "12/20/2022",
  },
  {
    id: 27,
    title: "Tax Accountant",
    condidate: 395,
    status: "Closed",
    created_at: "10/20/2022",
  },
  {
    id: 28,
    title: "Nurse Practicioner",
    condidate: 669,
    status: "Closed",
    created_at: "4/30/2023",
  },
  {
    id: 29,
    title: "Staff Scientist",
    condidate: 839,
    status: "Continuous",
    created_at: "3/25/2022",
  },
  {
    id: 30,
    title: "Food Chemist",
    condidate: 87,
    status: "Continuous",
    created_at: "2/20/2023",
  },
  {
    id: 31,
    title: "Graphic Designer",
    condidate: 674,
    status: "Closed",
    created_at: "7/29/2022",
  },
  {
    id: 32,
    title: "Research Nurse",
    condidate: 69,
    status: "Closed",
    created_at: "1/14/2023",
  },
  {
    id: 33,
    title: "Business Systems Development Analyst",
    condidate: 691,
    status: "Closed",
    created_at: "12/13/2021",
  },
  {
    id: 34,
    title: "Software Consultant",
    condidate: 805,
    status: "Continuous",
    created_at: "7/22/2022",
  },
  {
    id: 35,
    title: "Web Designer I",
    condidate: 371,
    status: "Continuous",
    created_at: "6/23/2022",
  },
  {
    id: 36,
    title: "Recruiter",
    condidate: 588,
    status: "Continuous",
    created_at: "4/12/2022",
  },
  {
    id: 37,
    title: "Mechanical Systems Engineer",
    condidate: 516,
    status: "Closed",
    created_at: "7/11/2023",
  },
  {
    id: 38,
    title: "Web Designer II",
    condidate: 458,
    status: "Continuous",
    created_at: "12/14/2022",
  },
  {
    id: 39,
    title: "Software Test Engineer I",
    condidate: 350,
    status: "Continuous",
    created_at: "4/28/2022",
  },
  {
    id: 40,
    title: "Geological Engineer",
    condidate: 505,
    status: "Closed",
    created_at: "7/6/2022",
  },
];

interface JobState {
  jobs: IJob[];
  fetchJobs?: () => void;
}

// const URL = "https://api.jsonbin.io/v3/qs/6347a6d665b57a31e6949f6e";

const useJobs = create<JobState>()((set) => ({
  jobs: data,
  //   fetchJobs: async () => {
  //     const res = await fetch(URL);
  //     const data = await res.json();
  //     const fetchedJobs: IJob[] = data.record;
  //     set({ jobs: fetchedJobs });
  //   },
}));

export default useJobs;
