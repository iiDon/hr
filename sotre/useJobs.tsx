import { getCookie } from "cookies-next";
import create from "zustand";

export interface IJob {
  id: number | undefined;
  title: string;
  salary?: string | undefined;
  status: string;
  endDate?: string | undefined;
  type?: string | undefined;
  created?: string;
  description?: string;
  candidate?: number[];
}

interface JobState {
  count: number;
  next: any;
  isFetched: boolean;
  jobs: IJob[];
  OpenedJobs: IJob[];
  fetchOpenedJobs: () => void;
  isFetchedOpenedJobs: boolean;
  fetchJobs: () => any;
  addJob: (job: IJob) => any;
  deleteJob: (id: number) => any;
  updateJob: (job: IJob) => any;
}

const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/`;

const useJobs = create<JobState>()((set, get) => ({
  count: 0,
  next: null,
  isFetched: false,
  jobs: [],

  // opened jobs
  isFetchedOpenedJobs: false,
  OpenedJobs: [],

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
  updateJob: async (job: IJob) => {
    const res = await fetch(URL + "/job/job/update/" + job.id + "/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getCookie("token")}`,
      },
      body: JSON.stringify(job),
    });
    // if (res.ok) {
    //   const jobs = get().jobs.filter((job) => job.id !== job.id);
    //   set({ jobs });
    //   return res;
    // }
    return res;
  },
  fetchOpenedJobs: async () => {
    const res = await fetch(URL + "job/job/");
    const data = await res.json();
    set({
      OpenedJobs: data.results as IJob[],
      isFetchedOpenedJobs: true,
    });
  },
}));

export default useJobs;
