import { getCookie } from "cookies-next";
import create from "zustand";
import { IJob } from "./useJobs";

export interface IcandidateState {
  count: number;
  next: string | null;
  previous: string | null;
  isFetched: boolean;
  candidates: ICandidate[];
  fetchcandidates: () => any;
}

export interface ICandidate {
  id: number | undefined;
  fullName: string;
  created: string;
  lastUpdated: string;
  email: string;
  phone: string;
  job: IJob[];
  skill: ISkill[];
  certificate: ICertificate[];
  experince: IExperince[];
  language: ILanguage[];
  education: IEducation[];
}

export interface ISkill {
  name: string;
  level: string;
  created: string;
  lastUpdated: string;
}

export interface ICertificate {
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  created: string;
  lastUpdated: string;
}

export interface IExperince {
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  created: string;
  lastUpdated: string;
}

export interface ILanguage {
  name: string;
  level: string;
  created: string;
  lastUpdated: string;
}

export interface IEducation {
  university: string;
  degree: string;
  major: string;
  startDate: string;
  endDate?: string;
  gpa: string;
  gpaOf: string;
  descreption?: string;
  created?: string;
  lastUpdated?: string;
}

const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/`;

const useCandidates = create<IcandidateState>()((set, get) => ({
  count: 0,
  next: null,
  previous: null,
  isFetched: false,
  candidates: [],
  fetchcandidates: async () => {
    const res = await fetch(URL + "job/candidate/", {
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
      previous: data.previous,
      candidates: data.results as ICandidate[],
      isFetched: true,
    });
  },
}));

export default useCandidates;
