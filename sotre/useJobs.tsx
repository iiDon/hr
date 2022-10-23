import { getCookie } from "cookies-next";
import create from "zustand";

export interface IJob {
  id: number | undefined;
  title: string;
  salary?: string | null;
  status: string;
  endDate?: string | null;
  type?: string | null;
  created?: string;
  description?: string;
  condidate?: number[];
}

interface JobState {
  count: number;
  next: any;
  isFetched: boolean;
  jobs: IJob[];
  fetchJobs: () => any;
  addJob: (job: IJob) => any;
  deleteJob: (id: number) => any;
}

const URL = `http://138.197.180.181:8353/`;

const useJobs = create<JobState>()((set, get) => ({
  count: 0,
  next: null,
  isFetched: false,
  jobs: [],
  fetchJobs: async () => {
    const res = await fetch(URL + "job/job/all/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getCookie("token")}`,
      },
    });
    const data = await res.json();

    set({
      count: data.count as number,
      next: data.next,
      jobs: data.results as IJob[],
      isFetched: true,
    });
  },
  addJob: async (job: IJob) => {
    const res = await fetch(URL + "job/job/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getCookie("token")}`,
      },
      body: JSON.stringify(job),
    });
    const data: IJob = await res.json();
    set({
      jobs: [...get().jobs, data],
    });
    console.log(job);
    return res;
  },
  deleteJob: async (id: number) => {
    const res = await fetch(URL + "job/job/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getCookie("token")}`,
      },
    });
    if (res.ok) {
      const jobs = get().jobs.filter((job) => job.id !== id);
      set({ jobs });
    }
    return res;
  },
}));

export default useJobs;
