import { getCookie } from "cookies-next";
import create from "zustand";
import { IJob } from "./useJobs";

export interface ICondidateState {
  count: number;
  next: string | null;
  previous: string | null;
  isFetched: boolean;
  condidates: ICondidate[];
  fetchCondidates: () => any;
}

export interface ICondidate {
  id: number | undefined;
  fullName: string;
  created: string;
  lastUpdated: string;
  email: string;
  phone: string;
  job: IJob[];
  skills: ISkill[];
  certificates: ICertificate[];
  experiences: IExperince[];
  languages: ILanguage[];
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
  descreption: string;
  startDate: string;
  endDate: string;
  created: string;
  lastUpdated: string;
}

export interface IExperince {
  company: string;
  title: string;
  descreption: string;
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
  endDate: string;
  gpa: string;
  gpaOf: string;
  descreption: string;
  created: string;
  lastUpdated: string;
}

const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/`;

const useCondidates = create<ICondidateState>()((set, get) => ({
  count: 0,
  next: null,
  previous: null,
  isFetched: false,
  condidates: [],
  fetchCondidates: async () => {
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
      condidates: data.results as ICondidate[],
      isFetched: true,
    });
  },
}));

export default useCondidates;
